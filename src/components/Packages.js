import React from "react"
import { CheckOutlined } from "@ant-design/icons"


export const Packages = () => 
{
  return(
   <section className="package">
     <p className="text">
       Select your preferred package below
     </p>
     <div className="pkg-container">

        <div className="pkg-premium">

          <h6 style={{color: "#ffca00", fontWeight: 700, fontSize: "1.3rem"}}>Starts From</h6>
          <h6 style={{fontWeight: 700, fontSize: "1rem", lineHeight: "3px", color: "#908f90"}}>NGN</h6>
          <h4 style ={{ fontWeight: 700, color: "#222021", fontSize: "1.5rem"}}
          >5,999,999.99</h4>
          <h6 style={{fontWeight: 700, fontSize: "1rem", lineHeight: "3px", color: "#908f90"}}>per annum</h6>

          <h3 style={{ marginTop: "3.5rem", fontWeight: 700,color: "#222021"}}>Premium</h3>
          <p className="premium-users">
            100 users
            <span>.</span>
            All Modules
          </p>
        </div>

        <div className="plan-basic">
          <CheckOutlined style={{ color: "#fafafa"}} className="plan-basic-selected"/>
          <h3 className="plan-basic-title">Basic</h3>
          <h6>
            <b>30 days trails</b> on our premium app features and
            features
          </h6>
          <h5>
            <span>INCLUDES</span>
          </h5>
          <p> - 25 Users </p>
          <p> - All modules & features </p>
          <p> - Unlimited commitees </p>
          <p> - Unlimited roles creation </p>
        </div>
      </div>
   </section>
  )
}

