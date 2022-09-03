import { ReactElement, ReactNode, useState } from 'react'
import { GetServerSideProps } from "next";
import { NextPageWithLayout } from '@/types'
import { FeedView, HomeView, BlogView } from '@views/index'
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

const BlogPage: NextPageWithLayout = ({ posts }: any) => {
  return <BlogView></BlogView>
}

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <WithLayout layout={Home} component={page} aside={Aside}/>
}

BlogPage.auth = false;

export default BlogPage
