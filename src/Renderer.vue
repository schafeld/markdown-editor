<template>
    <div class="renderer">
        <div v-html="htmlFromMarkdown"></div>
    </div>
</template>

<script>
import marked from 'marked'
import highlight from 'highlight.js'

marked.setOptions({
  highlight (code, lang) {
    return highlight.highlightAuto(code, [lang]).value
  }
})

export default {
  props: ['markdown'],
  computed: {
    htmlFromMarkdown () {
      return marked(this.markdown)
    }
  }
}
</script>

<style scoped>
.renderer{
  font-size: 16px;
  padding-left: 1em;
}
</style>
