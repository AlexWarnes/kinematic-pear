<script>
  import { targetIdx, lookAtTarget, jointDescriptions } from '$lib/state';
  import { fade } from 'svelte/transition'

</script>

{#key $targetIdx}
  <div class="content" in:fade>
    <p>{jointDescriptions[$targetIdx].description}</p>
    <ul>
      {#each jointDescriptions[$targetIdx].examples as ex}
        <li>{ex}</li>
      {/each}
    </ul>
    <a href="{jointDescriptions[$targetIdx].link}" class="learn-more-link" target="_blank" rel="noopener noreferrer">Learn more</a>
  </div>
{/key}
<style>
  .content {
    margin: 0 auto;
    color: #fafbfc;
    max-width: 600px;
    width: 100%;
    padding: 1rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .learn-more-link {
    background: #fafbfc;
    color: #161616;
    padding: 0.75rem 0.875rem;
  }
</style>