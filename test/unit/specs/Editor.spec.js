import Vue from 'vue'
import Editor from '@/Editor'

describe('App.vue', () => {
  let vm
  let Constructor
  beforeAll(() => {
    Constructor = Vue.extend(Editor)
    vm = new Constructor().$mount()
  })
  test('it should have a class editor', () => {
    expect(vm.$el.className).toBe('editor')
  })
})
