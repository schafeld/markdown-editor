import { mount } from '@vue/test-utils'
import FileView from '@/components/FileView'

describe('App.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(FileView)
  })

  test('it should have a class file-view', () => {
    expect(wrapper.classes()).toContain('file-view')
  })

  test('it should display the name of the file passed as prop in an element with class file-name', () => {
    let wrapper = mount(FileView, {
      propsData: {
        name: 'New File'
      }
    })
    expect(wrapper.contains('.file-name')).toBe(true)
    expect(wrapper.find('.file-name').text()).toBe('New File')
  })

  test('it should have an actions group of class actions-group which has elements of classes file-edit, file-remove and file-fav', () => {
    expect(wrapper.contains('.actions-group')).toBe(true)
    expect(wrapper.contains('.actions-group .file-edit')).toBe(true)
    expect(wrapper.contains('.actions-group .file-remove')).toBe(true)
    expect(wrapper.contains('.actions-group .file-fav')).toBe(true)
  })

  test('it should emit the delete event when clicked on file-remove', () => {
    let remove = wrapper.find('.file-remove')
    remove.trigger('click')
    expect(wrapper.emitted().delete).toBeTruthy()
  })

  test('it should emit the favorite event when clicked on file-fav', () => {
    let fav = wrapper.find('.file-fav')
    fav.trigger('click')
    expect(wrapper.emitted().favorite).toBeTruthy()
  })

  test('it\'s file-name should not have an input field initially', () => {
    expect(wrapper.contains('.file-name input[type="text"]')).toBe(false)
  })

  test('it\'s file-name should have an input field when component\'s editing value is true', () => {
    wrapper.setData({ editing: true })
    expect(wrapper.contains('.file-name input[type="text"]')).toBe(true)
  })

  test('it should toggle editing when clicked on .file-edit', () => {
    let initialValueOfEditing = wrapper.vm.editing
    let pencil = wrapper.find('.file-edit')
    pencil.trigger('click')
    expect(wrapper.vm.editing).toBe(!initialValueOfEditing)
  })

  test('it should emit the event rename when input in .file-view is submitted by pressing enter', () => {
    wrapper.setData({ editing: true })
    let input = wrapper.find('.file-name input[type="text"]')
    wrapper.setData({ fileName: 'New File 2' })
    input.trigger('keyup.enter')
    expect(wrapper.emitted().rename).toBeTruthy()
  })
})
