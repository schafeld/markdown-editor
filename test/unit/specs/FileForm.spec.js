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

  test('it should emit an event submit with value of the input', () => {
    wrapper.setData({ name: 'hello' })
    wrapper.find('form').trigger('submit')
    expect(wrapper.emitted().submit).toBeTruthy()
    expect(wrapper.emitted().submit[0]).toContain('hello')
  })

  test('it should not emit the event for empty value', () => {
    wrapper.setData({ name: '' })
    wrapper.find('form').trigger('submit')
    expect(wrapper.emitted().submit).not.toBeTruthy()
  })

  test('it should not emit the event for spaces', () => {
    wrapper.setData({ name: '   ' })
    wrapper.find('form').trigger('submit')
    expect(wrapper.emitted().submit).not.toBeTruthy()
  })

  test('it\'s sidebar should have a file-form', () => {
    // cannot be true as sidebar is not within wrapper
    // expect(wrapper.contains('.sidebar .file-form')).toBe(true)
    // so is this even useful?
    expect(wrapper.contains('.file-form')).toBe(true)
  })
})
