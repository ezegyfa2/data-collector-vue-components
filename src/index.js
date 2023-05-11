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
			'data-collector-admin-form',
			require('./Forms/AdminForm/Component.vue').default,
			Vue,
			'data-collector-vue-components/src/Forms/AdminForm/Component.vue'
		);

		registerVueComponent(
			'data-collector-form',
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
			'data-collector-table',
			require('./Table/Table/Component.vue').default,
			Vue,
			'data-collector-vue-components/src/Table/Table/Component.vue'
		);

		registerVueComponent(
            'data-collector-table-with-edit-buttons',
            require('./Table/TableWithEditButtons/Component.vue').default,
            Vue,
            'data-collector-vue-components/src/Table/TableWithEditButtons/Component.vue'
        );

		registerVueComponent(
            'data-collector-create-button',
            require('./Table/CreateButton/Component.vue').default,
            Vue,
            'data-collector-vue-components/src/Table/CreateButton/Component.vue'
        );

		registerVueComponent(
            'data-collector-pagination',
            require('./Pagination/Pagination/Component.vue').default,
            Vue,
            'data-collector-vue-components/src/Pagination/Pagination/Component.vue'
        );

		registerVueComponent(
            'data-collector-pagination-item',
            require('./Pagination/Item/Component.vue').default,
            Vue,
            'data-collector-vue-components/src/Pagination/Item/Component.vue'
        );

		registerVueComponent(
            'data-collector-edit-icon-link',
            require('./Table/IconLinks/EditIconLink/Component.vue').default,
            Vue,
            'data-collector-vue-components/src/Table/IconLinks/EditIconLink/Component.vue'
        );
	}
}