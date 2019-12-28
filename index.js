import Calendar from './src/index'

const install = Vue => {
    Vue.component(Calendar.name, Calendar)
}

export default {
    install,
    Calendar,
}