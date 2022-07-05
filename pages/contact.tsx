import { ReactElement } from 'react'
import { GetServerSideProps } from "next";
import { NextPageWithLayout } from '@/types'
import { ContactView } from '@views/index'
import WithLayout, {  Home } from 'src/layouts'
import { Aside } from '@components/index'


const LIMIT = 1;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {

  const [data, error] = [[], null] //await catchErrors(listPostForFeed());
  if(error){
    console.log(error);
  }

  console.log(data);
  return {
    props: {
      posts: data,
    } // will be passed to the page component as props
  }
}

interface PageProps {
  posts: any[]
  //children?: ReactNode;
}

const ContactPage: NextPageWithLayout = ({ posts }: any) => {
  return <ContactView/>
}

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <WithLayout layout={Home} component={page} aside={Aside}/>
}

ContactPage.auth = false;

export default ContactPage
