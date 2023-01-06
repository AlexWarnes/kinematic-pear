<!-- <script>
  import { Canvas } from '@threlte/core';
  import { World, Debug } from '@threlte/rapier';
  import { targetIdx, lookAtTarget, jointDescriptions } from '$lib/state';
  import Scene from '$lib/Scene.svelte';
  import Descriptions from '$lib/Descriptions.svelte';

  $: lookAtTarget($targetIdx)
  console.clear()
</script>

<div class="canvas-wrapper">
  <div class="description-box">
    <Descriptions />
  </div>
  <Canvas>
    <World>
      <Debug />
      <Scene />
    </World>
  </Canvas>
  <div class="controls-box">
    <button on:click={() => targetIdx.decrement()} class="btn left">{`<`}</button>
    <button on:click={() => targetIdx.increment()} class="btn right">{`>`}</button>
  </div>
</div>

<style>
  .canvas-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background: royalblue;
  }
  .description-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  .controls-box {
    position: fixed;
    width: 100%;
    top: 85%;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn {
    width: 4rem;
    height: 4rem;
    font-size: 3rem;
    border: none;
    background-color: #00000088;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
  }

</style> -->

<h1>JOINTS</h1>

