import React, { useState, useEffect } from 'react'
import Navbar from '../Layout/Navbar'
import { Layout, Typography, Row, Col, Pagination, List, Spin, Card } from 'antd';
import { useParams } from "react-router-dom";
import SecondaryNewsCard from '../Layout/SecondaryNewsCard';
import axios from 'axios';
import catImages from './images';
const { Footer, Content } = Layout;
const { Title } = Typography;



function CategoricalNews(props) {
    let { type } = useParams();

    const [topic, setTopic] = useState('')
    const [state, setState] = useState({
        numEachPage: 6,
        minValue: 0,
        maxValue: 6
    })

    function handleChange(value) {
        setState({
            ...state,
            minValue: (value - 1) * state.numEachPage,
            maxValue: value * state.numEachPage
        });
    }

    const [news, setNews] = useState({
        NewsList: []
    })

    useEffect(() => {
        switch (type) {
            case 'CricketNational':
                setTopic('ක්‍රිකට් දේශීය ')
                let tempNewsList = [];
                axios.get('http://localhost:8080/api/v1/categorical/Sports')
                    .then(response => {
                        response.data && response.data.map(i => {
                            if (i.subcategory01 == "ක්‍රිකට්" && i.subcategory02 === "දේශීය ක්‍රිකට්") {
                                tempNewsList.push({
                                    ...i,
                                    img: catImages.CricketNational[Math.floor(Math.random() * (catImages.CricketNational.length))]
                                })
                            }
                        })
                        setNews({
                            NewsList: tempNewsList
                        })
                    })
                break;
            case 'CricketInternational':
                setTopic('ක්‍රිකට් විදේශීය')
                let tempNewsList1 = [];
                axios.get('http://localhost:8080/api/v1/categorical/Sports')
                    .then(response => {
                        response.data && response.data.map(i => {
                            if (i.subcategory01 == "ක්‍රිකට්" && i.subcategory02 === "ජාත්‍යන්තර ක්‍රිකට්") {
                                tempNewsList1.push({
                                    ...i,
                                    img: catImages.CricketInternational[Math.floor(Math.random() * (catImages.CricketInternational.length))]
                                })
                            }
                        })
                        setNews({
                            NewsList: tempNewsList1
                        })
                    })
                break;
            case 'FootballNational':
                setTopic('පාපන්දු දේශීය ')
                let tempNewsList20 = [];
                axios.get('http://localhost:8080/api/v1/categorical/Sports')
                    .then(response => {
                        response.data && response.data.map(i => {
                            if (i.subcategory01 == "පාපන්දු" && i.subcategory02 === "දේශීය  පාපන්දු") {
                                tempNewsList20.push({
                                    ...i,
                                    img: catImages.FootballNational[Math.floor(Math.random() * (catImages.FootballNational.length))]
                                })
                            }
                        })
                        setNews({
                            NewsList: tempNewsList20
                        })
                    })
                break;
            case 'FootballInternational':
                setTopic('පාපන්දු විදේශීය ')
                let tempNewsList21 = [];
                axios.get('http://localhost:8080/api/v1/categorical/Sports')
                    .then(response => {
                        response.data && response.data.map(i => {
                            if (i.subcategory01 == "පාපන්දු" && i.subcategory02 === "ජාත්‍යන්තර  පාපන්දු") {
                                tempNewsList21.push({
                                    ...i,
                                    img: catImages.FootballInternational[Math.floor(Math.random() * (catImages.FootballInternational.length))]
                                })
                            }
                        })
                        setNews({
                            NewsList: tempNewsList21
                        })
                    })
                break;
            case 'RugbyNational':
                setTopic('රග්බි දේශීය ')
                let tempNewsList23 = [];
                axios.get('http://localhost:8080/api/v1/categorical/Sports')
                    .then(response => {
                        response.data && response.data.map(i => {
                            if (i.subcategory01 == "රග්බි" && i.subcategory02 === "දේශීය රග්බි") {
                                tempNewsList23.push({
                                    ...i,
                                    img: catImages.RugbyNational[Math.floor(Math.random() * (catImages.RugbyNational.length))]
                                })
                            }
                        })
                        setNews({
                            NewsList: tempNewsList23
                        })
                    })
                break;
            case 'RugbyNational':
                setTopic('රග්බි විදේශීය ')
                let tempNewsList24 = [];
                axios.get('http://localhost:8080/api/v1/categorical/Sports')
                    .then(response => {
                        response.data && response.data.map(i => {
                            if (i.subcategory01 == "රග්බි" && i.subcategory02 === "ජාත්‍යන්තර රග්බි") {
                                tempNewsList24.push({
                                    ...i,
                                    img: catImages.RugbyInternational[Math.floor(Math.random() * (catImages.RugbyInternational.length))]
                                })
                            }
                        })
                        setNews({
                            NewsList: tempNewsList24
                        })
                    })
                break;
            case 'political':
                setTopic('දේශපාලනික')
                let tempNewsList4 = [];
                axios.get('http://localhost:8080/api/v1/categorical/Politics')
                    .then(response => {
                        response.data && response.data.map(i => {
                            tempNewsList4.push({
                                ...i,
                                img: catImages.political[Math.floor(Math.random() * (catImages.political.length))]
                            })
                        })
                        setNews({
                            NewsList: tempNewsList4,
                        })
                        // console.log(response.data)
                    })
                break;
            case 'health':
                setTopic('සෞක්‍ය')
                let tempNewsList5 = [];
                axios.get('http://localhost:8080/api/v1/categorical/Health')
                    .then(response => {
                        response.data && response.data.map(i => {
                            tempNewsList5.push({
                                ...i,
                                img: catImages.health[Math.floor(Math.random() * (catImages.health.length))]
                            })
                        })
                        setNews({
                            NewsList: tempNewsList5,
                        })
                        // console.log(response.data)
                    })
                break;
            case 'religious':
                setTopic('ආගමික')
                let tempNewsList6 = [];
                axios.get('http://localhost:8080/api/v1/categorical/Religious')
                    .then(response => {
                        response.data && response.data.map(i => {
                            tempNewsList6.push({
                                ...i,
                                img: catImages.religious[Math.floor(Math.random() * (catImages.religious.length))]
                            })
                        })
                        setNews({
                            NewsList: tempNewsList6,
                        })
                        //console.log(response.data)
                    })
                break;
            case 'crime':
                setTopic('අපරාධ')
                let tempNewsList7 = [];
                axios.get('http://localhost:8080/api/v1/categorical/Crime')
                    .then(response => {
                        response.data && response.data.map(i => {
                            tempNewsList7.push({
                                ...i,
                                img: catImages.crime[Math.floor(Math.random() * (catImages.crime.length))]
                            })
                        })
                        setNews({
                            NewsList: tempNewsList7,
                        })
                        // console.log(response.data)
                    })
                break;
            case 'others':
                setTopic('වෙනත්')
                let tempNewsList8 = [];
                axios.get('http://localhost:8080/api/v1/categorical/Others')
                    .then(response => {
                        response.data && response.data.map(i => {
                            tempNewsList8.push({
                                ...i,
                                img: catImages.others[Math.floor(Math.random() * (catImages.others.length))]
                            })
                        })
                        setNews({
                            NewsList: tempNewsList8,
                        })
                        // console.log(response.data)
                    })
                break;
            case 'hotnews':
                setTopic('උණුසුම් පුවත්')
                let tempNewsList9 = [];
                axios.get('http://localhost:8080/api/v1/categorical/hotnews')
                    .then(response => {
                        response.data && response.data.map(i => {
                            tempNewsList9.push({
                                ...i,
                                img: catImages.hotnews[Math.floor(Math.random() * (catImages.hotnews.length))]
                            })
                        })
                        setNews({
                            NewsList: tempNewsList9,
                        })
                        //  console.log(response.data)
                    })
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
                        (news.NewsList && news.NewsList.length > 0) ?
                            news.NewsList.slice(state.minValue, state.maxValue).map(val =>
                                (
                                    <React.Fragment>
                                        <Col xs={24} sm={11} md={6} style={{ display: 'flex', justifyContent: 'center', padding: '20px 0px 20px 0px' }}>
                                            <SecondaryNewsCard NewsData={val} key={val.news_id}/>
                                        </Col>
                                        <Col xs={24} sm={1} md={1} ></Col>
                                    </React.Fragment>
                                ))
                            :
                            <div style={{ width: '1000px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
                                <Spin size="large" />
                            </div>

                    }
                </Row>

                <Row align="middle" justify="center" style={{ marginTop: '20px' }}>
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

