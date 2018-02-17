import * as React from 'react';
import { Container } from 'reactstrap';

interface PageProps{
    data:{
        contentfulPage: {
            title: string;
            slug: string;
            content: {
                content: string
            }
        }
    }
}

export default class extends React.Component<PageProps, {}> {
  render() {
    const {
      title,
      content
    } = this.props.data.contentfulPage
    return (
      <Container>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: content.content}} />
      </Container>
    )
  }
}


export const pageQuery = graphql`
  query pageQuery($slug: String!){
    contentfulPage(slug: {eq: $slug}) {
      title
      slug
      content{
          content
      }
    }
  }
  `