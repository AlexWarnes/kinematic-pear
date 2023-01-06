<script>
  import { T, TransformControls } from '@threlte/core'
  import {  } from '@threlte/extras'
  import { Collider, Attractor } from '@threlte/rapier'
  import Ball from '$lib/Ball.svelte';
</script>

<T.Group position.y={15}>
  <Ball />
  <Attractor />
  <TransformControls />
</T.Group>

