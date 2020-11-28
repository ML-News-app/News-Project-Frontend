import React, { useEffect, useState } from 'react'
import { Card, Rate, Button, Popover } from 'antd';
import {useHistory} from "react-router-dom";
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
          src={ state.img || "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
        />
      }
      actions={[
        <Rate value={3} />,

        <Button danger type="text"  onClick={goToSingleNewPage}>
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

