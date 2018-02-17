import React = require("react");

export default class Footer extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="widget">
                <h3 className="widget-title">主日崇拜地點</h3>
                <p>
                  Kingsview Middle School
                <br />
                  18909 Kingsview Rd,
                <br />
                  Germantown, MD 20874</p>
                <h3 className="widget-title">教会地址</h3>
                <ul className="address">
                  <li><i className="fa fa-map-marker"></i> 15915 Germantown Rd, <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Germantown,  MD 20874</li>
                  <li><i className="fa fa-phone"></i> 240-424-0011</li>
                  <li><i className="fa fa-envelope"></i> info@cccgermantown.org</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="widget">
                <h3 className="widget-title">聚會時間</h3>
                <ul className="bullet">
                  <li><a href="#">主日崇拜 - 10:00 am</a></li>
                  <li><a href="#">主日學 - 11:30 am</a></li>
                  <li><a href="#">禱告會 - 周三晚上8﹕00</a></li>
                  <li><a href="#">姐妹會 - 每月第二周日下午1:00</a></li>
                  <li><a href="#">妈妈禱告會 - 周四上午11﹕00</a></li>
                  <li><a href="#">詳細時間表 </a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="widget">
                <h3 className="widget-title">联系我们</h3>
                <form action="#" className="contact-form">
                  <div className="row">
                    <div className="col-md-6"><input type="text" placeholder="Your name..." /></div>
                    <div className="col-md-6"><input type="text" placeholder="Email..." /></div>
                  </div>

                  <textarea name="" placeholder="Your message..."></textarea>
                  <div className="text-right"><input type="submit" value="Send message" /></div>

                </form>
              </div>
            </div>
          </div>

          <p className="colophon">Copyright 2018 Chinese Christian Church Germantown. All right reserved</p>
        </div>
      </footer>
    );
  }
}