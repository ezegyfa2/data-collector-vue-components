export default {
	install(Vue) {
		require('blue-admin-vue-components').default.install(Vue)

		require('./Templates/templateRegister').default.install()
		require('./FilterFormItems/register').default.install(Vue)

		registerVueComponent(
			'data-collector-page', 
			require('./AdminPage/Component.vue').default, 
			Vue,
			'data-collector-vue-components/src/AdminPage/Component.vue'
		);

		registerVueComponent(
			'data-collector-centered-content-page',
			require('./CenteredContentPage/Component.vue').default,
			Vue,
			'data-collector-vue-components/src/CenteredContentPage/Component.vue'
		);

		registerVueComponent(
			'data-collector-centered-content',
			require('./CenteredContent/Component.vue').default,
			Vue,
			'data-collector-vue-components/src/CenteredContent/Component.vue'
		);

		registerVueComponent(
			'data-collector-form',
			require('./Forms/AdminForm/Component.vue').default,
			Vue,
			'data-collector-vue-components/src/Forms/AdminForm/Component.vue'
		);

		registerVueComponent(
			'bootstrap-form',
			require('./Forms/Form/Component.vue').default,
			Vue,
			'data-collector-vue-components/src/Forms/Form/Component.vue'
		);

		registerVueComponent(
			'data-collector-sidebar',
			require('./Sidebar/Sidebar/Component.vue').default,
			Vue,
			'data-collector-vue-components/src/Sidebar/Sidebar/Component.vue'
		);

		registerVueComponent(
			'data-collector-navigation-bar',
			require('./NavigationBar/NavigationBar/Component.vue').default,
			Vue,
			'data-collector-vue-components/src/NavigationBar/NavigationBar/Component.vue'
		);

		registerVueComponent(
			'data-collector-table',
			require('./Table/Table/Component.vue').default,
			Vue,
			'data-collector-vue-components/src/Table/Table/Component.vue'
		);

		registerVueComponent(
            'vue-table-with-edit-buttons',
            require('./Table/TableWithEditButtons/Component.vue').default,
            Vue,
            'data-collector-vue-components/src/Table/TableWithEditButtons/Component.vue'
        );

		registerVueComponent(
            'edit-icon-link',
            require('./Table/IconLinks/EditIconLink/Component.vue').default,
            Vue,
            'data-collector-vue-components/src/Table/IconLinks/EditIconLink/Component.vue'
        );
	}
}