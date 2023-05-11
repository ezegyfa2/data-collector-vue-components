export default {
    install() {
        if (!window.templates) {
            window.templates = {}
        }
        window.templates.data_collector_layout = require('./Layout/layout').default
        window.templates.data_collector_sidebar = require('./Layout/sidebar').default
        
        window.templates.data_collector_edit = require('./edit').default
        window.templates.data_collector_index = require('./index').default
    }
}