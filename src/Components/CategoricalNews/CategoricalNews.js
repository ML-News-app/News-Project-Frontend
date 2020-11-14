import React, { useState, useEffect } from 'react'
import Navbar from '../Layout/Navbar'
import { Layout, Typography, Row, Col, Pagination, List } from 'antd';
import { useParams } from "react-router-dom";
import SecondaryNewsCard from '../Layout/SecondaryNewsCard';
const { Footer, Content } = Layout;
const { Title } = Typography;



function CategoricalNews(props) {
    let { type } = useParams();

    const [topic, setTopic] = useState('')
    const [state, setState] = useState({
        numEachPage: 6,
        minValue: 0,
        maxValue: 8
    })

    function handleChange(value) {
        setState({
            ...state,
            minValue: (value - 1) * state.numEachPage,
            maxValue: value * state.numEachPage
        });
    }

    const [news, setNews] = useState({
        NewsList: [
            { news_id: 1, title: 'Hello', summerized_article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac diam vel leo gravida tincidunt. Nulla placerat sapien eros, sit amet commodo nisl accumsan ac. Nunc enim velit, ullamcorper ultrices efficitur id, eleifend a erat. Sed varius scelerisque sem quis facilisis. Praesent ac ultricies lorem. Nam pellentesque metus accumsan risus sagittis euismod. Integer ac tincidunt urna. Aliquam metus velit, tempus id varius molestie, consequat sed ex. Suspendisse sit amet facilisis urna. Suspendisse eget nisi vel quam ultricies scelerisque sed a augue. Fusce tincidunt sapien at diam sagittis tincidunt. Proin vitae eros id velit viverra varius a eget mi. Nam rhoncus erat eget luctus sodales. In hac habitasse platea dictumst.Etiam sed eros blandit, volutpat magna eget, tincidunt urna. Donec mattis vel ipsum in tristique. Phasellus laoreet rhoncus commodo. Curabitur porta, lectus non ultrices maximus, diam augue semper diam, quis aliquam ante sapien ac felis. Phasellus accumsan libero nisi, ut pharetra lectus iaculis maximus. Nullam facilisis suscipit porttitor. Suspendisse euismod vel justo nec mollis. Praesent enim massa, varius gravida ex id, congue pretium est. Aliquam et porttitor diam. Vivamus dapibus arcu vitae iaculis imperdiet. Vestibulum egestas facilisis hendrerit. Cras eleifend, turpis vel laoreet euismod, lorem odio gravida justo, ac dapibus ipsum turpis eu diam. Mauris dignissim commodo dui, quis finibus est mollis a. Quisque ut placerat tellus, vitae lacinia turpis. Donec convallis odio quis neque dapibus, dapibus suscipit dolor dictum. leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ', body: '' },
            { news_id: 2, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ', body: '' },
            { news_id: 3, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ', body: '' },
            { news_id: 4, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ', body: '' },
            { news_id: 5, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ', body: '' },
            { news_id: 1, title: 'Hello', summerized_article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac diam vel leo gravida tincidunt. Nulla placerat sapien eros, sit amet commodo nisl accumsan ac. Nunc enim velit, ullamcorper ultrices efficitur id, eleifend a erat. Sed varius scelerisque sem quis facilisis. Praesent ac ultricies lorem. Nam pellentesque metus accumsan risus sagittis euismod. Integer ac tincidunt urna. Aliquam metus velit, tempus id varius molestie, consequat sed ex. Suspendisse sit amet facilisis urna. Suspendisse eget nisi vel quam ultricies scelerisque sed a augue. Fusce tincidunt sapien at diam sagittis tincidunt. Proin vitae eros id velit viverra varius a eget mi. Nam rhoncus erat eget luctus sodales. In hac habitasse platea dictumst.Etiam sed eros blandit, volutpat magna eget, tincidunt urna. Donec mattis vel ipsum in tristique. Phasellus laoreet rhoncus commodo. Curabitur porta, lectus non ultrices maximus, diam augue semper diam, quis aliquam ante sapien ac felis. Phasellus accumsan libero nisi, ut pharetra lectus iaculis maximus. Nullam facilisis suscipit porttitor. Suspendisse euismod vel justo nec mollis. Praesent enim massa, varius gravida ex id, congue pretium est. Aliquam et porttitor diam. Vivamus dapibus arcu vitae iaculis imperdiet. Vestibulum egestas facilisis hendrerit. Cras eleifend, turpis vel laoreet euismod, lorem odio gravida justo, ac dapibus ipsum turpis eu diam. Mauris dignissim commodo dui, quis finibus est mollis a. Quisque ut placerat tellus, vitae lacinia turpis. Donec convallis odio quis neque dapibus, dapibus suscipit dolor dictum. leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ', body: '' },
            { news_id: 2, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ', body: '' },
            { news_id: 3, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ', body: '' },
            { news_id: 4, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ', body: '' },
            { news_id: 5, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ', body: '' },
        ]
    })

    useEffect(() => {

        switch (type) {
            case 'CricketNational':
                setTopic('ක්‍රිකට් දේශීය ')
                break;
            case 'CricketInternational':
                setTopic('ක්‍රිකට් විදේශීය')
                break;
            case 'Football':
                setTopic('ෆූට්බෝල්')
                break;
            case 'Rugby':
                setTopic('රග්බි ')
                break;
            case 'political':
                setTopic('දේශපාලනික')
                break;
            case 'health':
                setTopic('සෞක්‍ය')
                break;
            case 'religious':
                setTopic('ආගමික')
                break;
            case 'crime':
                setTopic('අපරාධ')
                break;
            case 'others':
                setTopic('වෙනත්')
                break;
            case 'hotnews':
                setTopic('උණුසුම් පුවත්')
                break;
            default:
                break;
        }

    }, [type])

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Navbar />
            <Content style={{ backgroundColor: 'white' }}>
                <Title style={{ margin: '20px 0px 20px 30px' }} level={5}>{topic}</Title>
                <Row align="middle" justify="center">

                    {
                        news.NewsList &&
                        news.NewsList.length > 0 &&
                        news.NewsList.slice(state.minValue, state.maxValue).map(val => (
                            <React.Fragment>
                                <Col xs={24} sm={11} md={6} style={{ display: 'flex', justifyContent: 'center', padding: '20px 0px 20px 0px' }}>
                                    <SecondaryNewsCard />
                                </Col>
                                <Col xs={24} sm={1} md={1} ></Col>
                            </React.Fragment>

                        ))}
                </Row>

                <Row align="middle" justify="center" style={{marginTop:'20px'}}>
                <Pagination
                    defaultCurrent={1}
                    defaultPageSize={state.numEachPage} //default size of page
                    onChange={handleChange}
                    total={news.NewsList.length} //total number of card data available
                />
                </Row>
            </Content>
            <Footer style={{ backgroundColor: 'white' }}>Footer</Footer>
        </Layout>
    )
}


export default CategoricalNews

