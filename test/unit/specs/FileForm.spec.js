import { mount } from '@vue/test-utils'
import FileForm from '@/FileForm'

describe('FileForm.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(FileForm)
  })

  test('it should have a class file-form', () => {
    expect(wrapper.classes()).toContain('file-form')
  })

  test('it should have a form, input and button', () => {
    expect(wrapper.contains('form')).toBe(true)
    expect(wrapper.contains('input[type="text"]')).toBe(true)
    expect(wrapper.contains('button[type="submit"]')).toBe(true)
  })
})
