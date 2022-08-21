import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/types'
import { DaoView } from '@views/index'
import WithLayout, { Explore, Simple, Home } from 'src/layouts'

import { Aside } from '@components/index'


interface PageProps {}

const DaoPage: NextPageWithLayout = () => {
  return <DaoView></DaoView>
}

DaoPage.getLayout = function getLayout(page: ReactElement) {
  return <WithLayout layout={Home} component={page} aside={Aside}/>
}

DaoPage.auth = false;

export default DaoPage
