<script>
  import { T } from '@threlte/core'
  import { Collider } from '@threlte/rapier'
  export let position
  export let color = "coral"
  export let args = [1]
  $: colliderArgs = args.map(v => v / 2);
</script>

<Collider shape="ball" args={colliderArgs} {position}>
  <T.Mesh>
    <T.SphereGeometry {args} />
    <T.MeshStandardMaterial {color} />
  </T.Mesh>
</Collider>

