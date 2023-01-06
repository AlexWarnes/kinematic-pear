<script>
  import { Vector3, } from 'three'
  import { T } from '@threlte/core'
  import { usePrismaticJoint, RigidBody, Collider } from '@threlte/rapier'
  import Cube from '$lib/Cube.svelte';

export let position;
export let config = {
  anchorAPosition: { y: 2 }, // anchorA Position
  anchorBPosition: { y: 1 }, // anchorB Position
  axisRotation: { y: 2 }, // axis Rotation
  limits: [0, 4] // limits
};
const { joint ,rigidBodyA, rigidBodyB } = usePrismaticJoint(
  config.anchorAPosition,
  config.anchorBPosition,
  config.axisRotation,
  config.limits,
)

let v3 = new Vector3();

function updateJoint(action, value){
  if($joint){
    switch(action){
      case 'setAnchor1':
        v3.set(value.x, value.y, value.z)
        $joint.body1().wakeUp()
        $joint.setAnchor1(v3)
        break;
      case 'setAnchor2':
        v3.set(value.x, value.y, value.z)
        $joint.body2().wakeUp()
        $joint.setAnchor2(v3)
        break;
      case 'setLimits':
        $joint.setLimits(value[0], value[1])
      default:
        console.error("Unrecognzed joint action:", action)
    }
  }
}

$: updateJoint('setAnchor1', config.anchorAPosition)
$: updateJoint('setAnchor2', config.anchorBPosition)
$: updateJoint('setLimits', config.limits)

</script>


<T.Group 
  position.y={10}
>
  <RigidBody 
    bind:rigidBody={$rigidBodyA} 
    enabledTranslations={[false, false, false]}
    enabledRotations={[false, false, false]}
  >
    <Collider shape="cuboid" args={[0.5, 0.5, 0.5]} restitution={1}/>
    <Cube />
  </RigidBody>

  <RigidBody 
    bind:rigidBody={$rigidBodyB} 
  >
    <Collider shape="cylinder" args={[0.5, 0.25]} restitution={1}/>
    <T.Mesh>
      <T.CylinderGeometry args={[0.25, 0.25]}/>
      <T.MeshStandardMaterial color="seagreen" />
    </T.Mesh>
  </RigidBody>
</T.Group>