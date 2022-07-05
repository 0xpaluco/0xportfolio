import { ReactElement, ReactNode, useState } from 'react'
import { GetServerSideProps } from "next";
import { NextPageWithLayout } from '@/types'
import { FeedView, HomeView, ToolsView } from '@views/index'
import WithLayout, { Explore, Simple, Home } from 'src/layouts'
import { DUMMY_POSTS } from 'lib/dummy'
import { feedTabs } from '@helpers/routes'
import { Aside } from '@components/index'
import { catchPromise } from '@helpers/utils';


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

const ToolsPage: NextPageWithLayout = ({ posts }: any) => {
  return <ToolsView></ToolsView>
}

ToolsPage.getLayout = function getLayout(page: ReactElement) {
  return <WithLayout layout={Home} component={page} aside={Aside}/>
}

ToolsPage.auth = false;

export default ToolsPage
