<script>
  import { Canvas } from '@threlte/core';
  import { World, Debug } from '@threlte/rapier';
  import { Vector3 } from 'three'
  import { T, OrbitControls } from '@threlte/core';
  import Ground from '$lib/Ground.svelte';
  // import RevoluteJ from '$lib/RevoluteJ.svelte';
  // import FixedJ from '$lib/FixedJ.svelte';
  // import SphericalJ from '$lib/SphericalJ.svelte';
  // import PrismaticJ from '$lib/PrismaticJ.svelte';
  // Fixed, Pris, Rev, Sph
  export let debug = false;

</script>



<!-- <FixedJ position={jointPositions[0]}/>
<RevoluteJ position={jointPositions[1]}/>
<SphericalJ position={jointPositions[2]}/>
<PrismaticJ position={jointPositions[3]}/> -->

<!-- <AttractorTxfr /> -->

<div class="canvas-wrapper">
  <Canvas>
    <World>
      <Debug visible={debug} />
      <T.PerspectiveCamera 
        makeDefault 
        position.y={15} 
        position.z={20}
      >
        <OrbitControls />
      </T.PerspectiveCamera>

      <T.DirectionalLight />
      <T.AmbientLight />

      <Ground />
      <slot />
    </World>
  </Canvas>
</div>

<style>
  .canvas-wrapper {
    position: relative;
    max-width: 320px;
    width: 100%;
    max-height: 320px;
    height: 100%;
    background: royalblue;
  }
</style>