<script>
  import { T } from '@threlte/core'
  import { Text, HTML } from '@threlte/extras'
  import { useFixedJoint, RigidBody, Collider } from '@threlte/rapier'
  import Cube from '$lib/Cube.svelte';

export let position = {
    x: 0, y: 10, z: 20
  }
  const { joint, rigidBodyA, rigidBodyB } = useFixedJoint(
    { y: 2 }, // anchorA Position
    {}, // frameA Rotation
    { y: -2 }, // anchorB Position
    {} // frameB Rotation
  )
/**
 *     position.y={position.y} 
  position.x={position.x} 
  position.z={position.z}
*/
  
</script>


<T.Group 
  position.y={position.y} 
  position.x={position.x} 
  position.z={position.z}
>
<Text text="Fixed" position={{ y: -5 }} scale={15} anchorX="center"/>
<RigidBody 
  bind:rigidBody={$rigidBodyA}
  enabledTranslations={[false, false, false]} 
  angularVelocity={{x: 5, y: 5, z: 5}}
>
	<Collider shape="cuboid" args={[0.5, 0.5, 0.5]} />
  <Cube />
</RigidBody>

<RigidBody bind:rigidBody={$rigidBodyB}>
	<Collider shape="cuboid" args={[0.5, 0.5, 0.5]} />
  <Cube color="seagreen"/>
</RigidBody>

<!-- <Text text="Fixed Joints have no relative degrees of freedom. Note how they are locked into the same rotation and the distance between them never changes." 
  position={{ y: 6 }} scale={4} anchorX="center" maxWidth={2} /> -->

</T.Group>
