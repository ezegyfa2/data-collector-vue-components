export default {
    install() {
        if (!window.templates) {
            window.templates = {}
        }
        window.templates.data_collector_layout = require('./Layout/layout').default
        window.templates.data_collector_navigationBar = require('./Layout/NavigationBar/navigationBar').default
        window.templates.blue_admin_notificationLink = require('./Layout/NavigationBar/notificationsLink').default
        window.templates.data_collector_sidebar = require('./Layout/sidebar').default
        
        window.templates.blue_admin_edit = require('./edit').default
        window.templates.blue_admin_index = require('./index').default
    }
}