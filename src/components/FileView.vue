<template>
  <div class="file-view">
  <div class="file-name">
    <input @keyup.enter="rename" v-if="editing" type="text" v-model="fileName" />
    <span v-else>{{ name }}</span>
  </div>
    <div class="actions-group">
      <span @click="editing = !editing" class="file-edit">
          <i class="fas fa-pencil-alt"></i>
      </span>
      <span @click="$emit('delete')" class="file-remove">
        <i class="fas fa-times-circle"></i>
      </span>
      <span @click="$emit('favorite')" class="file-fav">
        <i class="fas fa-heart"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name'],
  data () {
    return {
      fileName: this.name,
      editing: false
    }
  },
  methods: {
    rename () {
      this.$emit('rename', this.file, this.fileName)
      this.editing = false
    }
  }
}
</script>

<style scoped>
.file-view {
  padding: 6px;
  margin-bottom: 1em;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  font-size: 12px;
}
.file-view:hover{
  background-color: #f9fafa;
}
.file-view.selected {
  background-color: #f9fafa;
}
.file-name {
  font-weight: 500;
  flex: 1;
}
.actions-group span{
  margin: 4px;
}
.file-edit,
.file-remove,
.file-fav {
  color: #ddd;
}
.file-fav:hover,
.file-fav.favorite {
  color: red;
}
.file-remove:hover {
  color: purple;
}
.file-edit:hover {
  color: #333333;
}
.file-name input{
  outline: none;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #ddd;
  width: 100%;
}
</style>
