import React from "react"
import { Layout } from "antd"


import { Sidebar } from "../components/Sidebar"
import { MainContent } from "../components/MainContent"


const { Header } = Layout

const Home = () => {
  return(
    <>
      <section className="home">
        <Layout>
          <Sidebar/>
          <Layout>
            <Header style={{padding: 0, marginBottom: "-30px", background: "#fafafa"}}/>
            <MainContent/>
          </Layout>        
        </Layout>
      </section>
    </>
  )
}

export default Home
