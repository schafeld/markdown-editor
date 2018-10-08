<template>
  <div class="main">
    <p>Work in progress...</p>
      <div class="sidebar">(Sidebar)</div>
      <div class="content">
        <Editor />
        <div class="renderer">(Renderer)</div>
      </div>
  </div>
</template>

<script>
import Editor from './Editor'

export default {
  components: {
    Editor
  }
}
</script>

<style scoped>
  .main {
    height: 100vh;
    display: flex;
    overflow: hidden;
  }
  .sidebar {
    flex-basis: 20%;
    background-color: #eee;
  }
  .content {
    flex-basis: 80%;
    display: flex;
  }
  .editor,
  .renderer {
    flex-basis: 50%;
  }
  .editor{
    border-right: 2px solid #ddd;
  }
</style>
