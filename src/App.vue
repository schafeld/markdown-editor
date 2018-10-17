<template>
  <div class="main">
      <div class="sidebar">
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
          <h1>Please select a file.</h1>
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
  props: ['localStorage'],
  data () {
    return {
      selectedFile: null,
      files: []
    }
  },
  created () {
    if (this.localStorage) {
      try {
        this.files = JSON.parse(this.localStorage.getItem('files')) || []
        this.selectedFile = this.files.filter(f => f.selected)[0]
      } catch (e) {}
    }
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
      if (file === this.selectedFile) {
        this.selectedFile = null
      }
      this.files.splice(this.files.indexOf(file), 1)
    },
    renameFile (file, newName) {
      file.name = newName
    },
    saveData () {
      this.localStorage && this.localStorage.setItem('files', JSON.stringify(this.files))
    }
  },
  watch: {
    files: {
      handler (newValue, oldValue) {
        this.saveData()
      },
      deep: true
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

.sidebar {
  flex-basis: 20%;
  background-color: #eee;
  padding: 1em;
  overflow-y: auto;
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
