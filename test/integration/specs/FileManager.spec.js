import { mount } from '@vue/test-utils'
import App from '@/App'
import FileForm from '@/components/FileForm'

describe('App.vue', () => {
  test('on successfull submit of the FileForm.vue createFile method of App.vue should be called', () => {
    let appWrapper = mount(App)
    appWrapper.setMethods({
      createFile: jest.fn()
    })
    let fileFormComponent = appWrapper.find(FileForm)
    fileFormComponent.setData({
      name: 'New File'
    })
    appWrapper.find('form').trigger('submit')
    expect(appWrapper.vm.createFile).toHaveBeenCalled()
  })

  test('on successfull submit of the FileForm.vue files data property should be incremented by one', () => {
    let appWrapper = mount(App)
    let fileFormComponent = appWrapper.find(FileForm)
    fileFormComponent.setData({
      name: 'New File'
    })
    appWrapper.find('form').trigger('submit')
    expect(appWrapper.vm.files.length).toBe(1)
  })

  test('it should render list of FileView components from files data property', () => {
    let appWrapper = mount(App)
    let fileFormComponent = appWrapper.find(FileForm)
    fileFormComponent.setData({
      name: 'New File'
    })
    let form = appWrapper.find('form')
    fileFormComponent.setData({
      name: 'New File'
    })
    form.trigger('submit')
    fileFormComponent.setData({
      name: 'New File 2'
    })
    form.trigger('submit')
    let fileViews = appWrapper.findAll('.file-view')
    expect(fileViews.length).toBe(2)
  })
})