import React, { Component, useState } from 'react';
import './App.css';
import { HomeTwoTone } from '@ant-design/icons';
import { Input, Layout, Menu, Avatar, Typography } from 'antd';
import flag from './assets/flag.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;
const { Text, Title } = Typography;


function App() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [state, setState] = useState({
    current: 'mail'
  })

  const handleClick = e => {
    console.log('click ', e);
    setState({ current: e.key });
  };
  const { current } = state;

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ backgroundColor: "white", height: "75px", display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
        <Title level={2}>News App</Title>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
          <Avatar size="large" icon="user" src={flag} shape="square" style={{ width: "80px", height: "40px", marginTop: '30px' }} />
          <Text type="secondary" style={{ marginTop: "-25px" }}>Nov 7,2020</Text>
        </div>
        <Search
          placeholder="සොයන්න"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
      </Header>
      <Header style={{ backgroundColor: "white", height: "70px", display: 'flex', justifyContent: 'start', alignItems: 'flex-end' }}>
        <HomeTwoTone twoToneColor="red" style={{ marginBottom: "20px", fontSize: '30px', marginRight: '20px', marginLeft: '-20px' }} />
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="hotnews" >
            උණුසුම් පුවත්
          </Menu.Item>
          <Menu.Item key="app">
          </Menu.Item>
          <SubMenu key="SubMenu" title=" ක්‍රීඩා">
            <Menu.ItemGroup title="ක්‍රිකට්">
              <Menu.Item key="National">දේශීය </Menu.Item>
              <Menu.Item key="International">විදේශීය </Menu.Item>
            </Menu.ItemGroup>

            <Menu.Item key="Rugby">රග්බි </Menu.Item>
            <Menu.Item key="Football">ෆූට්බෝල් </Menu.Item>

          </SubMenu>
          <Menu.Item key="political" >
            දේශපාලනික
          </Menu.Item>
          <Menu.Item key="health" >
            සෞක්‍ය
          </Menu.Item>
          <Menu.Item key="religious" >
            ආගමික
          </Menu.Item>
          <Menu.Item key="crime" >
            අපරාධ
          </Menu.Item>
          <Menu.Item key="others" >
            වෙනත්
          </Menu.Item>
        </Menu>

      </Header>
      <Content style={{ backgroundColor: 'white' }}>
        <Carousel responsive={responsive} autoPlay={true}>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </Carousel>;
      </Content>
      <Footer style={{ backgroundColor: 'white' }}>Footer</Footer>
    </Layout>
  );
}

export default App;
