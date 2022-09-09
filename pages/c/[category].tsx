import { ReactElement } from 'react'
import { GetStaticProps } from "next";
import { NextPageWithLayout } from '@/types'
import { BlogView, CategoryView } from '@views/index'
import WithLayout, { Explore, Simple, Home } from 'src/layouts'
import { Aside } from '@components/index'
import { catchPromise } from '@helpers/utils';
import { Category, CategoryContent, StrapiCategoryData } from 'lib/types/strapi-schema';
import { categories, categoriesBySlug, mergeData } from '@helpers/strapi';
import Error from 'next/error';


const LIMIT = 3;

interface PageProps {
  category: Category
  contentList: CategoryContent[]
  error?: Error
  //children?: ReactNode;
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {

  const slug  = params?.category as string;
  const [categoryData, error] = await catchPromise(categoriesBySlug(slug));
  if(error){
    console.log(error);
    return {
      props: {
        category: { } as Category,
        contentList: [],
        error: JSON.parse(JSON.stringify(error))
      } // will be passed to the page component as props
    }
  }

  let category = (categoryData as StrapiCategoryData).data
    .find((cat) => {
      return cat.attributes.slug === params?.category?.toString()
    })

  if (!category) {
      return {
        notFound: true,
      }
  }
  
  return {
      props: {
        category,
        contentList: await mergeData(category)
      },
      revalidate: 10,
  }
}

export async function getStaticPaths() {
    const [categoryData, error] = await catchPromise(categories());

    return {
      paths: (categoryData as StrapiCategoryData).data.map((cat) => ({
        params: {
          category: cat.attributes.slug,
        }
      })),
      fallback: 'blocking',
    }
  }


const CategoryPage: NextPageWithLayout<PageProps> = ({ category, contentList }: PageProps) => {
  return <CategoryView category={category} contentList={contentList} ></CategoryView>
}

CategoryPage.getLayout = function getLayout(page: ReactElement<PageProps>) {
  return <WithLayout layout={Home} component={page} aside={Aside}/>
}

CategoryPage.auth = false;

export default CategoryPage
