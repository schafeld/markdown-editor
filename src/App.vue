<template>
  <div class="main">
    <p>Work in progress...</p>
      <div class="sidebar">(Sidebar)</div>
      <div class="content">
        <Editor v-model="content"></Editor>
        <renderer :markdown="content"></renderer>
      </div>
  </div>
</template>

<script>
import Editor from './Editor'
import Renderer from './Renderer'

export default {
  data () {
    return {
      content: ''
    }
  },
  components: {
    Editor,
    Renderer
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
