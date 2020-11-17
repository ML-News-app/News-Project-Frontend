import React, { useState, useEffect } from 'react'
import Navbar from '../Layout/Navbar'
import { Layout, Typography, Card, Divider, Spin } from 'antd';
const { Footer, Content } = Layout;
const { Title, Text } = Typography;


function SingleNewsPage(props) {

    const [state, setstate] = useState({
        title: '',
        body: ''
    })

    useEffect(() => {
        console.log(props.location.state)
        props.location.state && setstate({
            ...props.location.state
        })
    }, [props.location.state])
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Navbar />
            <Content style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                {
                    (state.title == '') ?
                        <div style={{ width: '1000px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70vh' }}>
                            <Spin size="large" />
                        </div>


                        :
                        <React.Fragment>
                            <Title style={{ margin: '20px 0px 20px 30px', marginTop: "30px", textAlign: 'center' }} level={3}>{state.title}</Title>
                            <Card style={{ width: '80%' }} bordered={false}>
                                <Text>{state.body}</Text>
                            </Card>
                        </React.Fragment>


                }

            </Content>
            <Footer style={{ backgroundColor: 'white' }}>Footer</Footer>
        </Layout>
    )
}

export default SingleNewsPage

