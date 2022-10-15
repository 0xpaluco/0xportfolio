
import { ReactElement } from 'react-markdown/lib/react-markdown'
import WithLayout, {  Home, Simple } from 'src/layouts'
import { Aside } from '@components/index'
import { AboutView } from '@views/index'


export default function About() {
  return (
    <AboutView></AboutView>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <WithLayout layout={Home} component={page} aside={Aside}/>
}
