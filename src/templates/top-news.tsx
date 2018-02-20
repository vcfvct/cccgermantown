import * as React from 'react';

export interface OneNews {
  title: string;
  createdAt: Date;
  imageUrl: string;
}
export default class TopNews extends React.Component<OneNews, any> {
  constructor(props: OneNews) {
    super(props);
  }

  render() {
    return (<div className="col-md-3 col-sm-6" >
      <div className="news">
        <img className="news-image" src={this.props.imageUrl}></img>
        <h3 className="news-title"><a href="#">{this.props.title}</a></h3>
        <small className="date"><i className="fa fa-calendar"></i>{this.props.createdAt}</small>
      </div>
    </div>)
  }
} 