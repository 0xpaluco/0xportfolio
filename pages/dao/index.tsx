import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/types'
import { DaoView } from '@views/index'
import WithLayout, { Home } from 'src/layouts'
import { GetServerSideProps } from 'next';

import { Aside } from '@components/index'


interface PageProps {}

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
}

const DaoPage: NextPageWithLayout = () => {
  return <DaoView></DaoView>
}

DaoPage.getLayout = function getLayout(page: ReactElement) {
  return <WithLayout layout={Home} component={page} aside={Aside}/>
}

DaoPage.auth = true;

export default DaoPage
