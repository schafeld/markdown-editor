<template>
  <div class="main">
      <div class="sidebar">
        <p>Work in progress...</p>
        <file-form></file-form>

        <file-view />

      </div>
      <div class="content">
        <editor v-model="content"></editor>
        <renderer :markdown="content"></renderer>
      </div>
  </div>
</template>

<script>
import Editor from './components/Editor'
import Renderer from './components/Renderer'
import FileForm from './components/FileForm'
import FileView from './components/FileView'

export default {
  data () {
    return {
      content: ''
    }
  },
  components: {
    Editor,
    Renderer,
    FileForm,
    FileView
  }
}
</script>

<style>
  .main {
    height: 100vh;
    display: flex;
    overflow: hidden;
  }
  .sidebar {
    flex-basis: 20%;
    background-color: #eee;
    padding: 1em;
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
