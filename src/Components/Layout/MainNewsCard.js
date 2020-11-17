import React from 'react'
import { Card, Rate, Button, Popover } from 'antd';
import flag from '../../assets/flag.png'
import {useHistory} from "react-router-dom";

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
                filter: 'drop-shadow(2px 4px 4px rgba(174, 0, 0, 0.25))', height: '370px'
            }}
            cover={
                <img
                    alt="example"
                    src={flag}
                    style={{ objectFit: 'cover', height: '150px' }}
                />
            }
            actions={[
                <Rate value={3} />,

                <Button danger type="text"  onClick={goToSingleNewPage}>
                    වැඩි විස්තර
                </Button>,

            ]}
        >



            <Popover content={props.newsData.summerized_article} style={{maxWidth:'50%'}}>
                <Meta
                    title={props.newsData.title}
                    description={props.summary}
                />
            </Popover>
        </Card >
    )
}


export default MainNewsCard

