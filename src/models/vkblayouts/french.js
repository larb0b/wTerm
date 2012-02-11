kbdLayoutLoad({
	name: 'french',
	caption: 'AZERTY (french)',
	layouts: [
		[ // Portrait & Landscape
			[
				{symbols: [['Esc',SDLK._ESCAPE]], small: 1, extraClasses: 'escape'},
				{flex:1},
				{symbols: [['F1',SDLK._F1]], small: 1},
				{symbols: [['F2',SDLK._F2]], small: 1},
				{symbols: [['F3',SDLK._F3]], small: 1},
				{symbols: [['F4',SDLK._F4]], small: 1},
				{flex:1},
				{symbols: [['F5',SDLK._F5]], small: 1},
				{symbols: [['F6',SDLK._F6]], small: 1},
				{symbols: [['F7',SDLK._F7]], small: 1},
				{symbols: [['F8',SDLK._F8]], small: 1},
				{flex:1},
				{symbols: [['F9',SDLK._F9]], small: 1},
				{symbols: [['F10',SDLK._F10]], small: 1},
				{symbols: [['F11',SDLK._F11]], small: 1},
				{symbols: [['F12',SDLK._F12]], small: 1},
				{flex:1},
				{symbols: [['Sym',SDLK._MENU]], small: 1, extraClasses: 'sym'},
			],
			[{extraClasses: 'functionPadding'}],
			[
				{symbols: [['²']], printable: true},
				{symbols: [['1'],['&']], printable: true},
				{symbols: [['2'],['é'],['~',0,'<span class="fnBind">~</span>']], printable: true},
				{symbols: [['3'],['"'],['#',0,'<span class="fnBind">#</span>']], printable: true},
				{symbols: [['4'],['\''],['{',0,'<span class="fnBind">{</span>']], printable: true},
				{symbols: [['5'],['('],['[',0,'<span class="fnBind">[</span>']], printable: true},
				{symbols: [['6'],['-'],['|',0,'<span class="fnBind">|</span>']], printable: true},
				{symbols: [['7'],['è'],['`',0,'<span class="fnBind">`</span>']], printable: true},
				{symbols: [['8'],['_'],['\\',0,'<span class="fnBind">\\</span>']], printable: true},
				{symbols: [['9'],['ç'],['^',0,'<span class="fnBind">^</span>']], printable: true},
				{symbols: [['0'],['à'],['@',0,'<span class="fnBind">@</span>']], printable: true},
				{symbols: [['-'],[')'],[']',0,'<span class="fnBind">]</span>']], printable: true},
				{symbols: [['+'],['='],['}',0,'<span class="fnBind">}</span>']], printable: true},
				{symbols: [['Bksp<br><img src="images/key_backspace.png" class="keyImg"/>',SDLK._BACKSPACE]], extraClasses: 'backspace'},
			],
			[
				{symbols: [['Tab<br><img src="images/key_tab.png" class="keyImg"/>',SDLK._TAB]], extraClasses: 'tab'},
				{symbols: [['A']], printable: true},
				{symbols: [['Z']], printable: true},
				{symbols: [['E'],['E',0,''],['€',0,'<span class="fnBind">€</span>']], printable: true},
				{symbols: [['R']], printable: true},
				{symbols: [['T']], printable: true},
				{symbols: [['Y']], printable: true},
				{symbols: [['U']], printable: true},
				{symbols: [['I']], printable: true},
				{symbols: [['O']], printable: true},
				{symbols: [['P']], printable: true},
				{symbols: [['^'],['"']], printable: true},
				{symbols: [['$'],['£']], printable: true},
				{symbols: [["*"],['µ']], printable: true},
				{flex:1},
			],
			[
				{symbols: [['Caps Lock',SDLK._CAPSLOCK]], modifier: 1, extraClasses: 'caps', toggling: true},
				{symbols: [['Q']], printable: true},
				{symbols: [['S']], printable: true},
				{symbols: [['D']], printable: true},
				{symbols: [['F']], printable: true},
				{symbols: [['G']], printable: true},
				{symbols: [['H']], printable: true},
				{symbols: [['J']], printable: true},
				{symbols: [['K']], printable: true},
				{symbols: [['L']], printable: true},
				{symbols: [['M']], printable: true},
				{symbols: [["Ù"],['%']], printable: true},
				{symbols: [['Enter<br><img src="images/key_enter.png" class="keyImg"/>',SDLK._RETURN]], extraClasses: 'enter'},
			],
			[
				{symbols: [['Shift',SDLK._LSHIFT]], modifier: 1, extraClasses: 'shift-left', flex: 1},
				{symbols: [['<'],['>']], printable: true},
				{symbols: [['W']], printable: true},
				{symbols: [['X']], printable: true},
				{symbols: [['C']], printable: true},
				{symbols: [['V']], printable: true},
				{symbols: [['B']], printable: true},
				{symbols: [['N']], printable: true},
				{symbols: [['?'],[',']], printable: true},
				{symbols: [['.'],[';']], printable: true},
				{symbols: [['/'],[':'],['<span class="fnBind">Supp</span>',SDLK._DELETE]], printable: true},
				{symbols: [['§'],['!'],['<span class="fnBind">Ins</span>',SDLK._INSERT]], printable: true},
				{symbols: [['Shift',SDLK._RSHIFT]], modifier: 1, extraClasses: 'shift-right'},
				{symbols: [['<img src="images/cursorUp.png" class="keyImg"/>',SDLK._UP],null,['<span class="fnBind">Haut</span>',SDLK._PAGEUP]], extraClasses: 'arrow'},
			],
			[
				{symbols: [['Ctrl',SDLK._LCTRL]], modifier: 1, extraClasses: 'mod ctrl'},
				{symbols: [['Fn',SDLK._MODE]], modifier: 1, extraClasses: 'mod fn'},
				{symbols: [['Alt',SDLK._LALT]], modifier: 1, extraClasses: 'mod alt'},
				{symbols: [[' ']], printable: true, extraClasses: 'spacebar'},
				{symbols: [['Alt',SDLK._RALT]], modifier: 1, extraClasses: 'mod alt'},
				{symbols: [['Ctrl',SDLK._RCTRL]], modifier: 1, extraClasses: 'mod ctrl'},
				{symbols: [['<img src="images/cursorLeft.png" class="keyImg"/>',SDLK._LEFT],null,['<span class="fnBind">Home</span>',SDLK._HOME]], extraClasses: 'arrow'},
				{symbols: [['<img src="images/cursorRight.png" class="keyImg"/>',SDLK._RIGHT],null,['<span class="fnBind">Fin</span>',SDLK._END]], extraClasses: 'arrow'},
				{symbols: [['<img src="images/cursorDown.png" class="keyImg"/>',SDLK._DOWN],null,['<span class="fnBind">Bas</span>',SDLK._PAGEDOWN]], extraClasses: 'arrow'},
			]
		]
	]
})
