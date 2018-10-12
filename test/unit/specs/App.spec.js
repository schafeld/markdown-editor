// Maybe just use this in the end:
// https://github.com/ankurrsinghal/markdown-editor/blob/master/test/unit/specs/App.spec.js
import Vue from 'vue'
import App from '@/App'
import { mount } from '@vue/test-utils'

describe('App.vue', () => {
  // this is used in Medium tutorial
  let vm
  beforeAll(() => {
    const Constructor = Vue.extend(App)
    vm = new Constructor().$mount()
  })
  // this is instead used in author's repository
  let wrapper
  beforeEach(() => {
    wrapper = mount(App)
  })

  test('it should have a sidebar', () => {
    expect(vm.$el.querySelector('.sidebar'))
      .not
      .toBeNull()
  })
  test('it should have a content panel', () => {
    expect(vm.$el.querySelector('.content'))
      .not
      .toBeNull()
  })
  test('it\'s content panel should have an editor', () => {
    expect(vm.$el.querySelector('.content .editor'))
      .not
      .toBeNull()
  })
  test('it\'s content panel should have an renderer', () => {
    expect(vm.$el.querySelector('.content .renderer'))
      .not
      .toBeNull()
  })

  // Tutorial mixes up vm and wrapper. :( TODO: Pick one / DRY
  test('it\'s sidebar should have a file-list', () => {
    expect(wrapper.contains('.sidebar .files-list')).toBe(true)
  })

  test('it should have an empty files array data property', () => {
    expect(wrapper.vm.files).toBeDefined()
    expect(wrapper.vm.files.length).toBe(0)
  })
})
