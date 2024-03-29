const { dark } = require('../colors')

const template = {
  name: 'Times Square',
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
  },
  globals: {
    background: 'var(background)',
    foreground: 'var(foreground)',
    caret: 'var(foreground)',
    block_caret: 'var(foreground)',
    selection: 'var(selection)',
    gutter_foreground: 'var(comment)',
    fold_marker: 'var(foreground)',
    misspelling: 'var(red)',
    accent: 'var(foreground)',
    brackets_options: 'underline',
    invisibles: 'var(comment)',
    line_highlight: dark.rgb.lineHighlight,
  },
  rules: [
    {
      scope:
        'comment, punctuation.definition.bracket.curly.begin.jsdoc, punctuation.definition.bracket.curly.end.jsdoc, punctuation.definition.optional-value.begin.bracket.square, punctuation.definition.optional-value.end.bracket.square',
      foreground: 'var(comment)',
    },
    {
      scope: 'constant, keyword.other.unit.css',
      foreground: 'var(yellow)',
    },
    {
      scope:
        'support.class, support.class.component, storage.type, storage.type.class, storage.type.function, support.constant, support.variable.dom, keyword, variable.language, keyword.operator.expression.typeof, storage.modifier, storage.type.property, keyword.operator.new, keyword.operator.expression.delete, punctuation.accessor.rust',
      foreground: 'var(foreground)',
    },
    {
      scope: 'string',
      foreground: 'var(yellow)',
    },
    {
      scope:
        'punctuation.section.interpolation.begin.js, punctuation.section.interpolation.end.js, punctuation.section.brackets.begin, punctuation.section.brackets.end, punctuation.section.block.begin, punctuation.section.block.end, punctuation.section.group.js, punctuation.section.group.begin, punctuation.section.group.end, entity, source, punctuation.definition.string.begin, punctuation.definition.string.end, punctuation.dollar, support.variable, keyword.operator, punctuation.separator.key-value, punctuation.separator.comma',
      foreground: 'var(foreground)',
    },
    {
      scope:
        'punctuation.definition.binding-pattern.object.tsx, keyword.control.default, keyword.control.from, support.type.object.console, support.type.object.dom, constant.character.escape, variable.language.this, support.class.builtin, variable.other.object.property, punctuation.definition.template-expression, punctuation.terminator.statement, punctuation.decorator, keyword.operator, storage, punctuation.definition.heading.begin.markdown, entity.name.section.markdown, meta.object-literal.key, punctuation.definition.block.tag, storage.type.class.jsdoc, keyword.operator.spread, entity.name.tag.css, entity.other.attribute-name.id.css, entity.other.attribute-name.class.css, punctuation.definition.parameters.begin, punctuation.definition.parameters.end, punctuation.definition.string.template.begin, punctuation.definition.string.template.end, support.variable.object.process, meta.brace, punctuation.accessor, punctuation.definition.block, punctuation.separator.expression',
      foreground: 'var(foreground)',
    },
    {
      scope:
        'entity.name.section.markdown, punctuation.definition.heading.begin.markdown',
      foreground: 'var(blue)',
    },
    {
      scope:
        'support.type.object.module, keyword.generator.asterisk, storage.modifier.async, keyword.control, keyword.control, variable.language.super, keyword.other.rust, keyword.declaration.async',
      foreground: 'var(red)',
    },
    {
      scope:
        'support.class.js, support.class.error, entity.other.inherited-class, markup.raw.inline.markdown, support.variable.property, meta.object-literal.key, variable.other.object.property, variable.other.property, support.function.dom, support.function, variable, entity.name.type, support.variable.property.dom, meta.function-call, entity.name.function, entity.name.tag, meta.selector.css, support.type.rust, support.macro.rust, meta.path.rust, entity.name.class, meta.property.object.js',
      foreground: ['var(green)', 'var(magenta)'],
    },
  ],
}

module.exports = JSON.stringify(template, null, 2)
