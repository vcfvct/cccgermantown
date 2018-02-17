import * as React from 'react'
import Helmet from 'react-helmet'
import ManiNav from './header'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/style.scss'
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
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
}

export default DefaultLayout