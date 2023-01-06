<script>
  import { selection, jointOptions, fixedJointConfig, revoluteJointConfig, prismaticJointConfig, sphericalJointConfig, revoluteFanConfig } from './editor_state';
  import RevoluteForm from './RevoluteForm.svelte';
  import FixedForm from './FixedForm.svelte';
  import PrismaticForm from './PrismaticForm.svelte';
  import SphericalForm from './SphericalForm.svelte';
</script>

<label class="joint-select">Joint Example:
  <select bind:value={$selection}>
    {#each jointOptions as joint}
      <option value={joint}>{joint}</option>
    {/each}
  </select>
</label>

{#if $selection === "Fixed"}
  <FixedForm configStore={fixedJointConfig} />
{:else if $selection === "Prismatic"}
  <PrismaticForm configStore={prismaticJointConfig} />
{:else if $selection === "Revolute"}
  <RevoluteForm configStore={revoluteJointConfig} />
{:else if $selection === "RevoluteFan"}
  <RevoluteForm configStore={revoluteFanConfig} />
{:else if $selection === "Spherical"}
  <SphericalForm configStore={sphericalJointConfig} />
{/if}

<!-- TODO: binding directly on axis change causes too many rapid updates on drag, might be worth adding a debounce -->
<style>
  label {
    color: white;
    display: block;
    width: 8rem;
  }

</style>