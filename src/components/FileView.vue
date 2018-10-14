<template>
  <div class="file-view" @click="$emit('fileClick', file)"
      :class="{'selected': file.selected, 'favorite': file.favorite}">
    <div class="file-name">
      <input @click.stop="''" @keyup.enter="$emit('rename', $event.target.value)" v-if="editing" type="text" v-model="fileName" />
      <span v-else>{{ file.name }}</span>
    </div>
    <div class="actions-group">
      <span @click.stop="editing = !editing" class="file-edit">
          <i class="fas fa-pencil-alt"></i>
      </span>
      <span @click.stop="$emit('delete')" class="file-remove">
        <i class="fas fa-times-circle"></i>
      </span>
      <span @click.stop="$emit('favorite')" class="file-fav">
        <i class="fas fa-heart"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['file'],
  data () {
    return {
      fileName: this.file.name,
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
.file-view.selected {
  background-color: #f9fafa;
}
.file-view.favorite .file-fav{
  color: red;
}
</style>
