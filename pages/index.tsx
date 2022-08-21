import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/types'
import {  HomeView } from '@views/index'
import WithLayout, { Explore, Simple, Home } from 'src/layouts'
import { Aside } from '@components/index'

const HomePage: NextPageWithLayout = () => {
  return <HomeView />
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <WithLayout layout={Home} component={page} aside={Aside}/>
}

HomePage.auth = false;

export default HomePage
