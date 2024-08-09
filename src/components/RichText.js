import React, { Fragment } from 'react'
import escapeHTML from 'escape-html'
import { Text } from 'slate'
import { Typography } from '@mui/material'

export default function RichText({ content }) {
  return serialize(content)
}

const serialize = (children) => {
  return children.map((node, i) => {
    if (Text.isText(node)) {
      let text = (
        <Typography
          component="span"
          dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }}
        />
      )

      if (node.bold) {
        text = <strong key={i}>{text}</strong>
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>
      }

      if (node.text === '') {
        text = <br />
      }

      return <Fragment key={i}>{text}</Fragment>
    }

    if (!node) {
      return null
    }

    switch (node.type) {
      case 'h1':
        return (
          <Typography variant="h2" key={i}>
            {serialize(node.children)}
          </Typography>
        )
      case 'h2':
        return (
          <Typography variant="h3" key={i}>
            {serialize(node.children)}
          </Typography>
        )
      case 'h3':
        return (
          <Typography variant="h4" key={i}>
            {serialize(node.children)}
          </Typography>
        )
      case 'h4':
        return (
          <Typography variant="h5" key={i}>
            {serialize(node.children)}
          </Typography>
        )
      case 'h5':
        return (
          <Typography variant="h6" key={i}>
            {serialize(node.children)}
          </Typography>
        )
      case 'h6':
        return (
          <Typography variant="subtitle1" key={i}>
            {serialize(node.children)}
          </Typography>
        )
      case 'blockquote':
        return <blockquote key={i}>{serialize(node.children)}</blockquote>
      case 'ul':
        return <ul key={i}>{serialize(node.children)}</ul>
      case 'ol':
        return <ol key={i}>{serialize(node.children)}</ol>
      case 'li':
        return <li key={i}>{serialize(node.children)}</li>
      case 'link':
        return (
          <a href={escapeHTML(node.url)} key={i}>
            {serialize(node.children)}
          </a>
        )

      default:
        return <p key={i}>{serialize(node.children)}</p>
    }
  })
}
