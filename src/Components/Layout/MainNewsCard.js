import React from 'react'
import { Card, Rate, Button } from 'antd';
import flag from '../../assets/flag.png'

const { Meta } = Card;

function MainNewsCard(props) {
    console.log(props.newsData)
    return (
            <Card
              hoverable={true}
                style={{ width: 300,borderColor:"red",
                filter: 'drop-shadow(2px 4px 4px rgba(174, 0, 0, 0.25))',height:'370px'}}
                cover={
                  <img
                    alt="example"
                    src={flag}
                    style={{objectFit:'cover',height:'150px'}}
                  />
                }
                actions={[
                  <Rate value={3} />,
                  <Button danger type="text" >
                  වැඩි විස්තර 
                </Button>,
                ]}
              >
                <Meta
                  title={props.newsData.title}
                  description={props.newsData.description}
                />
              </Card>
    )
}


export default MainNewsCard

