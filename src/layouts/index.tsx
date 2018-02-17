import * as React from 'react'
import Helmet from 'react-helmet'
import ManiNav from './header'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import '../styles/style.scss'
import Footer from './footer';
interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: any
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        <Helmet
          title="Chinese Christian Church Germantown"
          meta={[
            { name: 'description', content: 'cccg' },
            { name: 'keywords', content: 'church, Chinese' },
          ]}
        />
        <ManiNav />
        <div style={{ margin: '0 auto', maxWidth: '100%', paddingTop: 0, }}>
          {this.props.children()}
        </div>
        <Footer />
      </div>
    )
  }
}

export default DefaultLayout