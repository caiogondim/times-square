const { dark } = require('../colors')

const windows = [
  {
    class: 'title_bar',
    fg: dark.rgb.foreground,
    bg: dark.rgb.gray4,
  },
]

const tabs = [
  {
    class: 'tabset_control',
    content_margin: [0, 0, 0, 0],
    'layer0.texture': '',
    'layer0.tint': dark.rgb.gray4,
    'layer0.inner_margin': 0,
    'layer0.opacity': 1,
    'layer1.inner_margin': 0,
    'layer2.inner_margin': 0,
    'layer3.inner_margin': 0,
    mouse_wheel_switch: false,
    tab_overlap: 0,
  },
  {
    class: 'tab_control',
    'layer0.texture': '',
    'layer0.tint': dark.rgb.gray4,
    'layer0.inner_margin': [5, 5],
    'layer0.opacity': 1,
    'layer1.texture': '',
    'layer1.opacity': 0,
    'layer2.texture': '',
    'layer2.opacity': 0,
    'layer3.texture': '',
    'layer3.opacity': 0,
    content_margin: [8, 0],
    max_margin_trim: 0,
    hit_test_level: 0,
  },
  {
    class: 'tab_control',
    attributes: ['selected'],
    'layer0.tint': dark.rgb.background,
  },
  {
    class: 'tab_label',
    parents: [{ class: 'tab_control' }],
    fg: dark.rgb.comment,
  },
  {
    class: 'tab_label',
    parents: [{ class: 'tab_control', attributes: ['selected'] }],
    fg: dark.rgb.foreground,
  },
]

const statusBar = [
  {
    class: 'status_bar',
    'layer0.tint': dark.rgb.gray4,
    'layer0.texture': '',
    'layer1.texture': '',
    'layer1.opacity': 0,
    'layer2.texture': '',
    'layer2.opacity': 0,
    'layer3.texture': '',
    'layer3.opacity': 0,
  },
  {
    class: 'label_control',
    parents: [{ class: 'status_bar' }],
    color: dark.rgb.comment,
  },
]

const sidebar = [
  {
    class: 'sidebar_container',
    'layer0.tint': dark.rgb.gray4,
  },
  {
    class: 'sidebar_heading',
    case: 'title',
    fg: dark.rgb.comment,
    'font.size': 11,
    'font.bold': true,
  },
  {
    class: 'tree_row',
    attributes: ['selected'],
    'layer0.tint': dark.rgb.background,
  },
  {
    class: 'sidebar_label',
    color: dark.rgb.comment,
  },
  {
    class: 'sidebar_label',
    parents: [{ class: 'tree_row', attributes: ['selected'] }],
    color: dark.rgb.foreground,
  },
  {
    class: 'icon_file_type',
    'layer0.tint': dark.rgb.comment,
    'layer0.opacity': 1,
  },
  {
    class: 'icon_file_type',
    parents: [{ class: 'tree_row', attributes: ['hover'] }],
    'layer0.tint': dark.rgb.comment,
  },
  {
    class: 'icon_file_type',
    parents: [{ class: 'tree_row', attributes: ['selected'] }],
    'layer0.tint': dark.rgb.foreground,
  },
  {
    class: 'icon_folder',
    'layer0.tint': dark.rgb.comment,
    'layer0.opacity': 1,
  },
  {
    class: 'icon_folder',
    parents: [{ class: 'tree_row', attributes: ['hover'] }],
    'layer0.tint': dark.rgb.comment,
  },
  {
    class: 'icon_folder',
    parents: [{ class: 'tree_row', attributes: ['selected'] }],
    'layer0.tint': dark.rgb.foreground,
  },
]

const views = [
  {
    class: 'grid_layout_control',
    border_color: dark.rgb.gray4,
  },
]

const quickPanel = [
  {
    class: 'overlay_control',
    'layer0.texture': '',
    'layer0.opacity': 1,
    'layer0.tint': dark.rgb.gray4,
    content_margin: [10, 10, 10, 10],
  },
  {
    class: 'quick_panel',
    'layer0.texture': '',
    'layer0.opacity': 1,
    'layer0.tint': dark.rgb.gray4,
  },
]

const template = {
  rules: [
    ...sidebar,
    ...windows,
    ...tabs,
    ...statusBar,
    ...views,
    ...quickPanel,
  ],
}

module.exports = JSON.stringify(template, null, 2)
