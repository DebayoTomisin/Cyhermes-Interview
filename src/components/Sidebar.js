import React from "react"
import { Layout, Menu } from "antd"
import Logo from '../assets/images/logo.png';
import Quote from '../assets/images/quote.png';
import { ArrowRightOutlined } from '@ant-design/icons'


const { Sider } = Layout;

export const Sidebar = () => {
  return(
    <Sider width= "30vw" style ={{minHeight:"100vh", padding: "50px 0"}} breakpoint="md">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{
          background: '#222021',
        }}>
        <header className="ant-layout-sider-main">
          <img src={Logo} alt="logo" />
        </header>
        <Menu.Item key="1">
          <span>Trial & Pricing</span>
          <ArrowRightOutlined />
        </Menu.Item>
        <Menu.Item key="2">Payment Method</Menu.Item>
        <hr />
        <Menu.Item key="3">Get started...</Menu.Item>
      </Menu>

      <div className="quote">
        <blockquote>
          <img src={Quote} alt="Quote" />
          <p>
            Sucess is not final; failure is not fatal: it is the
            courage to continue that counts.
            <strong> -Wiston Churchill</strong>
          </p>
        </blockquote>
      </div>
    </Sider>
  )
}