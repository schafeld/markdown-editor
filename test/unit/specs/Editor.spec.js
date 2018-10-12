import Vue from 'vue'
import Editor from '@/components/Editor'

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

  test('it should display the content in textarea when passed as a prop', () => {
    // vm has to be created again because props need to be passed to it
    let vm = new Constructor({ propsData: { 'value': 'hello' } }).$mount()
    expect(vm.$el.querySelector('textarea').value).toBe('hello')
    })
})
