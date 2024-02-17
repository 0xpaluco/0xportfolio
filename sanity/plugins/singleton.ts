/**
 * This plugin contains all the logic for setting up the `Settings` singleton
 */

import { title } from 'process'
import { definePlugin, type DocumentDefinition } from 'sanity'
import { ListItemBuilder, StructureResolver } from 'sanity/structure'

// The StructureResolver is how we're changing the DeskTool structure to linking to a single "Settings" document, instead of rendering "settings" in a list
// like how "Post" and "Author" is handled.
export const singletonStructure = (
  typeDefs: DocumentDefinition[],
): StructureResolver => {
  return (S) => {
    // The `Settings` root list item

    const pageListItems: ListItemBuilder[] = []

    for (let i = 0; i < typeDefs.length; i++) {
      const typeDef = typeDefs[i]

      // A singleton not using `documentListItem`, eg no built-in preview
      const listItem = S.listItem()
        .title(typeDef.title || '')
        .icon(typeDef.icon)
        .child(
          S.editor()
            .id(typeDef.name)
            .schemaType(typeDef.name)
            .documentId(typeDef.name),
        )

      pageListItems.push(listItem)
    }

    // The default root list items (except custom ones)
    let defaultListItems = S.documentTypeListItems().filter(
      (item) =>
        !pageListItems.some((item2) => item2.getTitle() === item.getTitle()),
    )

    return S.list()
      .title('Content')
      .items([...pageListItems, S.divider(), ...defaultListItems])
  }
}

export const singletonOptions = definePlugin<{ type: string }>(({ type }) => {
  return {
    name: type,
    document: {
      // Hide 'Settings' from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter((templateItem) => templateItem.templateId !== type)
        }

        return prev
      },
      // Removes the "duplicate" action on the "settings" singleton
      actions: (prev, { schemaType }) => {
        if (schemaType === type) {
          return prev.filter(({ action }) => action !== 'duplicate')
        }

        return prev
      },
    },
  }
})
