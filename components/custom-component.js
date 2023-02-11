const ComponentLoader = require('adminjs')

const componentLoader = new ComponentLoader()

const Components = {
    MyInput: componentLoader.add('MyInput', './template'),
    // other custom components
}

module.exports = { componentLoader, Components }