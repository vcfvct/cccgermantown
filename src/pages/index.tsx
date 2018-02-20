import * as React from "react";
import IndexCarousel from '../templates/carousel'
import { Container } from "reactstrap";
import TopNews, { OneNews } from "../templates/top-news";
// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string;
      };
    };
    allContentfulNews: {
      edges: [{
        node: {
          title: string;
          createdAt: Date;
          featuredImage: {
            file: {
              url: string;
            }
          }
          content: {
            content: string;
          }
        }
      }]
    }
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
          <p>This site is named <strong>{this.props.data.allContentfulNews.edges[0].node.title}</strong></p>
          <div className="fullwidth-block">
            <div className="container">
              <h2 className="section-title">Recent news</h2>

              <div className="row">
                {this.props.data.allContentfulNews.edges.map(edge => {
                  const oneNews: OneNews = {
                    title: edge.node.title,
                    createdAt: edge.node.createdAt,
                    imageUrl: edge.node.featuredImage.file.url
                  };
                  return <TopNews {...oneNews} key={oneNews.title}/>
                })}

              </div>
            </div>
          </div>



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
    allContentfulNews(limit:4, sort:{fields:[createdAt]}) {
      edges {
        node {
          id
          title
          createdAt
          featuredImage{
            file {
              url
            }
          }
          content {
            content
          }
        }
      }
    }
  }
`;