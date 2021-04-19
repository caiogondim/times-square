// Reference
// https://github.com/Resike/Merge-Monokai-Theme/blob/main/Monokai.sublime-theme
// https://github.com/meetio-theme/merge-meetio-theme/blob/master/Dark/Merge%20Dark.sublime-theme
// https://github.com/facelessuser/merge-dracula-theme

const { dark } = require('../../colors')

const template = {
  extends: 'Merge Dark.sublime-theme',
  variables: {
    background: dark.rgb.background,
    foreground: dark.rgb.foreground,
    red: dark.rgb.red,
    yellow: dark.rgb.yellow,
    green: dark.rgb.green,
    cyan: dark.rgb.cyan,
    blue: dark.rgb.blue,
    magenta: dark.rgb.magenta,
    selection: dark.rgb.selection,
    comment: dark.rgb.comment,
    gray1: dark.rgb.gray1,
    gray2: dark.rgb.gray2,
    gray3: dark.rgb.gray3,
    gray4: dark.rgb.gray4,
    gray5: dark.rgb.gray5,

    tab_bar_bg: 'var(gray5)',

    side_bar_container_bg: 'var(red)',
    scroll_shadow: 'rgba(0, 0, 0, 0)',

    //
    // Commit list
    //

    commit_list_bg: 'var(gray4)',
    'commit_row_bg-hover': 'var(background)',
    commit_annotation_bg: 'var(gray3)',
    'commit_summary_fg-primary': 'var(foreground)',
    'commit_summary_fg-secondary': 'color(var(foreground) l(- 33%))',

    // Quick panel
    quick_panel_bg: 'var(gray4)',

    // Preferences Page
    preferences_overlay_bg: 'var(gray4)',
    preferences_section_table_bg: 'var(background)',

    //
    table_of_contents_fg: 'var(foreground)',
    table_of_contents_row_bg: 'var(foreground)',

    //
    field_name_fg: 'var(comment)',
    author_fg: 'var(comment)',
  },
  rules: [
    // Windows
    {
      class: 'title_bar',
      bg: 'var(gray5)',
    },
    // Headers
    {
      class: 'header',
      'layer0.opacity': 1,
      'layer0.tint': 'var(gray5)',
    },
    // Commit list
    // {
    //   "class": "commit_table_container",
    //   "layer0.opacity": 1,
    //   "layer0.tint": "var(red)"
    // },
    // Location bar
    {
      class: 'location_bar_container',
      'layer0.opacity': 1,
      'layer0.tint': 'var(gray4)',
    },
    // Tree view
    {
      class: 'tree_list',
      'layer0.opacity': 1,
      'layer0.tint': 'var(gray4)',
    },

    // Commit list
    // {
    //   "class": "commit_table",
    //   "background_color": "var(red)"
    // },

    // Commit view
    // {
    //   "class": "details_panel",
    //   "layer0.opacity": 1,
    //   "layer0.tint": "var(red)"
    // },
    {
      class: 'separator_container',
      'layer0.opacity': 1,
      'layer0.tint': 'var(gray4)',
    },
    {
      class: 'commit_dialog_header',
      'layer0.opacity': 1,
      'layer0.tint': 'var(background)',
    },
    {
      class: 'tab_separator',
      'layer0.opacity': 0,
    },
    // {
    //   "class": "commit_table_row",
    //   "content_margin": 40
    // },
    {
      class: 'tab',
      'layer0.tint': 'var(gray5)',
      'layer0.opacity': 1,
      attributes: ['!selected'],
    },
    // {
    //   "class": "tab",
    //   "layer0.tint": "var(yellow)",
    //   "layer0.opacity": 1,
    //   "parents": [
    //     {
    //       "class": "side_bar_container"
    //     }
    //   ]
    // },
    {
      class: 'tab',
      'layer0.tint': 'var(gray4)',
      'layer0.opacity': 1,
      attributes: ['selected'],
      parents: [
        {
          class: 'side_bar_container',
        },
      ],
    },
    {
      class: 'commit_edges_control',
      num_colors: 5,
      color0: 'var(magenta)',
      color1: 'var(blue)',
      color2: 'var(cyan)',
      color3: 'var(green)',
      color4: 'var(yellow)',
    },
  ],
}

module.exports = JSON.stringify(template, null, 2)
