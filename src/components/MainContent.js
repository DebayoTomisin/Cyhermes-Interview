import React from "react"
import { Layout }from "antd"
import { Header } from "../components/Header" 
import { Packages } from "../components/Packages"
import { Slides } from "./Slider"
import { Modules } from "./Modules"



export const MainContent = () => 
{
  return(
    <>
      <main className="main">
        <Layout style={{background: "#fafafa"}}>
          <Header/>
          <Packages/>
          <Slides/>
          <Modules/>
        </Layout>
      </main>
    </>
  )
}
