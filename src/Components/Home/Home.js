import React, { useEffect, useState } from 'react'
import { Layout, Typography, Spin } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MainNewsCard from '../Layout/MainNewsCard';
import Navbar from '../Layout/Navbar';
import axios from 'axios';
import catImages from '../CategoricalNews/images';
const { Footer, Content } = Layout;
const { Title } = Typography;


function Home(props) {

    const [state, setstate] = useState({
        HotNews: [],
        RecommendedNews: []
    })

    useEffect(() => {
        let tempNews=[];
        axios.get('http://localhost:8080/api/v1/testnews')
            .then(response => {
                /* setstate({
                    HotNews: response.data,
                    RecommendedNews: []
                }) */
                response.data.map(i => {
                    tempNews.push({
                        ...i,
                       img:getImage(i.category,i.subcategory01)
                    })
                }
                )
                setstate({
                    HotNews:tempNews,
                    RecommendedNews: []
                })
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

    function getImage(category, subCategory) {
        switch (category) {
            case 'Sports':
                if (subCategory === 'ක්‍රිකට්') return catImages.CricketInternational[Math.floor(Math.random() * (catImages.CricketInternational.length))]
                else if (subCategory === 'පාපන්දු') return catImages.FootballInternational[Math.floor(Math.random() * (catImages.FootballInternational.length))]
                else if (subCategory === 'රග්බි') return catImages.RugbyInternational[Math.floor(Math.random() * (catImages.RugbyInternational.length))]
            case 'Politics':
                return catImages.political[Math.floor(Math.random() * (catImages.political.length))]
            case 'Health':
                return catImages.health[Math.floor(Math.random() * (catImages.health.length))]
            case 'Religious':
                return catImages.religious[Math.floor(Math.random() * (catImages.religious.length))]
            case 'Crime':
                return catImages.crime[Math.floor(Math.random() * (catImages.crime.length))]
            case 'Others':
                return catImages.others[Math.floor(Math.random() * (catImages.others.length))]
            default:
                console.log("Error")
                break;
        }
    }




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

