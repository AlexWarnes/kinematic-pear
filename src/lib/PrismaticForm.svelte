<script>
  import { Vec3Input, RotationSliders } from 'svelte-mathy-inputs';

  export let configStore;
</script>

<Vec3Input 
  bind:value={$configStore.anchorAPosition} 
  step={0.1} 
  groupLabel="AnchorA Position"
/>
<Vec3Input 
  bind:value={$configStore.anchorBPosition} 
  step={0.1} 
  groupLabel="AnchorB Position"
/>
<RotationSliders 
  bind:value={$configStore.axisRotation} 
  groupLabel="Axis Rotation"
/>

<p class="group-label">Limits</p>
<div class="limit-row">
  <label class="limit-label">
    min
    <input type="number" bind:value={$configStore.limits[0]}>
  </label>
  <label class="limit-label">
    max
    <input type="number" bind:value={$configStore.limits[1]}>
  </label>
</div>

<style>
  .limit-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
  }
  .limit-label input{
    display: block;
    width: 3rem;
  }
</style>
