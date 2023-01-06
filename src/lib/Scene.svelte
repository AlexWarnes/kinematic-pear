<script>
  import { Vector3 } from 'three'
  import { T, useFrame, OrbitControls, TransformableObject } from '@threlte/core';
  import Ground from '$lib/Ground.svelte';
  import RevoluteJ from '$lib/RevoluteJ.svelte';
  import FixedJ from '$lib/FixedJ.svelte';
  import SphericalJ from '$lib/SphericalJ.svelte';
  import PrismaticJ from '$lib/PrismaticJ.svelte';
  import AttractorTxfr from '$lib/AttractorTxfr.svelte';
  import { targetX,
targetY,
targetZ,
jointPositions } from '$lib/state'
</script>

<T.PerspectiveCamera 
  makeDefault 
  position.y={15} 
  position.z={0}
  let:ref={camRef}
>
  <TransformableObject 
    object={camRef}
    lookAt={{x: $targetX, y: 10, z: $targetZ}}
  />
  <!-- <OrbitControls /> -->
</T.PerspectiveCamera>

<T.DirectionalLight />
<T.AmbientLight />

<Ground />

  <FixedJ position={jointPositions[0]}/>
  <PrismaticJ position={jointPositions[1]}/>
  <RevoluteJ position={jointPositions[2]}/>
  <SphericalJ position={jointPositions[3]}/>

<!-- <AttractorTxfr /> -->