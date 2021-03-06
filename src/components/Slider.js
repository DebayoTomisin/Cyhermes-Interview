import React from "react"
import { Slider } from "antd"

export const Slides = () => {
  return(
    <section className="addusers">
      <div className="addusers-header">
        <h4>Add more users</h4>
        <p>
          <b>NGN99,999</b> per user
        </p>
      </div>

      <div className="slider">
        <div className="slider-header">
          <p className="min">0</p>
          <p className="max"> &gt;1000 </p>
        </div>
        <Slider
          defaultValue={100}
          tooltipVisible={true}
          min={0}
          max={1000}
          style={{
            padding: "1rem 0",
            marginLeft: 0,
            marginRight: 0,
            color:"#052261"
          }} 
        />
      </div>
    </section>
  )
}