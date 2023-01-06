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