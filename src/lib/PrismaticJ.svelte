<script>
  import { T } from '@threlte/core'
  import { Text } from '@threlte/extras'
  import { usePrismaticJoint, RigidBody, Collider } from '@threlte/rapier'
  import Cube from '$lib/Cube.svelte';
  export let position = {
    x: 20, y: 10, z: 0
  };
  const { joint, rigidBodyA, rigidBodyB } = usePrismaticJoint(
    { y: 2 }, // anchorA Position
    { y: 1,}, // anchorB Position
    { y: 2 }, // axis Rotation
    [0, 4] // limits
  )

  
</script>


<T.Group 
  position.y={position.y} 
  position.x={position.x} 
  position.z={position.z}
>
<Text text="Prismatic" position={{ y: -5 }} scale={15} anchorX="center" lookAt={{x: -10}}/>
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