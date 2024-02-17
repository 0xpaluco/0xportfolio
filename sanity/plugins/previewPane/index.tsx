// This plugin is responsible for adding a “Preview” tab to the document pane
// You can add any React component to `S.view.component` and it will be rendered in the pane
// and have access to content in the form in real-time.
// It's part of the Studio's “Structure Builder API” and is documented here:
// https://www.sanity.io/docs/structure-builder-reference
import { DRAFT_MODE_ROUTE } from '@/sanity/env'

import { Iframe, IframeOptions } from 'sanity-plugin-iframe-pane'
import authorType from '../../schemas/documents/author'
import postType from '../../schemas/documents/post'

import AuthorAvatarPreviewPane from './AuthorAvatarPreviewPane'
import { DefaultDocumentNodeResolver } from 'sanity/structure'

const iframeOptions = {
  url: {
    origin: 'same-origin',
    preview: (document) => {
      if (!document) {
        return new Error('Missing document')
      }
      switch (document._type) {
        case 'post':
          return (document as any)?.slug?.current
            ? `/blog/${(document as any).slug.current}`
            : new Error('Missing slug')
        default:
          return new Error(`Unknown document type: ${document?._type}`)
      }
    },
    draftMode: DRAFT_MODE_ROUTE,
  },
  reload: { button: true },
} satisfies IframeOptions

export const previewDocumentNode = (): DefaultDocumentNodeResolver => {
  return (S, { schemaType }) => {
    switch (schemaType) {
      case authorType.name:
        return S.document().views([
          S.view.form(),
          S.view
            .component(({ document }) => (
              <AuthorAvatarPreviewPane
                name={document.displayed.name as any}
                image={document.displayed.image as any}
              />
            ))
            .title('Preview'),
        ])

      case postType.name:
        return S.document().views([
          S.view.form(),
          S.view.component(Iframe).options(iframeOptions).title('Preview'),
        ])
      default:
        return null
    }
  }
}