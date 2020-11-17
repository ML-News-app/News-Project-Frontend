import React, { useState, useEffect } from 'react'
import Navbar from '../Layout/Navbar'
import { Layout, Typography } from 'antd';
const { Footer, Content } = Layout;
const { Title } = Typography;


function SingleNewsPage(props) {

    useEffect(()=>{
        console.log(props.location.state)
    },[props.location.state])
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Navbar />
            <Content style={{ backgroundColor: 'white' }}>
                <Title style={{ margin: '20px 0px 20px 30px' }} level={5}>Hello</Title>
                

            </Content>
            <Footer style={{ backgroundColor: 'white' }}>Footer</Footer>
        </Layout>
    )
}

export default SingleNewsPage

