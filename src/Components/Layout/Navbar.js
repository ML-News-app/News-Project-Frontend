import React,{useState} from 'react'
import { HomeTwoTone } from '@ant-design/icons';
import { Input, Layout, Menu, Avatar, Typography } from 'antd';
import flag from '../../assets/flag.png'
import { useHistory,useLocation } from "react-router-dom";
const { SubMenu } = Menu;
const { Header } = Layout;
const { Search } = Input;
const { Text, Title } = Typography;


function Navbar(props) {

    let history = useHistory();
    let location = useLocation();

    const [state, setState] = useState({
        current: 'mail'
    })

    const goToHome = ()=>{
        history.replace('/')
    }

    const handleClick = e => {
        console.log('click ', e);
        if(location.pathname.substr(0,9)=='/category'){
            history.replace(e.key);
        }else{
            history.replace(`category/${e.key}`);
        }
        
        setState({ current: e.key });
    };
    const { current } = state;

    return (
        <div>
            <Header style={{ backgroundColor: "white", height: "75px", display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
                <Title level={2}>News App</Title>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                    <Avatar size="large" icon="user" src={flag} shape="square" style={{ width: "80px", height: "40px", marginTop: '30px' }}/>
                    <Text type="secondary" style={{ marginTop: "-25px" }}>Nov 7,2020</Text>
                </div>
                <Search
                    placeholder="සොයන්න"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />
            </Header>
            <Header style={{ backgroundColor: "white", height: "70px", display: 'flex', justifyContent: 'start', alignItems: 'flex-end' }}>
                <HomeTwoTone twoToneColor="red" style={{ marginBottom: "20px", fontSize: '30px', marginRight: '20px', marginLeft: '-20px' }}  onClick={goToHome}/>
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

