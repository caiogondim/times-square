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
    'layer0.tint': dark.rgb.gray4,
    tab_overlap: 0,
    tint_index: 1, // This is needed to remove Adaptive theme default background color
  },
  {
    class: 'tab_control',
    'layer0.texture': '',
    'layer0.tint': dark.rgb.gray4,
    'layer0.inner_margin': [5, 5],
    'layer0.opacity': 1,
    'layer1.opacity': 0,
    'layer2.opacity': 0,
    'layer3.opacity': 0,
    content_margin: 10,
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
    'layer0.opacity': 1,
    'layer1.opacity': 0,
    content_margin: 5,
  },
  {
    class: 'label_control',
    parents: [{ class: 'status_bar' }],
    color: dark.rgb.comment,
  },
  {
    class: 'sidebar_button_control',
    'layer0.tint': dark.rgb.comment,
    'layer0.opacity': 1,
    content_margin: 0,
  },
]

const sidebar = [
  {
    class: 'sidebar_container',
    'layer0.tint': dark.rgb.gray4,
    'layer0.opacity': 1,
    content_margin: [0, 0, 0, 0],
  },
  {
    class: 'sidebar_tree',
    row_padding: 5,
    spacer_rows: true,
    indent: 14,
    indent_offset: 10,
    indent_top_level: true,
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
    'layer0.opacity': 1,
  },
  {
    class: 'sidebar_label',
    color: dark.rgb.comment,
  },
  {
    class: 'sidebar_label',
    parents: [{ class: 'tree_row', attributes: ['expanded'] }],
    color: dark.rgb.foreground,
  },
  {
    class: 'sidebar_label',
    parents: [{ class: 'tree_row', attributes: ['selected'] }],
    color: dark.rgb.foreground,
  },
  {
    class: 'sidebar_label',
    parents: [{ class: 'tree_row', attributes: ['hover'] }],
    color: dark.rgb.foreground,
  },
  {
    class: 'icon_file_type',
    'layer0.tint': dark.rgb.comment,
    'layer0.opacity': 1,
  },
  {
    class: 'icon_file_type',
    parents: [{ class: 'tree_row', attributes: ['selected'] }],
    'layer0.tint': dark.rgb.foreground,
    'layer0.opacity': 1,
  },
  {
    class: 'icon_folder',
    'layer0.tint': dark.rgb.comment,
    'layer0.opacity': 1,
    // content_margin: [8, 7],
  },
  {
    class: 'icon_folder',
    parents: [{ class: 'tree_row', attributes: ['hover'] }],
    'layer0.tint': dark.rgb.foreground,
  },
  {
    class: 'icon_folder',
    parents: [{ class: 'tree_row', attributes: ['expanded'] }],
    'layer0.tint': dark.rgb.foreground,
  },
  {
    class: 'file_system_entry',
    spacing: 5,
  },
  {
    class: 'vcs_status_badge',
    parents: [{ class: 'file_system_entry', attributes: ['modified'] }],
    'layer0.tint': dark.rgb.yellow,
  },
  {
    class: 'vcs_status_badge',
    parents: [{ class: 'file_system_entry', attributes: ['staged'] }],
    'layer0.tint': dark.rgb.green,
  },
  {
    class: 'vcs_status_badge',
    content_margin: 0,
  },
]

const views = [
  {
    class: 'grid_layout_control',
    border_color: dark.rgb.gray4,
    border_size: 2,
  },
  {
    class: 'fold_button_control',
    'layer0.tint': dark.rgb.comment,
    'layer0.opacity': 1,
  },
]

const quickPanel = [
  {
    class: 'overlay_control',
    'layer0.texture': '',
    'layer0.opacity': 1,
    'layer0.tint': dark.rgb.gray4,
    content_margin: 5,
  },
  {
    class: 'quick_panel',
    row_padding: 10,
    'layer0.texture': '',
    'layer0.opacity': 1,
    'layer0.tint': dark.rgb.gray4,
  },
  // {
  //   class: 'quick_panel_row',
  //   'layer0.texture': '',
  //   'layer0.tint': dark.rgb.gray4,
  //   'layer0.opacity': 1,
  // },
  // {
  //   class: 'quick_panel_row',
  //   attributes: ['selected'],
  //   'layer0.texture': '',
  //   'layer0.tint': dark.rgb.background,
  //   'layer0.opacity': 1,
  // },
  // {
  //   class: 'quick_panel_label',
  //   fg: dark.rgb.comment,
  // },
  // {
  //   class: 'quick_panel_label',
  //   parents: [{ class: 'quick_panel_row', attributes: ['selected'] }],
  //   fg: 'white',
  //   match_fg: 'white',
  //   selected_fg: 'white',
  //   selected_match_fg: 'white',
  // },
  // {
  //   class: 'quick_panel_path_label',
  //   parents: [{ class: 'quick_panel_row' }],
  //   match_fg: dark.rgb.comment,
  //     selected_fg: dark.rgb.comment,
  //     selected_match_fg: dark.rgb.comment,
  //     "font.size": 11,
  //     "font.italic": false
  // }
]

const panels = [
  {
    class: 'panel_control',
    'layer0.tint': dark.rgb.gray4,
    'layer0.texture': '',
    'layer0.opacity': 1,
    content_margin: [5, 5, 5, 0],
  },
  {
    class: 'panel_grid_control',
    inside_spacing: 10,
    outside_hspacing: 5,
    outside_vspacing: 5,
  },
  {
    class: 'panel_close_button',
    content_margin: 0,
    'layer0.opacity': 0,
    'layer0.texture': '',
  },
]

const dialogs = [
  {
    class: 'dialog',
    'layer0.tint': dark.rgb.gray4,
  },
]

const labels = [
  {
    class: 'label_control',
    color: dark.rgb.foreground,
  },
  {
    class: 'title_label_control',
    color: dark.rgb.foreground,
  },
]

const buttons = [
  {
    class: 'button_control',
    min_size: [80, 25],
    content_margin: 2,
    'layer0.inner_margin': 2,
    'layer0.opacity': 1.0,
    'layer0.tint': dark.rgb.background,
  },
  {
    class: 'label_control',
    parents: [{ class: 'button_control' }],
    color: dark.rgb.foreground,
  },
  {
    class: 'icon_button_group',
    spacing: 10,
  },
]

const inputs = [
  {
    class: 'text_line_control',
    content_margin: 5,
    'layer0.inner_margin': 2,
    'layer0.opacity': 1.0,
    'layer0.tint': dark.rgb.background,
    'layer1.draw_center': false,
    'layer1.inner_margin': 6,
    'layer1.opacity': 1.0,
    'layer1.tint': dark.rgb.background,
  },
]

const template = {
  extends: 'Adaptive.sublime-theme',
  rules: [
    ...labels,
    ...buttons,
    ...sidebar,
    ...windows,
    ...tabs,
    ...statusBar,
    ...views,
    ...quickPanel,
    ...panels,
    ...dialogs,
    ...inputs,
  ],
}

module.exports = JSON.stringify(template, null, 2)
