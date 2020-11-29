import React, { useEffect, useState } from 'react'
import { Layout, Typography } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MainNewsCard from '../Layout/MainNewsCard';
import Navbar from '../Layout/Navbar';
import axios from 'axios';

const { Footer, Content } = Layout;
const { Title } = Typography;


function Home(props) {

    const [state, setstate] = useState({
        HotNews: [
            { news_id: 1, title: 'Hello', summerized_article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac diam vel leo gravida tincidunt. Nulla placerat sapien eros, sit amet commodo nisl accumsan ac. Nunc enim velit, ullamcorper ultrices efficitur id, eleifend a erat. Sed varius scelerisque sem quis facilisis. Praesent ac ultricies lorem. Nam pellentesque metus accumsan risus sagittis euismod. Integer ac tincidunt urna. Aliquam metus velit, tempus id varius molestie, consequat sed ex. Suspendisse sit amet facilisis urna. Suspendisse eget nisi vel quam ultricies scelerisque sed a augue. Fusce tincidunt sapien at diam sagittis tincidunt. Proin vitae eros id velit viverra varius a eget mi. Nam rhoncus erat eget luctus sodales. In hac habitasse platea dictumst.Etiam sed eros blandit, volutpat magna eget, tincidunt urna. Donec mattis vel ipsum in tristique. Phasellus laoreet rhoncus commodo. Curabitur porta, lectus non ultrices maximus, diam augue semper diam, quis aliquam ante sapien ac felis. Phasellus accumsan libero nisi, ut pharetra lectus iaculis maximus. Nullam facilisis suscipit porttitor. Suspendisse euismod vel justo nec mollis. Praesent enim massa, varius gravida ex id, congue pretium est. Aliquam et porttitor diam. Vivamus dapibus arcu vitae iaculis imperdiet. Vestibulum egestas facilisis hendrerit. Cras eleifend, turpis vel laoreet euismod, lorem odio gravida justo, ac dapibus ipsum turpis eu diam. Mauris dignissim commodo dui, quis finibus est mollis a. Quisque ut placerat tellus, vitae lacinia turpis. Donec convallis odio quis neque dapibus, dapibus suscipit dolor dictum. leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ',body:''},
            { news_id: 2, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ',body:''},
            { news_id: 3, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ',body:''},
            { news_id: 4, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ',body:''},
            { news_id: 5, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ',body:''},
        ],
        RecommendedNews:[
            { news_id: 1, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ',body:''},
            { news_id: 2, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ',body:''},
            { news_id: 3, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ',body:''},
            { news_id: 4, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ',body:''},
            { news_id: 5, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ',body:''},
        ]
    })
    
    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/testnews')
        .then(response => {
            setstate({
                HotNews: response.data,
                RecommendedNews:[
                    { news_id: 1, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ',body:''},
                    { news_id: 2, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ',body:''},
                    { news_id: 3, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ',body:''},
                    { news_id: 4, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ',body:''},
                    { news_id: 5, title: 'Hello', summerized_article: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ',body:''},
                ]
            })
            console.log(response.data)
        })
    },[])

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
                <Carousel responsive={responsive} autoPlay={true}>
                    {
                        state.HotNews && state.HotNews.map(i => {
                            const maxLength=250
                            let summary = i.summerized_article;
                            return <MainNewsCard key={i.id} summary={summary.substr(0,maxLength).concat('...')} newsData={i} />
                        })
                    }
                </Carousel>
                <Title style={{ margin: '20px 0px 20px 30px' }} level={5}>News Title</Title>
                <Carousel responsive={responsive} autoPlay={true} >
                {
                        state.RecommendedNews && state.HotNews.map(i => {
                            const maxLength=250
                            let summary = i.summerized_article;
                            return <MainNewsCard key={i.id} summary={summary.substr(0,maxLength).concat('...')} newsData={i} />
                        })
                    }
                </Carousel>
            </Content>
            <Footer style={{ backgroundColor: 'white' }}>Footer</Footer>
        </Layout>
    )
}

export default Home

