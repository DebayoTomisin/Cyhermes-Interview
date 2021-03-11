import React from "react"
import { Layout }from "antd"
import { Header } from "../components/Header" 
import { Packages } from "../components/Packages"
import { Slides } from "./Slider"
import { Modules } from "./Modules"
import { Button } from "./Button"


export const MainContent = () => 
{
  return(
    <main className="main">
      <Layout style={{background: "#fafafa", margin: "auto 0"}}>
        <Header/>
        <Packages/>
        <Slides/>
        <Modules/>
        <Button/>
      </Layout>
    </main>
  
  )
}
