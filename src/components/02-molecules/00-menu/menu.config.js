module.exports = {
	title: 'Menus',
	status: 'wip',
	context: {
		inBanner: true,
		scriptCall: 'window.pinecone.menu();',
		menuTitle: 'Menu',
		menuItems:  {
			'menu-item-1': {
				label: 'Menu Item One'
			},
			'menu-item-2': {
				label: 'Menu Item Two'
			},
			'menu-item-3': {
				label: 'Menu Item Three'
			},
			'menu-item-4': {
				current: true,
				label: 'Menu Item Four',
				submenuItems: {
					'submenu-item-1': {
						current: true,
						label: 'Submenu Item One'
					},
					'submenu-item-2': {
						label: 'Submenu Item Two'
					},
					'submenu-item-3': {
						label: 'Submenu Item Three'
					}
				}
			},
		},
	},
	variants: [
		{
			'name': 'home',
			'context': {
				bodyClass: 'home',
				modifier: 'home'
			}
		}
	]
};
