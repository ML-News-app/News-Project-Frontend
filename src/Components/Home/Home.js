import React, { useState } from 'react'
import { HomeTwoTone, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Input, Layout, Menu, Avatar, Typography, Card, Divider, Rate, Button } from 'antd';
import { Row, Col } from 'antd';
import flag from '../../assets/flag.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MainNewsCard from '../Layout/MainNewsCard';
import Navbar from '../Layout/Navbar';
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;
const { Text, Title } = Typography;
const { Meta } = Card;

function Home(props) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Navbar />
            <Content style={{ backgroundColor: 'white' }}>
                <Title style={{ margin: '20px 0px 20px 30px' }} level={5}>News Title</Title>

                <Carousel responsive={responsive} autoPlay={true} >
                    <div><MainNewsCard /></div>
                    <div><MainNewsCard /></div>
                    <div><MainNewsCard /></div>
                    <div><MainNewsCard /></div>
                    <div><MainNewsCard /></div>
                </Carousel>
                <Title style={{ margin: '20px 0px 20px 30px' }} level={5}>News Title</Title>

                <Carousel responsive={responsive} autoPlay={true} >
                    <div><MainNewsCard /></div>
                    <div><MainNewsCard /></div>
                    <div><MainNewsCard /></div>
                    <div><MainNewsCard /></div>
                    <div><MainNewsCard /></div>
                </Carousel>
            </Content>
            <Footer style={{ backgroundColor: 'white' }}>Footer</Footer>
        </Layout>
    )
}

export default Home

