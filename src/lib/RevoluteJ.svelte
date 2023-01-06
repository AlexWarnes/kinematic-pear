<script>
  import { T } from '@threlte/core'
  import { Text } from '@threlte/extras'
  import { useRevoluteJoint, RigidBody, Collider } from '@threlte/rapier'
  import Cube from '$lib/Cube.svelte';
  export let position = {
    x: 0, y: 10, z: 20
  }
  const { rigidBodyA: rbA, rigidBodyB: rbB } = useRevoluteJoint(
    { y: 2}, // anchorA Position
    { x: -0.75, }, // anchorB Position
    { x: 1, }, // axis Rotation
    undefined // limits
  )
  const { rigidBodyA: rbC, rigidBodyB: rbD } = useRevoluteJoint(
    { y: 1.8 }, // anchorA Position
    { x: 0, y: -1.8, z: 0.5}, // anchorB Position
    { z: 1, }, // axis Rotation
    undefined // limits
  )
  
</script>


<Text text="Revolute" position={{ ...position, y: position.y-5 }} scale={15} anchorX="center" lookAt={{z: -10}}/>

<!-- WINDMILL -->
<T.Group 
  position.y={position.y - 2} 
  position.x={position.x - 3} 
  position.z={position.z}
  rotation.y={Math.PI / 8}
>
  <RigidBody 
    bind:rigidBody={$rbA} 
    enabledTranslations={[false, false, false]}
    enabledRotations={[false, false, false]}
    mass={1}
  >
    <Collider shape="cuboid" args={[0.5, 0.5, 0.5]} />
    <Cube args={[1, 5, 1]}/>
  </RigidBody>

  <RigidBody 
    bind:rigidBody={$rbB} 
    angularVelocity={{ x: 25 }}
    mass={1}
  >
    <Collider shape="cuboid" args={[0.125, 2.5, 0.5]} />
    <Cube color="seagreen" args={[0.25, 5, 1]}/>
  </RigidBody>
</T.Group>


<!-- KNEE -->
<T.Group 
  position.y={position.y} 
  position.x={position.x + 1} 
  position.z={position.z + 5}
>
  <RigidBody 
    bind:rigidBody={$rbC} 
    enabledTranslations={[false, false, false]}
    enabledRotations={[false, false, true]}
    mass={1}
  >
    <Collider shape="cuboid" args={[0.25, 2, 0.125]} />
    <Cube color="salmon" args={[0.5, 4, 0.25]}/>
  </RigidBody>

  <RigidBody 
    bind:rigidBody={$rbD} 
    mass={1}
  >
    <Collider shape="cuboid" args={[0.25, 2, 0.125]} />
    <Cube color="seagreen" args={[0.5, 4, 0.25]}/>
  </RigidBody>
</T.Group>