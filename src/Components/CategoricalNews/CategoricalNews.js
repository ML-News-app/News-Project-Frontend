import React, { useState, useEffect } from 'react'
import Navbar from '../Layout/Navbar'
import { Layout, Typography, Row, Col, Pagination, List } from 'antd';
import { useParams } from "react-router-dom";
import SecondaryNewsCard from '../Layout/SecondaryNewsCard';
import axios from 'axios';
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
                let tempNewsList=[];
                axios.get('http://localhost:8080/api/v1/categorical/Sports')
                .then(response => {
                    response.data && response.data.map(i=>{
                      if(i.subcategory01=="ක්‍රිකට්" && i.subcategory02==="දේශීය ක්‍රිකට්"){
                        tempNewsList.push(i)
                      }
                    })
                    setNews({
                        NewsList: tempNewsList
                    })
                })
                break;
            case 'CricketInternational':
                setTopic('ක්‍රිකට් විදේශීය')
                let tempNewsList1=[];
                axios.get('http://localhost:8080/api/v1/categorical/Sports')
                .then(response => {
                    response.data && response.data.map(i=>{
                      if(i.subcategory01=="ක්‍රිකට්" && i.subcategory02==="ජාත්‍යන්තර ක්‍රිකට්"){
                        tempNewsList1.push(i)
                      }
                    })
                    setNews({
                        NewsList: tempNewsList1
                    })
                })
                break;
            case 'Football':
                setTopic('ෆූට්බෝල්')
                let tempNewsList2=[];
                axios.get('http://localhost:8080/api/v1/categorical/Sports')
                .then(response => {
                    response.data && response.data.map(i=>{
                      if(i.subcategory01=="පාපන්දු"){
                        tempNewsList2.push(i)
                      }
                    })
                    setNews({
                        NewsList: tempNewsList2
                    })
                })
                break;
            case 'Rugby':
                setTopic('රග්බි ')
                let tempNewsList3=[];
                axios.get('http://localhost:8080/api/v1/categorical/Sports')
                .then(response => {
                    response.data && response.data.map(i=>{
                      if(i.subcategory01=="රග්බි"){
                        tempNewsList3.push(i)
                      }
                    })
                    setNews({
                        NewsList: tempNewsList3
                    })
                })
                break;
            case 'political':
                setTopic('දේශපාලනික')
                axios.get('http://localhost:8080/api/v1/categorical/Politics')
                .then(response => {
                    setNews({
                        NewsList: response.data,
                    })
                   // console.log(response.data)
                })
                break;
            case 'health':
                setTopic('සෞක්‍ය')
                axios.get('http://localhost:8080/api/v1/categorical/Health')
                .then(response => {
                    setNews({
                        NewsList: response.data,
                    })
                   // console.log(response.data)
                })
                break;
            case 'religious':
                setTopic('ආගමික')
                axios.get('http://localhost:8080/api/v1/categorical/Religious')
                .then(response => {
                    setNews({
                        NewsList: response.data,
                    })
                    //console.log(response.data)
                })
                break;
            case 'crime':
                setTopic('අපරාධ')
                axios.get('http://localhost:8080/api/v1/categorical/Crime')
                .then(response => {
                    setNews({
                        NewsList: response.data,
                    })
                   // console.log(response.data)
                })
                break;
            case 'others':
                setTopic('වෙනත්')
                axios.get('http://localhost:8080/api/v1/categorical/Others')
                .then(response => {
                    setNews({
                        NewsList: response.data,
                    })
                   // console.log(response.data)
                })
                break;
            case 'hotnews':
                setTopic('උණුසුම් පුවත්')
                axios.get('http://localhost:8080/api/v1/categorical/hotnews')
                .then(response => {
                    setNews({
                        NewsList: response.data,
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
                        news.NewsList &&
                        news.NewsList.length > 0 &&
                        news.NewsList.slice(state.minValue, state.maxValue).map(val =>
                             (
                            <React.Fragment>
                                <Col xs={24} sm={11} md={6} style={{ display: 'flex', justifyContent: 'center', padding: '20px 0px 20px 0px' }} key={val.news_id}>
                                    <SecondaryNewsCard NewsData={val}/>
                                </Col>
                                <Col xs={24} sm={1} md={1} ></Col>
                            </React.Fragment>
                        ))
                        
                        
                    }
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

