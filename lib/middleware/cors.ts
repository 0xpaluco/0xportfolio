import { createRouter } from 'next-connect'
import NextCors from 'nextjs-cors'

import { ApiRequest, ApiResponse } from '@/types'

// Initializing the cors middleware
async function cors_dep(_req: ApiRequest, _res: ApiResponse, next: any) {
  await NextCors(_req, _res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
  })
  return next()
}

const cors = createRouter<ApiRequest, ApiResponse>()
cors.use(cors_dep)

export default cors
