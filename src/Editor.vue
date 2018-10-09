<template>
  <div class="editor">
    <textarea :value="value"
        @input="$emit('input', $event.target.value)"
        placeholder="Your markdown here...">
    </textarea>
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style scoped>
textarea {
  width: 100%;
  height: 100%;
  display: block;
  padding: 1em;
  border: none;
  resize: none;
  outline: none;
  font-family: 'Ubuntu Mono', monospace;
  font-size: 16px;
}
</style>
