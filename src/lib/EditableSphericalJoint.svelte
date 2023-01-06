<script>
  import { Vector3, Quaternion } from 'three'
  import { T } from '@threlte/core'
  import { Text, HTML } from '@threlte/extras'
  import { useSphericalJoint, RigidBody, Collider, } from '@threlte/rapier'
  import Cube from '$lib/Cube.svelte';

export let position;
export let config = {
  anchorAPosition: { x: 0, y: -0.5, z: 0 },
  anchorBPosition: { x: 0, y: 2.5, z: 0 }
}
const { joint ,rigidBodyA, rigidBodyB } = useSphericalJoint(
  config.anchorAPosition,
  config.anchorBPosition,
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
      default:
        console.error("Unrecognzed joint action:", action)
    }
  }
}

$: updateJoint('setAnchor1', config.anchorAPosition)
$: updateJoint('setAnchor2', config.anchorBPosition)

</script>


<T.Group 
  position.y={10}
>
  <RigidBody 
    bind:rigidBody={$rigidBodyA} 
    enabledTranslations={[false, false, false]}
    mass={1}
  >
    <Collider shape="cuboid" args={[0.5, 0.5, 0.5]} />
    <Cube />
  </RigidBody>

  <RigidBody 
    bind:rigidBody={$rigidBodyB} 
    mass={2}
  >
    <Collider shape="cone" args={[2.5, 0.25]} />
    <T.Mesh>
      <T.CylinderGeometry args={[0, 0.25, 5]}/>
      <T.MeshStandardMaterial color="seagreen" />
    </T.Mesh>
  </RigidBody>
</T.Group>