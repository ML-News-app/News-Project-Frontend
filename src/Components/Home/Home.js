import React, { useEffect, useState } from 'react'
import { Layout, Typography, Spin } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MainNewsCard from '../Layout/MainNewsCard';
import Navbar from '../Layout/Navbar';
import axios from 'axios';

const { Footer, Content } = Layout;
const { Title } = Typography;


function Home(props) {

    const [state, setstate] = useState({
        HotNews: [],
        RecommendedNews: []
    })

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/testnews')
            .then(response => {
                setstate({
                    HotNews: response.data,
                    RecommendedNews: [
                        { news_id: 1, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ', body: '' },
                        { news_id: 2, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ', body: '' },
                        { news_id: 3, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ', body: '' },
                        { news_id: 4, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ', body: '' },
                        { news_id: 5, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ', body: '' },
                    ]
                })
                console.log(response.data)
            })
    }, [])

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
                <Title style={{ margin: '20px 0px 20px 30px' }} level={5}>උණුසුම් පුවත්</Title>
                {
                    state.HotNews.length > 0 ?
                        <Carousel responsive={responsive} autoPlay={true}>
                            {
                                state.HotNews && state.HotNews.map(i => {
                                    const maxLength = 250
                                    let summary = i.summerized_article;
                                    return <MainNewsCard key={i.id} summary={summary.substr(0, maxLength).concat('...')} newsData={i} />
                                })
                            }
                        </Carousel>
                        :
                        <div style={{ width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
                            <Spin size="large" />
                        </div>
                }
                <Title style={{ margin: '20px 0px 20px 30px' }} level={5}>නිර්දේශිත පුවත් </Title>    
                {
                    state.HotNews.length > 0 ?
                        <Carousel responsive={responsive} autoPlay={true}>
                            {
                                state.RecommendedNews && state.HotNews.map(i => {
                                    const maxLength = 250
                                    let summary = i.summerized_article;
                                    return <MainNewsCard key={i.id} summary={summary.substr(0, maxLength).concat('...')} newsData={i} />
                                })
                            }
                        </Carousel>
                        :
                        <div style={{ width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
                            <Spin size="large" />
                        </div>
                }
            </Content>
            <Footer style={{ backgroundColor: 'white' }}>Footer</Footer>
        </Layout>
    )
}

export default Home

