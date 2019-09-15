import * as React from "react";
import Helmet from 'react-helmet';
import Footer from '../layouts/footer';
import ManiNav from '../layouts/header';
import '../styles/style.scss';

const MainLayout: React.FC = ({ children }) => (
  <div>
    <Helmet
      title="Chinese Christian Church Germantown"
      meta={[
        { name: 'description', content: 'cccg' },
        { name: 'keywords', content: 'church, Chinese' },
      ]}
    />
    <ManiNav />
    <div style={{ margin: '0 auto', maxWidth: '100%', paddingTop: 0 }}>
      {children}
    </div>
    <Footer />
  </div>
)

export default MainLayout