import React from "react"
import { Layout } from "antd"


import { Sidebar } from "../components/Sidebar"
import { MainContent } from "../components/MainContent"


const { Header, Content } = Layout

const Home = () => {
  return(
    <>
      <main className="home">
        <Sidebar/>
        <Header style={{padding: 0, background: "#fafafa"}}/>
        <MainContent/>
      </main>
    </>
  )
}

export default Home
