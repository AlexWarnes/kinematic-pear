<script>
  import { T } from '@threlte/core'
  import { Text } from '@threlte/extras'
  import { useSphericalJoint, RigidBody, Collider } from '@threlte/rapier'
  import Cube from '$lib/Cube.svelte';
  export let position = {
    x: 20, y: 10, z: 0
  }

  const { rigidBodyA, rigidBodyB } = useSphericalJoint(
    { x: 0, y: 0.5, z: 0 }, // anchorA Position
    { x: 0, y: 2.5}, // anchorB Position
  )

  
</script>


<T.Group 
  position.y={position.y} 
  position.x={position.x} 
  position.z={position.z}
>
  <Text text="Spherical" position={{ y: -5 }} scale={15} anchorX="center" lookAt={{x: 10}}/>
  <RigidBody 
    bind:rigidBody={$rigidBodyA} 
    enabledTranslations={[false, false, false]}
    angularVelocity={{ y: 2, }}
    mass={1}
  >
    <Collider shape="cuboid" args={[0.5, 0.5, 0.5]} />
    <Cube />
  </RigidBody>

  <RigidBody 
    bind:rigidBody={$rigidBodyB} 
    mass={2}
    position={{ x: 2, y: 2}}
  >
    <Collider shape="cone" args={[2.5, 0.25]} />
    <T.Mesh>
      <T.CylinderGeometry args={[0, 0.25, 5]}/>
      <T.MeshStandardMaterial color="seagreen" />
    </T.Mesh>
  </RigidBody>
</T.Group>