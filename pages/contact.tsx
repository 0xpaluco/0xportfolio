import { ReactElement } from 'react'
import { GetServerSideProps } from "next";
import { NextPageWithLayout } from '@/types'
import { ContactView } from '@views/index'
import WithLayout, {  Home } from 'src/layouts'
import { Aside } from '@components/index'



const ContactPage: NextPageWithLayout = () => {
  return <ContactView/>
}

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <WithLayout layout={Home} component={page} aside={Aside}/>
}

ContactPage.auth = false;

export default ContactPage
