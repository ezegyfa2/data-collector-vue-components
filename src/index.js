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
			'data-collector-sidebar',
			require('./Sidebar/Sidebar/Component.vue').default,
			Vue,
			'data-collector-vue-components/src/Sidebar/Sidebar/Component.vue'
		);

		registerVueComponent(
			'data-collector-sidebar-brand-icon',
			require('./Sidebar/BrandIcon/Component.vue').default, 
			Vue,
			'data-collector-vue-components/src/Sidebar/BrandIcon/Component.vue'
		);

		registerVueComponent(
			'data-collector-sidebar-button',
			require('./Sidebar/Button/Component.vue').default,
			Vue,
			'data-collector-vue-components/src/Sidebar/Button/Component.vue'
		);

		registerVueComponent(
			'data-collector-navigation-bar',
			require('./NavigationBar/NavigationBar/Component.vue').default,
			Vue,
			'data-collector-vue-components/src/NavigationBar/NavigationBar/Component.vue'
		);

		registerVueComponent(
			'data-collector-navigation-search',
			require('./NavigationBar/SearchForm/Component.vue').default,
			Vue,
			'data-collector-vue-components/src/NavigationBar/SearchForm/Component.vue'
		);

		registerVueComponent(
			'data-collector-list-dropdown', 
			require('./NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/ListDropdown/Component.vue').default, 
			Vue,
			'data-collector-vue-components/src/NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/ListDropdown/Component.vue'
		);

		registerVueComponent(
			'data-collector-list-dropdown-with-edges',
			require('./NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/ListDropdownWithEdges/Component.vue').default,
			Vue,
			'data-collector-vue-components/src/NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/ListDropdownWithEdges/Component.vue'
		);

		registerVueComponent(
			'data-collector-icon-dropdown-item', 
			require('./NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/ItemWithIcon/Component.vue').default,
			Vue,
			'data-collector-vue-components/src/NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/ItemWithIcon/Component.vue'
		);

		registerVueComponent(
			'data-collector-link-dropdown-item',
			require('./NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/LinkItem/Component.vue').default,
			Vue,
			'data-collector-vue-components/src/NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/LinkItem/Component.vue'
		);

		registerVueComponent(
			'data-collector-search-dropdown-item',
			require('./NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/SearchForm/Component.vue').default,
			Vue,
			'data-collector-vue-components/src/NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/SearchForm/Component.vue'
		);

		registerVueComponent(
			'data-collector-dropdown-navigation-link',
			require('./NavigationBar/NavigationLinks/DropdownNavigationLink/NavigationLink/Component.vue').default,
			Vue,
			'data-collector-vue-components/src/NavigationBar/NavigationLinks/DropdownNavigationLink/NavigationLink/Component.vue'
		);

		registerVueComponent(
			'data-collector-table',
			require('./Table/Table/Component.vue').default,
			Vue,
			'data-collector-vue-components/src/Table/Table/Component.vue'
		);

		registerVueComponent(
            'edit-icon-link',
            require('./Table/IconLinks/EditIconLink/Component.vue').default,
            Vue,
            'data-collector-vue-components/src/Table/IconLinks/EditIconLink/Component.vue'
        );
	}
}