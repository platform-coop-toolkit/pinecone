module.exports = {
	title: 'Menus',
	status: 'wip',
	context: {
		inBanner: true,
		menuTitle: 'Menu',
		menuItems:  {
			'explore': {
				label: 'Explore',
				current: true,
				submenuItems: {
					'browse-all': {
						label: 'Browse all',
						current: true
					},
					'topics': {
						label: 'Topics'
					},
					'goals': {
						label: 'Goals'
					},
					'formats': {
						label: 'Formats'
					},
					'sectors': {
						label: 'Sectors'
					}
				}
			},
			'getting-started': {
				label: 'Getting Started',
				submenuItems: {
					'how-to': {
						label: 'How to use your library'
					},
					'glossary': {
						label: 'Glossary'
					}
				}
			},
			'my-resources': {
				label: 'My Resources',
				submenuItems: {
					'favorites': {
						label: 'Favorites'
					},
					'saved-searches': {
						label: 'Saved searches'
					}
				}
			},
			'about': {
				label: 'About',
			},
			'settings': {
				label: 'Settings',
				submenuItems: {
					'language': {
						label: 'Language'
					},
					'privacy': {
						label: 'Privacy'
					}
				}
			}
		},
	},
	variants: [
		{
			'name': 'home',
			'context': {
				bodyClass: 'home',
			}
		}
	]
};
