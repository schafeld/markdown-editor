<template>
  <div class="main">
      <div class="sidebar">
        <p>Work in progress...</p>
        <file-form></file-form>
      </div>
      <div class="content">
        <editor v-model="content"></editor>
        <renderer :markdown="content"></renderer>
      </div>
  </div>
</template>

<script>
import Editor from './Editor'
import Renderer from './Renderer'
import FileForm from './FileForm'

export default {
  data () {
    return {
      content: ''
    }
  },
  components: {
    Editor,
    Renderer,
    FileForm
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
