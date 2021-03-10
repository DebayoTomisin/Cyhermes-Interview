import React from "react"

export const Header = () => 
{
  return(
    <header className="header">
      <div className="info">
        <h4> HEY, TERRY</h4>
        <h2>
          Start your <em> 30 days </em> free Trial
        </h2>
      </div>

      <div className="balance">
        <h5 className="balance-sign">NGN</h5>
        <h2 className="balance-price">1,999,999</h2>
        <p className="balance-footer">
          Total
          <span> (EXCLUDES VAT)</span>
        </p>
      </div>
    </header>
  )
}

