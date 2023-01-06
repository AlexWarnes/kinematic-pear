<script>
  import { Vec3Input, RotationSliders } from 'svelte-mathy-inputs';
    import { selection, jointOptions, fixedJointConfig, revoluteJointConfig, revoluteAxisChanged } from './editor_state';

/**
 * anchorAPosition
 * frameARotation
 * anchorBPosition
 * frameBRotation
*/
  export let configStore;
</script>

<Vec3Input 
  bind:value={$configStore.anchorAPosition} 
  step={0.1} 
  groupLabel="AnchorA Position"
/>
<RotationSliders 
  bind:value={$configStore.frameARotation} 
  groupLabel="frameA Rotation"
/>
<Vec3Input 
  bind:value={$configStore.anchorBPosition} 
  step={0.1} 
  groupLabel="AnchorB Position"
/>
<RotationSliders 
  bind:value={$configStore.frameBRotation} 
  groupLabel="frameB Rotation"
/>