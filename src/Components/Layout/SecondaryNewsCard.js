import React, { useEffect, useState } from 'react'
import { Card, Rate, Button,Popover } from 'antd';
const { Meta } = Card;

function SecondaryNewsCard(props) {

  const [state, setstate] = useState({
    body: '',
    new_id: '',
    summerized_article: '',
    title: ''
  })

  useEffect(() => {
    props.NewsData && setstate({
      ...state,
      ...props.NewsData
    })
  }, [props.NewsData])
  return (
    <Card
      hoverable
      style={{ width: 300, minHeight: '370px' }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <Rate value={3} />,

        <Button danger type="text" >
          වැඩි විස්තර
                </Button>,
      ]}
    >
      <Popover content={state.title} style={{ maxWidth: '50%' }}>
        <Meta
          title={state.title}
          description={state.summerized_article}
        />
      </Popover>
    </Card>

  )
}

export default SecondaryNewsCard

