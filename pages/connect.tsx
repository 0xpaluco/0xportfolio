import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/types'
import {  AuthView, HomeView } from '@views/index'
import WithLayout, { Home } from 'src/layouts'
import { Aside } from '@components/index'



const HomePage: NextPageWithLayout = () => {
  return <AuthView/>
}

// HomePage.getLayout = function getLayout(page: ReactElement) {
//   return <WithLayout layout={Home} component={page} aside={Aside}/>
// }

HomePage.auth = false;

export default HomePage
