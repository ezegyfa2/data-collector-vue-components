export default {
    "type": "data-collector-navigation-bar",
    "data": {
        "left_item_sections": [
            {
                "type": "data-collector-navigation-search",
                "data": {
                    "placeholder": "--search_placeholder"
                }
            }
        ],
        "navigation_link_sections": [
            {
                "template_type_name": "notificationsLink",
                "params": {
                    "header_title": "++notification_link.header_title",
                    "notifications": "++notification_link.notifications",
                    "footer_link": {
                        "url": "/notifications",
                        "content": "footer_link.content"
                    },
                    "badge_content": "++notification_link.notificaton_count"
                }
            },
            {
                "type": "data-collector-dropdown-navigation-link",
                "data": {
                    "added_classes": {
                        "root": "d-sm-none"
                    },
                    "dropdown_section": {
                        "type": "data-collector-list-dropdown-with-edges",
                        "data": {
                            "added_classes": {
                                "root": "p-3"
                            },
                            "dropdown_item_sections": [
                                {
                                    "type": "data-collector-search-dropdown-item",
                                    "data": {
                                        "placeholder": "Search for..."
                                    }
                                }
                            ]
                        }
                    },
                    "icon_class": "fas fa-search fa-fw"
                }
            },
            {
                "type": "data-collector-dropdown-navigation-link",
                "data": {
                    "image_url": "images/undraw_rocket.svg",
                    "title": "Ezegy fa",
                    "dropdown_section": {
                        "type": "data-collector-list-dropdown",
                        "data": {
                            "dropdown_item_sections": [
                                {
                                    "type": "data-collector-link-dropdown-item",
                                    "data": {
                                        "url": "#",
                                        "icon_class": "fas fa-file-alt text-white",
                                        "content": "User"
                                    }
                                },
                                {
                                    "type": "data-collector-link-dropdown-item",
                                    "data": {
                                        "url": "#",
                                        "icon_class": "fas fa-file-alt text-white",
                                        "content": "Settings"
                                    }
                                },
                                {
                                    "type": "data-collector-link-dropdown-item",
                                    "data": {
                                        "url": "#",
                                        "icon_class": "fas fa-file-alt text-white",
                                        "content": "Logout"
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        ]
    }
}
