import Vue from 'vue'
import App from '@/App'

describe('App.vue', () => {
  let vm
  beforeAll(() => {
    const Constructor = Vue.extend(App)
    vm = new Constructor().$mount()
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
})
