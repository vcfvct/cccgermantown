import * as React from "react";
import IndexCarousel from '../templates/carousel'
import {Container} from "reactstrap";
// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string;
      };
    };
  };
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context);
  }
  public render() {
    return (
      <div>
        <IndexCarousel />
        <Container>
          <h1>Hello  CCCG</h1>
          <p>This site is named <strong>{this.props.data.site.siteMetadata.siteName}</strong></p>
        </Container>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery{
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;