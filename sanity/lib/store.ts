// ./sanity/lib/store.ts

import * as queryStore from '@sanity/react-loader'

import { getClient } from '@/sanity/lib/client'
import { token } from '@/sanity/lib/token'

queryStore.setServerClient(getClient({ token }))

export const { loadQuery } = queryStore
