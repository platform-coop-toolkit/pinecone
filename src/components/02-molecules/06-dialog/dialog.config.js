module.exports = {
	title: 'Dialog',
	status: 'wip',
	context: {
		buttonIcon: 'delete',
		buttonLabel: 'Remove favorite',
		dialogTitle: 'Remove favorite',
		dialogQuestion: 'Are your sure you want to remove this resource from your favorites?',
		dialogConfirm: 'Yes, remove',
		dialogDismiss: 'No, don&rsquo;t remove'
	},
	variants: [
		{
			name: 'Dialog with Input',
			context: {
				buttonIcon: 'save',
				buttonLabel: 'Save search',
				dialogTitle: 'Save search',
				dialogQuestion: 'Do you want to add these search results to your saved searches?',
				dialogInput: 'label',
				dialogInputLabel: 'Saved Search Label',
				dialogInputDescription: 'Enter a label for these search results so you can identify them later.',
				dialogConfirm: 'Yes, save',
				dialogDismiss: 'No, don&rsquo;t save'
			}
		},
	]
};
