import React from 'react'
import { Card, Rate, Button, Popover, Typography,Row} from 'antd';
import flag from '../../assets/flag.png'
import { useHistory } from "react-router-dom";
const { Title, Text } = Typography;

const { Meta } = Card;

function MainNewsCard(props) {
    //console.log(props.newsData)

    let history = useHistory();

    function goToSingleNewPage() {
        history.push({
            pathname: '/news',
            state: { ...props.newsData }
        })
    }

    return (
        <Card
            hoverable={true}
            style={{
                width: 300, borderColor: "red",
                filter: 'drop-shadow(2px 4px 4px rgba(174, 0, 0, 0.25))', minHeight: '370px',
            }}
            cover={
                <img
                    alt="example"
                    src={props.newsData.img || flag}
                    style={{ objectFit: 'cover', height: '150px' }}
                />
            }
            actions={[
                <Rate value={3} disabled/>,

                <Button danger type="text" onClick={goToSingleNewPage}>
                    වැඩි විස්තර
                </Button>,

            ]}
        >
            <Title level={5} style={{ fontSize: '12px', textAlign: 'center' }}>{props.newsData.title}</Title>


            <Popover content={props.newsData.summerized_article} style={{ maxWidth: '50%' }}>
                <Meta
                    description={props.summary}
                    style={{ textAlign: 'justify', fontSize: '12px' }}
                />
            </Popover>
            <Row justify="end">
                <Text type="secondary" style={{ marginTop: '10px',marginBottom: '-20px',textAlign: 'end', fontSize: '13px', fontStyle: 'italic' }}>{props.date || new Date().toISOString().slice(0, 10)}</Text>
            </Row>
        </Card >
    )
}


export default MainNewsCard

