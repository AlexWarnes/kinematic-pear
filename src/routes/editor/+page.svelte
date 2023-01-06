<script>
  import { Canvas } from '@threlte/core';
  import { World, Debug } from '@threlte/rapier';
  import { Vec3Input, RotationSliders } from 'svelte-mathy-inputs';
  import { jointDescriptions } from '$lib/state';
  import { selection, jointOptions, fixedJointConfig, revoluteJointConfig, revoluteAxisChanged, fixedFrameRotationChanged, prismaticJointConfig, prismaticAxisChanged, sphericalJointConfig, revoluteFanConfig, revoluteFanAxisChanged } from '$lib/editor_state';
  import EditorScene from '$lib/EditorScene.svelte';
  import Editor from '$lib/Editor.svelte';
  import Descriptions from '$lib/Descriptions.svelte';
  import EditableFixedJoint from '$lib/EditableFixedJoint.svelte';
  import EditableRevoluteJoint from '$lib/EditableRevoluteJoint.svelte';
  import EditableRevoluteFan from '$lib/EditableRevoluteFan.svelte';
  import EditablePrismaticJoint from '$lib/EditablePrismaticJoint.svelte';
  import EditableSphericalJoint from '$lib/EditableSphericalJoint.svelte';

</script>

<div class="canvas-wrapper">
  <Canvas>
    <World gravity={{x: 0, y: -9.8, z: 0}}>
      <Debug />
      <EditorScene>
        {#if $selection === "Fixed"}
          {#key $fixedFrameRotationChanged}
            <EditableFixedJoint config={$fixedJointConfig}/>
          {/key}
        {:else if $selection === "Prismatic"}
          {#key $prismaticAxisChanged}
            <EditablePrismaticJoint config={$prismaticJointConfig} />
          {/key}
        {:else if $selection === "Revolute"}
          {#key $revoluteAxisChanged}
            <EditableRevoluteJoint config={$revoluteJointConfig} />
          {/key}
        {:else if $selection === "RevoluteFan"}
          {#key $revoluteFanAxisChanged}
            <EditableRevoluteFan config={$revoluteFanConfig} />
          {/key}
        {:else if $selection === "Spherical"}
            <EditableSphericalJoint config={$sphericalJointConfig} />
        {/if}
      </EditorScene>
    </World>
  </Canvas>
  <div class="editor-box">
    <Editor />
  </div>
</div>

<style>
  .canvas-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background: #000000;
  }

  .editor-box {
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: white;
    background: #00000088;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-flow: column;
  }

</style>