export const rules = {
  'align-import-from': {
    meta: {
      type: 'layout',
      docs: {
        description: 'Align the `from` keyword across import declarations on the same line.',
      },
      fixable: 'whitespace',
      schema: [],
      messages: {
        align: '`from` keyword should be aligned with other import declarations.',
      },
    },
    create(context) {
      const sourceCode = context.getSourceCode()
      const imports = []

      return {
        ImportDeclaration(node) {
          if (node.specifiers.length === 0) return

          const fromToken = sourceCode.getTokenBefore(node.source, token => token.value === 'from')
          if (!fromToken) return
          const importToken = sourceCode.getFirstToken(node)
          if (!importToken || fromToken.loc.start.line !== importToken.loc.start.line) return

          imports.push({ node, fromToken })
        },
        'Program:exit'() {
          if (imports.length <= 1) return

          const targetColumn = Math.max(...imports.map(entry => entry.fromToken.loc.start.column))

          for (const entry of imports) {
            const { node, fromToken } = entry
            if (fromToken.loc.start.column === targetColumn) continue

            const before = sourceCode.getTokenBefore(fromToken)
            if (!before || before.loc.end.line !== fromToken.loc.start.line) continue

            context.report({
              node,
              messageId: 'align',
              fix(fixer) {
                const desiredSpaces = Math.max(1, targetColumn - before.loc.end.column)
                const range = [before.range[1], fromToken.range[0]]
                return fixer.replaceTextRange(range, ' '.repeat(desiredSpaces))
              },
            })
          }
        },
      }
    },
  },
  'jsx-attributes-newline': {
    meta: {
      type: 'layout',
      docs: {
        description: 'Require DOM/JSX attributes to be placed on separate aligned lines when more than one is present.',
      },
      fixable: 'whitespace',
      schema: [],
      messages: {
        standardize: 'Each JSX attribute should be on its own aligned line when multiple attributes are present.',
      },
    },
    create(context) {
      const sourceCode = context.getSourceCode()

      return {
        JSXOpeningElement(node) {
          const attributes = node.attributes.filter(attr => attr.type === 'JSXAttribute' || attr.type === 'JSXSpreadAttribute')
          if (attributes.length <= 1) return

          const firstAttribute = attributes[0]
          const openingToken = sourceCode.getFirstToken(node)
          const closingToken = sourceCode.getLastToken(node)

          const needsNewLine = firstAttribute.loc.start.line === openingToken.loc.start.line
          const needsSeparation = attributes.some(attribute => {
            const previousToken = sourceCode.getTokenBefore(attribute)
            return previousToken && previousToken.loc.end.line === attribute.loc.start.line
          })
          const needsAlignment = attributes.some(attribute => attribute.loc.start.column !== firstAttribute.loc.start.column)

          if (!needsNewLine && !needsSeparation && !needsAlignment) {
            return
          }

          context.report({
            node: firstAttribute,
            messageId: 'standardize',
            fix(fixer) {
              const tagIndent = ' '.repeat(openingToken.loc.start.column)
              const attributeIndent = `${tagIndent}  `
              const attributeLines = attributes.map(attribute => `${attributeIndent}${sourceCode.getText(attribute)}`)
              const tagName = sourceCode.getText(node.name)
              const typeParametersText = node.typeParameters ? sourceCode.getText(node.typeParameters) : ''
              const prefix = `<${tagName}${typeParametersText}`
              const closingText = node.selfClosing ? '/>' : '>'
              const replacement = `${prefix}\n${attributeLines.join('\n')}\n${tagIndent}${closingText}`

              return fixer.replaceTextRange(
                [openingToken.range[0], closingToken.range[1]],
                replacement,
              )
            },
          })
        },
      }
    },
  },
  'parameters-newline': {
    meta: {
      type: 'layout',
      docs: {
        description: 'Enforce breaking function parameters onto new lines when two or more are present.',
      },
      schema: [],
      messages: {
        newline: 'Functions with multiple parameters must place each parameter on its own line.',
      },
    },
    create(context) {
      const checkParams = (params, node) => {
        if (!params || params.length <= 1) return
        const first = params[0]
        const last = params[params.length - 1]
        if (first.loc.start.line === last.loc.end.line) {
          context.report({ node, messageId: 'newline' })
        }
      }

      return {
        ArrowFunctionExpression(node) {
          checkParams(node.params, node)
        },
        FunctionDeclaration(node) {
          checkParams(node.params, node)
        },
        FunctionExpression(node) {
          checkParams(node.params, node)
        },
      }
    },
  },
}

export default {
  rules,
}
