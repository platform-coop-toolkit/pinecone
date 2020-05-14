module.exports = {
	title: 'Nav',
	status: 'wip',
	order: 4,
	context: {
		inBanner: true,
		menuTitle: 'Menu',
		menuItems:  {
			'explore': {
				label: 'Explore',
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
				current: true,
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
	}
};
