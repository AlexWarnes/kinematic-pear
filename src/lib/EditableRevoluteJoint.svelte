<script>
  import { Vector3, Quaternion } from 'three'
  import { T } from '@threlte/core'
  import { Text, HTML } from '@threlte/extras'
  import { useRevoluteJoint, RigidBody, Collider, } from '@threlte/rapier'
  import Cube from '$lib/Cube.svelte';

export let position;
export let config = {
  anchorAPosition: { y: 1.8 },
  anchorBPosition: { x: 0, y: -1.8, z: 0.5},
  axisRotation: { z: 1, },
  limits: [],
}
const { joint ,rigidBodyA, rigidBodyB } = useRevoluteJoint(
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
    enabledRotations={[false, false, true]}
    mass={1}
  >
    <Collider shape="cuboid" args={[0.25, 2, 0.125]} />
    <Cube color="salmon" args={[0.5, 4, 0.25]}/>
  </RigidBody>

  <RigidBody 
    bind:rigidBody={$rigidBodyB} 
    mass={1}
  >
    <Collider shape="cuboid" args={[0.25, 2, 0.125]} />
    <Cube color="seagreen" args={[0.5, 4, 0.25]}/>
  </RigidBody>
</T.Group>