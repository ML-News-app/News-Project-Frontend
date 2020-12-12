import React, { useEffect, useState } from 'react'
import { Card, Rate, Button, Popover, Typography, Row } from 'antd';
import { useHistory } from "react-router-dom";
const { Text,Title } = Typography;
const { Meta } = Card;


function SecondaryNewsCard(props) {

  let history = useHistory();

  const [state, setstate] = useState({
    body: '',
    new_id: '',
    summerized_article: '',
    title: ''
  })

  useEffect(() => {
    console.log(new Date().toISOString())
    props.NewsData && setstate({
      ...state,
      ...props.NewsData
    })
  }, [props.NewsData])

  function goToSingleNewPage() {
    history.push({
      pathname: '/news',
      state: { ...state }
    })
  }

  return (
    <Card
      hoverable
      style={{ width: 300, minHeight: '370px' }}
      cover={
        <img
          alt="example"
          src={state.img || "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
        />
      }
      actions={[
        <Rate value={3} disabled/>,

        <Button danger type="text" onClick={goToSingleNewPage}>
          වැඩි විස්තර
                </Button>,
      ]}
    >
     {/*  <Popover content={state.title} style={{ maxWidth: '50%' }}> */}
     <Title level={5} style={{ fontSize: '12px', textAlign: 'center' }}>{state.title}</Title>

        <Meta
         // title={state.title}
          description={state.summerized_article}
          style={{ textAlign: 'justify',fontSize:'12px' }}
        />

   {/*    </Popover> */}
      <Row justify="end">
        <Text type="secondary" style={{ marginTop: '10px', textAlign: 'end', fontSize: '10px', fontStyle: 'italic' }}>{state.date || new Date().toISOString().slice(0, 10)}</Text>
      </Row>

    </Card>

  )
}

export default SecondaryNewsCard

