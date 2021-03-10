import React from "react"

export const Header = () => 
{
  return(
    <header className="header">
      <div className="header-info">
        <h4 className="header-info-name"> HEY, TERRY</h4>
        <h2 className="header-info-text">
          Start your <em> 30 days </em> free Trial
        </h2>
      </div>

      <div className="header-balance">
        <h5 className="header-balance-sign">NGN</h5>
        <h2 className="header-balance-price">1,999,999</h2>
        <p className="header-balance-footer">
          Total
          <span> (EXCLUDES VAT)</span>
        </p>
      </div>
    </header>
  )
}


