<script>
  import { T } from '@threlte/core'
  import { Collider } from '@threlte/rapier'
  import { Grid } from '@threlte/extras'
</script>

<Collider shape="cuboid" args={[50, 0.25, 50]} position={{ y: -2 }}>
  <Grid 
    infiniteGrid 
    cellColor="#ffffff" 
    cellThickness={0.75} 
    sectionColor="#ffffff" 
    sectionSize={5} 
    sectionThickness={0.875}
    fadeDistance={75}
  />
</Collider>

