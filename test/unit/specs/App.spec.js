import Vue from 'vue'
import App from '@/App'

describe('App.vue', () => {
  test('it should have a sidebar', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.sidebar'))
      .not
      .toBeNull()
  })
})
