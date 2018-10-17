<template>
  <div class="file-form">
    <form @submit.prevent="submit">
      <input v-model="name" type="text" placeholder="File Name" />
      <button type="submit">
        <i class="fas fa-plus"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FileForm',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    submit () {
      if (!this.name.trim()) {
        return
      }
      this.$emit('submit', this.name)
      this.name = ''
    }
  }
}
</script>

<style>
.file-form input {
  width: 70%;
  border: 1px solid #333;
  outline: none;
  padding: 6px;
  font-size: 12px;
}

.file-form button {
  width: 20%;
  float: right;
  border: 1px solid #333;
  outline: none;
  padding: 6px;
  font-size: 12px;
  cursor: pointer;
}
</style>
