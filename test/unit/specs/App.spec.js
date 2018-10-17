import { mount } from '@vue/test-utils'
import App from '@/App'
import FileView from '@/components/FileView'

class LocalStorage {
  storage = {

  }
  setItem (key, value) {
    this.storage[key] = value
  }
  getItem (key) {
    return this.storage[key]
  }
}

describe('App.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(App)
  })

  test('it should have a sidebar', () => {
    expect(wrapper.contains('.sidebar')).toBe(true)
  })

  test('it should have a content panel', () => {
    expect(wrapper.contains('.content')).toBe(true)
  })

  test('it\'s sidebar should have a file-form', () => {
    expect(wrapper.contains('.sidebar .file-form')).toBe(true)
  })

  test('it\'s sidebar should have a file-list', () => {
    expect(wrapper.contains('.sidebar .files-list')).toBe(true)
  })

  test('it should have an empty files array data property', () => {
    expect(wrapper.vm.files).toBeDefined()
    expect(wrapper.vm.files.length).toBe(0)
  })

  test('it should have a createFile function which is called when FileForm is submitted', () => {
    expect(typeof wrapper.vm.createFile).toBe('function')
  })

  test('it should have a selectedFile property initially set as null', () => {
    expect(wrapper.vm.selectedFile).toBeDefined()
    expect(wrapper.vm.selectedFile).toBeNull()
  })

  test('it should hide the editor and renderer initially but show the blank window of class .no-file-selected', () => {
    expect(wrapper.contains('.editor')).not.toBe(true)
    expect(wrapper.contains('.renderer')).not.toBe(true)
    expect(wrapper.contains('.no-file-selected')).toBe(true)
  })

  test('it should show the editor and renderer and hide .no-file-selected when selectedFile is set', () => {
    wrapper.setData({
      selectedFile: { name: 'Hello', content: 'Hi' }
    })
    expect(wrapper.contains('.editor')).toBe(true)
    expect(wrapper.contains('.renderer')).toBe(true)
    expect(wrapper.contains('.no-file-selected')).toBe(false)
  })

  test('it should push a valid file object in files data property when createFile is called', () => {
    let expectedFile = {
      name: 'New File',
      selected: false,
      favorite: false,
      content: ''
    }
    wrapper.vm.createFile('New File')
    expect(wrapper.vm.files).toEqual([expectedFile])
  })

  test('it should set the selectedFile to the file object referenced by .file-view when clicked on it and also flip the selected value to true', () => {
    let expectedFile = {
      name: 'New File',
      selected: true,
      favorite: false,
      content: ''
    }
    wrapper.vm.createFile(expectedFile.name)
    // wrapper.update()
    let onlyFileView = wrapper.find('.file-view')
    onlyFileView.trigger('click')
    expect(wrapper.vm.selectedFile).toEqual(expectedFile)
  })

  test('it should have only one .file-view which has .selected class on it', () => {
    wrapper.vm.createFile('New File')
    wrapper.vm.createFile('New File 2')
    // wrapper.update()
    let fileViews = wrapper.findAll('.file-view')
    fileViews.wrappers[0].trigger('click')
    fileViews.wrappers[1].trigger('click')
    let selectedFileViews = wrapper.findAll('.file-view.selected')
    expect(selectedFileViews.length).toBe(1)
  })

  test('it should have a removeFile method', () => {
    expect(typeof wrapper.vm.removeFile).toBe('function')
  })

  test('it should call removeFile method when bin icon is clicked', () => {
    wrapper.vm.createFile('New File')
    wrapper.setMethods({
      removeFile: jest.fn()
    })
    let binButton = wrapper.find('.file-view .file-remove')
    binButton.trigger('click')
    expect(wrapper.vm.removeFile).toHaveBeenCalled()
  })

  test('it should remove the file object from files data property when bin icon is clicked', () => {
    wrapper.vm.createFile('New File')
    // wrapper.update()
    let binButton = wrapper.find('.file-view .file-remove')
    binButton.trigger('click')
    expect(wrapper.vm.files.length).toBe(0)
  })

  describe('Renaming', () => {
    let file
    beforeEach(() => {
      file = {
        name: 'New File',
        selected: false,
        favorite: false,
        content: ''
      }
    })

    test('it should have a renameFile method', () => {
      expect(typeof wrapper.vm.renameFile).toBe('function')
    })

    test('it should call renameFile method when rename of FileView is called', () => {
      wrapper.vm.createFile(file.name)
      wrapper.setMethods({
        renameFile: jest.fn()
      })
      let fileView = wrapper.find(FileView)
      fileView.vm.rename(file, 'New File 2')
      expect(wrapper.vm.renameFile).toHaveBeenCalled()
    })

    test('it should rename the file object when rename of FileView is called', () => {
      wrapper.vm.createFile('New File')
      // wrapper.update()
      wrapper.vm.renameFile(wrapper.vm.files[0], 'New Name')
      expect(wrapper.vm.files[0].name).toBe('New Name')
    })
  })

  test('it not select the file which we edit when click on the input field', () => {
    wrapper.vm.createFile('New File')
    // wrapper.update()
    let fileView = wrapper.find(FileView)
    fileView.setData({
      editing: true
    })
    fileView.find('input[type="text"]').trigger('click')
    expect(wrapper.vm.selectedFile).toBeNull()
  })

  describe('LocalStorage', () => {
    let wrapper
    let localStorage = new LocalStorage()
    beforeEach(() => {
      wrapper = mount(App, {
        propsData: {
          localStorage
        }
      })
    })

    test('it should have a property to accept a localStorage dependency', () => {
      expect(wrapper.vm.localStorage).toBeDefined()
    })

    test('it should save the files array in localStorage when a file is created', () => {
      wrapper.vm.createFile('New File')
      // wrapper.update()
      expect(localStorage.getItem('files')).toBeTruthy()
    })

    test('it should have a saveData method', () => {
      expect(typeof wrapper.vm.saveData).toBe('function')
    })

    test('it should call saveData whenever files data property is changed', () => {
      wrapper.setMethods({
        saveData: jest.fn()
      })
      wrapper.vm.createFile('New File')
      // wrapper.update()
      expect(wrapper.vm.saveData).toHaveBeenCalled()
    })

    test('saveData should set files in the localStorage', () => {
      wrapper.vm.createFile('New File')
      // wrapper.update()
      expect(wrapper.vm.localStorage.getItem('files')).toBeTruthy()
    })

    test('it should parse the localStorage key files and set it to files data property', () => {
      let files = [
        {
          name: 'New File',
          selected: true,
          favorite: true,
          content: '**Hello**'
        }
      ]

      let localStorage = new LocalStorage()
      localStorage.setItem('files', JSON.stringify(files))
      let wrapper = mount(App, {
        propsData: {
          localStorage
        }
      })
      expect(wrapper.vm.files.length).toBe(1)
      expect(wrapper.vm.files[0].name).toBe(files[0].name)
    })

    test('it should set files to empty array if data is corrupt', () => {
      let localStorage = new LocalStorage()
      localStorage.setItem('files', ')(')
      let wrapper = mount(App, {
        propsData: {
          localStorage
        }
      })
      expect(wrapper.vm.files.length).toBe(0)
    })

    test('it should set files to empty array if data is corrupt', () => {
      let localStorage = new LocalStorage()
      localStorage.setItem('files', 'null')
      let wrapper = mount(App, {
        propsData: {
          localStorage
        }
      })
      expect(wrapper.vm.files.length).toBe(0)
    })

    test('it should set the selectedFile for the file whose selected is true', () => {
      let files = [
        {
          name: 'New File',
          selected: true,
          favorite: true,
          content: '**Hello**'
        }
      ]

      let localStorage = new LocalStorage()
      localStorage.setItem('files', JSON.stringify(files))
      let wrapper = mount(App, {
        propsData: {
          localStorage
        }
      })
      expect(wrapper.vm.selectedFile).toBeTruthy()
      expect(wrapper.vm.selectedFile.name).toBe(files[0].name)
    })
  })
})