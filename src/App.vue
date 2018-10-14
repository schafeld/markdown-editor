<template>
  <div class="main">
    <div class="sidebar">
      <p>Work in progress...</p>
      <file-form @submit="createFile"></file-form>
      <div class="files-list">
        <file-view
          v-for="(file, index) in files"
          @fileClick="selectFile"
          @delete="removeFile(file)"
          @favorite="file.favorite ^= true"
          @rename="renameFile"
          :file="file"
          :key="index">
        </file-view>
      </div>
    </div>

    <div class="content">
      <template v-if="selectedFile">
        <editor v-model="selectedFile.content"></editor>
        <renderer :markdown="selectedFile.content"></renderer>
      </template>
      <div v-else class="no-file-selected">
        Please select a file.
      </div>
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
      // content: '',
      selectedFile: null,
      files: []
    }
  },
  components: {
    Editor,
    Renderer,
    FileForm,
    FileView
  },
  methods: {
    createFile (name) {
      this.files.push({
        name,
        selected: false,
        favorite: false,
        content: ''
      })
    },
    selectFile (file) {
      if (this.selectedFile) {
        this.selectedFile.selected = false
      }
      file.selected = true
      this.selectedFile = file
    },
    removeFile (file) {
      this.files.splice(this.files.indexOf(file), 1)
    },
    renameFile (file, newName) {
      file.name = newName
    }
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
  .files-list {
    margin-top: 1.5em;
  }
  .no-file-selected {
    flex-basis: 100%;
    background-color: #f9fafa;
    color: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .no-file-selected h1 {
    font-size: 50px;
  }
</style>
