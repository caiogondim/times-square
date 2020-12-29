const { dark } = require('../colors')

const windows = [{
	"class": 'title_bar',
	'fg': dark.rgb.foreground,
	'bg': dark.rgb.gray4
}]

const tabs = [{
    "class": "tabset_control",
    "content_margin": [0, 0, 0, 0],
    "layer0.texture": "",
    "layer0.tint": dark.rgb.gray4,
    "layer0.inner_margin": 0,
    "layer0.opacity": 1,
    "layer1.inner_margin": 0,
    "layer2.inner_margin": 0,
    "layer3.inner_margin": 0,
    "mouse_wheel_switch": false,
    "tab_overlap": 0
}, {
    "class": "tab_control",
    "layer0.texture": "",
    "layer0.tint": dark.rgb.gray4,
    "layer0.inner_margin": [5,5],
    "layer0.opacity": 1,
    "layer1.texture": "",
    "layer1.opacity": 0,
    "layer2.texture": "",
    "layer2.opacity": 0,
    "layer3.texture": "",
    "layer3.opacity": 0,
    "content_margin": [8,0],
    "max_margin_trim": 0,
    "hit_test_level": 0
},
{
    "class": "tab_control",
    "attributes": ["selected"],
    "layer0.tint": dark.rgb.background
}]

const statusBar = [{
	'class': 'status_bar',
	'layer0.tint': dark.rgb.gray4,
	'layer0.texture': '',
	"layer1.texture": "",
	"layer1.opacity": 0,
	"layer2.texture": "",
	"layer2.opacity": 0,
	"layer3.texture": "",
	"layer3.opacity": 0,
}, {
    "class": "label_control",
    "parents": [{"class": "status_bar"}],
    "color": dark.rgb.comment
}]

const sidebar = [{
    "class": "sidebar_container",
    "layer0.tint": dark.rgb.gray4
}]

const quickPanel = [{
	'class': 'overlay_control',
	'layer0.texture': '',
	'layer0.opacity': 1,
	'layer0.tint': dark.rgb.gray4,
	"content_margin": [
		10,
		10,
		10,
		10
	],
}, {
	'class': 'quick_panel',
	'layer0.texture': '',
	'layer0.opacity': 1,
	'layer0.tint': dark.rgb.gray4,
}]

const template = {
    "rules":
    [...sidebar,...windows,...tabs, ...statusBar, ...quickPanel]
}

module.exports = JSON.stringify(template, null, 2)