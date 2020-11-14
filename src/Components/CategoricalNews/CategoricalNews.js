import React,{useState,useEffect} from 'react'
import Navbar from '../Layout/Navbar'
import { Layout, Typography } from 'antd';
import { useParams } from "react-router-dom";
const { Footer, Content } = Layout;
const { Title } = Typography;

function CategoricalNews(props) {
    let { type } = useParams();

    const [topic, setTopic] = useState('')

    useEffect(()=>{
    
        switch(type){
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

    },[type])
    
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Navbar />
            <Content style={{ backgroundColor: 'white' }}>
                <Title style={{ margin: '20px 0px 20px 30px' }} level={5}>{topic}</Title>
            </Content>
            <Footer style={{ backgroundColor: 'white' }}>Footer</Footer>
        </Layout>
    )
}


export default CategoricalNews

