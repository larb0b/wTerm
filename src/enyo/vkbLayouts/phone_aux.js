enyo.application.vkbLayouts.unshift({caption: 'Phone Auxiliary', value: 'phone_aux'})
enyo.kind({

	kind: 'vkb',
	name: enyo.application.vkbLayouts[0].value,
	caption: enyo.application.vkbLayouts[0].caption,
	
	layout: [
		[
			{flex:1},
			{symbols: [['Tab<br><img src="images/key_tab.png" class="keyImg"/>',SDLK._TAB]]},
			{flex:1},
			{symbols: [['|']], printable: true},
			{flex:1},
			{symbols: [['<']], printable: true},
			{flex:1},
			{symbols: [['>']], printable: true},
			{flex:1}
		]
	]
});
