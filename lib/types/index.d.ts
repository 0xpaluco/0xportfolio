import { NextApiRequest, NextApiResponse, NextPage } from 'next'
import { AppInitialProps, AppProps } from 'next/app'
import { Session } from 'next-auth'
import { SessionContextValue } from 'next-auth/react'
import { ReactElement, ReactNode } from 'react'

type ApiRequest = NextApiRequest & {}
type ApiResponse = NextApiResponse & {}

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
  auth: boolean
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  session: Session
}

type ERC20Token = {
  value: string
  token: {
    contractAddress: string
    chain: string | number
    decimals: number
    name: string
    symbol: string
    logo?: string | null
    logoHash?: string | null
    thumbnail?: string | null
  }
}

export interface EvmNFT {
  token_address: string
  token_id: string
  amount: string
  owner_of: string
  token_hash: string
  block_number_minted: string
  block_number: string
  contract_type: string
  name: string
  symbol: string
  token_uri: string
  metadata: metadata
  last_token_uri_sync: Date
  last_metadata_sync: Date
}

interface metadata {
  [key: string]: string
}
