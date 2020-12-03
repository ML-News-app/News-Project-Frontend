import React, { useState, useEffect } from 'react'
import { HomeTwoTone } from '@ant-design/icons';
import { Input, Layout, Menu, Avatar, Typography, AutoComplete } from 'antd';
import flag from '../../assets/flag.png'
import { useHistory, useLocation } from "react-router-dom";
import axios from 'axios';
const { SubMenu } = Menu;
const { Header } = Layout;
const { Text, Title } = Typography;


function Navbar(props) {

    let history = useHistory();
    let location = useLocation();

    const [state, setState] = useState({
        current: 'mail'
    })

    const [newData, setNewData] = useState({
        newList: []
    })

    const [searchData, setSearchData] = useState({
        newList: [],
        selectedTitle:''
    })

    

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/testnews')
            .then(response => {
                setNewData({
                    newList: response.data
                })
                console.log(response.data)
            })
    }, [])




    const searchResult = () => {
        return newData.newList
    }

    const goToHome = () => {
        history.replace('/')
    }

    const handleClick = e => {

        if (location.pathname.substr(0, 9) === '/category') {
            history.replace(e.key);
        } else {
            history.replace(`category/${e.key}`);
        }

        setState({ current: e.key });
    };
    const { current } = state;

    const handleSearch = (value) => {
        const tempSearchList = []
        newData.newList.map(i => {
            if (i.title.includes(value)) {
                tempSearchList.push({
                    value: i.news_id,
                    label: i.title,
                })
            }
        })
        setSearchData({
            newList: tempSearchList
        })
    };

    const onSelect = (value) => {
        let tempselectedNews = newData.newList.filter(i=>i.news_id==value)
        setSearchData({
            ...searchData,
            selectedTitle:tempselectedNews[0]['title']
        })
        history.push({
            pathname: '/news',
            state:  tempselectedNews[0] 
          })
    };


    return (
        <div>
            <Header style={{ background: "linear-gradient(180deg, #6A0000 0%, #FF0000 100%)", height: "75px", display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
                <Title level={2} style={{ color: "white" }}>News App</Title>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                    <Avatar size="large" icon="user" src={flag} shape="square" style={{ width: "80px", height: "40px", marginTop: '30px' }} />
                    <Text type="secondary" style={{ marginTop: "-20px", color: 'white' }}>{new Date().toISOString().slice(0, 10)}</Text>
                </div>
                {/* <Search
                    placeholder="සොයන්න"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                /> */}
                <AutoComplete
                    dropdownMatchSelectWidth={200}
                    style={{ width: 200 }}
                    options={searchData.newList.map(i => {
                        return i
                    })}
                    value={searchData.selectedTitle}
                    onSelect={onSelect}
                    onSearch={handleSearch}
                >
                    <Input.Search size="large" placeholder="සොයන්න" />
                </AutoComplete>
            </Header>
            <Header style={{ backgroundColor: "white", height: "70px", display: 'flex', justifyContent: 'start', alignItems: 'flex-end' }}>
                <HomeTwoTone twoToneColor="red" style={{ marginBottom: "20px", fontSize: '30px', marginRight: '20px', marginLeft: '-20px' }} onClick={goToHome} />
                <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="hotnews" >
                        උණුසුම් පුවත්
            </Menu.Item>
                    <Menu.Item key="app">
                    </Menu.Item>
                    <SubMenu key="SubMenu" title=" ක්‍රීඩා">
                        <Menu.ItemGroup title="ක්‍රිකට්">
                            <Menu.Item key="CricketNational">දේශීය </Menu.Item>
                            <Menu.Item key="CricketInternational">විදේශීය </Menu.Item>
                        </Menu.ItemGroup>

                        <Menu.Item key="Rugby">රග්බි </Menu.Item>
                        <Menu.Item key="Football">ෆූට්බෝල් </Menu.Item>

                    </SubMenu>
                    <Menu.Item key="political" >
                        දේශපාලනික
            </Menu.Item>
                    <Menu.Item key="health" >
                        සෞක්‍ය
            </Menu.Item>
                    <Menu.Item key="religious" >
                        ආගමික
            </Menu.Item>
                    <Menu.Item key="crime" >
                        අපරාධ
            </Menu.Item>
                    <Menu.Item key="others" >
                        වෙනත්
            </Menu.Item>
                </Menu>

            </Header>
        </div>
    )
}



export default Navbar

