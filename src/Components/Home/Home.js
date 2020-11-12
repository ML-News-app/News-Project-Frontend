import React, { useState } from 'react'
import { Layout, Typography } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MainNewsCard from '../Layout/MainNewsCard';
import Navbar from '../Layout/Navbar';
const { Footer, Content } = Layout;
const { Title } = Typography;


function Home(props) {

    const [state, setstate] = useState({
        HotNews: [
            { id: 1, title: 'Hello', description: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ' },
            { id: 2, title: 'Hello1', description: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ' },
            { id: 3, title: 'Hello2', description: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ' },
            { id: 4, title: 'Hello3', description: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ' },
            { id: 5, title: 'Hello4', description: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ' }
        ],
        RecommendedNews:[
            { id: 1, title: 'Hello', description: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ' },
            { id: 2, title: 'Hello1', description: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ' },
            { id: 3, title: 'Hello2', description: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ' },
            { id: 4, title: 'Hello3', description: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ' },
            { id: 5, title: 'Hello4', description: ' leo ut imperdiet tincidunt. Proin vel dui tempor, gravida arcu ac, hendrerit neque. Phasellus non malesuada est. Sed id tristique enim, sed blandit nulla. ' }
        ]
    })

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
                        state.HotNews.map(i => {
                            return <MainNewsCard key={i.id} newsData={i} />
                        })
                    }
                </Carousel>
                <Title style={{ margin: '20px 0px 20px 30px' }} level={5}>News Title</Title>
                <Carousel responsive={responsive} autoPlay={true} >
                {
                        state.RecommendedNews.map(i => {
                            return <MainNewsCard key={i.id} newsData={i}/>
                        })
                    }
                </Carousel>
            </Content>
            <Footer style={{ backgroundColor: 'white' }}>Footer</Footer>
        </Layout>
    )
}

export default Home

