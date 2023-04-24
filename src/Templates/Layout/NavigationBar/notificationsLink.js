export default {
    "type": "data-collector-dropdown-navigation-link",
    "data": {
        "dropdown_section": {
            "type": "data-collector-list-dropdown-with-edges",
            "data": {
                "header": "++header_title",
                "dropdown_item_sections": {
                    "type": "data-collector-icon-dropdown-item",
                    "array_data": "notifications",
                    "data": {
                        "url": "++notifications.url",
                        "icon_class": "++notifications.icon_class",
                        "sub_content": "++notifications.date",
                        "content": "++notifications.content"
                    }
                },
                "footer_link": {
                    "content": "++footer_link.content",
                    "url": "++footer_link.url"
                }
            }
        },
        "icon_class": "fas fa-bell fa-fw",
        "badge_content": "++badge_content"
    }
}