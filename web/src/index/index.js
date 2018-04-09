import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb, Icon, Carousel, Row, Col, Card } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Meta } = Card;
import RootView from '../script/common'
import func from './behavior'
import './style.less'

class IndexPage extends RootView {
  constructor(props) {
    super(props);
    this.method._extend(this, func);
  }

/*  createIcon(option) {
    return option.map(item => (
      <div className="icon-box" key={item.icon}>
        <div className="icon-context">
          <i className={`fa fa-${item.icon}`} style={{backgroundColor: item.color}}/>
        </div>
        <div className="icon-text">
          {item.title}
        </div>
      </div>
    ))
  }*/

  componentWillMount() {

  }
  render() {
    let iconArr = this.state.config.icon;
    console.log(this)
    return (
      <Layout>
        <Header className="header" style={{ height: '40px' , display: 'flex'}}>
          <div className="logo"  style={{ width: '120px' }}><i className="fa fa-lemon-o"/></div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '40px' }}
          >
            <Menu.Item key="1">网站首页</Menu.Item>
            <Menu.Item key="2">产品分类fdsafdsa</Menu.Item>
            <Menu.Item key="3">新闻资讯</Menu.Item>
            <Menu.Item key="4">关于我们</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Content style={{ background: '#fff', padding: 0, margin: 0 }}>
            <Carousel autoplay>
              <div><img src={require('../../public/image/banner.jpg')} alt=""/></div>
              <div><img src={require('../../public/image/banner.jpg')} alt=""/></div>
              <div><img src={require('../../public/image/banner.jpg')} alt=""/></div>
              <div><img src={require('../../public/image/banner.jpg')} alt=""/></div>
            </Carousel>
            {/*<Row className="hospital-advantage">
              <Col md={{ span: 24 }} lg={{ span: 20, offset: 2 }}>
                {this.createIcon(iconArr)}
              </Col>
            </Row>*/}
            {/*<Row className="hospital-advantage">
              <Col md={{ span: 24 }} lg={{ span: 20, offset: 2 }}>
                <div className="poster" style={{height: 200, overflow: 'hidden'}}><img src={require('../../public/image/banner.jpg')} style={{width: '100%'}} alt=""/></div>
              </Col>
            </Row>*/}

            <Row className="hospital-product">
              <Col md={{ span: 24 }} lg={{ span: 20, offset: 2 }} style={{display: 'flex', flexFlow: 'wrap'}}>
                <div className="product-title">
                  <h4>护肤乳</h4>
                  <p>Europe Street beat europe Street beat</p>
                </div>
              </Col>
              <Col md={{ span: 24 }} lg={{ span: 20, offset: 2 }} style={{display: 'flex', flexFlow: 'wrap'}}>
                <Card
                  hoverable
                  style={{ width:  'calc(25% - 8px)', margin: '4px' }}
                  cover={<img alt="example" src={require('../../public/image/01.png')} />}>
                  <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
                <Card
                  hoverable
                  style={{ width:  'calc(25% - 8px)', margin: '4px' }}
                  cover={<img alt="example" src={require('../../public/image/02.png')} />}>
                  <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
                <Card
                  hoverable
                  style={{ width:  'calc(25% - 8px)', margin: '4px' }}
                  cover={<img alt="example" src={require('../../public/image/01.png')} />}>
                  <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
                <Card
                  hoverable
                  style={{ width:  'calc(25% - 8px)', margin: '4px' }}
                  cover={<img alt="example" src={require('../../public/image/02.png')} />}>
                  <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
                <Card
                  hoverable
                  style={{ width: 'calc(25% - 8px)', margin: '4px' }}
                  cover={<img alt="example" src={require('../../public/image/01.png')} />}>
                  <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
                <Card
                  hoverable
                  style={{ width:  'calc(25% - 8px)', margin: '4px' }}
                  cover={<img alt="example" src={require('../../public/image/01.png')} />}>
                  <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
                <Card
                  hoverable
                  style={{ width:  'calc(25% - 8px)', margin: '4px' }}
                  cover={<img alt="example" src={require('../../public/image/02.png')} />}>
                  <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    )
  }
}


ReactDOM.render(
  <IndexPage/>
  , document.getElementById('root'));