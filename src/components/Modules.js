import React from "react"
import { ExclamationCircleOutlined } from "@ant-design/icons"

import Govt from './images/icons/governance-portal.png';
import Corporate from './images/icons/corporate-universe.png';
import Contract from './images/icons/contract-domain.png';
import Investor from './images/icons/investor-relations.png';
import Dispute from './images/icons/dispute-portfolio.png';
import Minute from './images/icons/minute-book.png';
import Report from './images/icons/reporting-tool.png';
import Attendance from './images/icons/attendance-register.png';



export const Modules = () =>
{
  
  return(
    <section className="modules">
      <div className="modules-head">
        <hr />
        <h3>ALL MODULES</h3>
        <hr />
      </div>
      <div className="modules-content">
        <div className="modules-item active">
          <img src={Govt} alt="Governance Portal" />
          <p>
            Governance <span>Portal</span>
          </p>
          <ExclamationCircleOutlined style={{ color: "#ffca00"}} className="priority" />
        </div>
        <div className="modules-item">
          <img src={Corporate} alt="Corporate Universe" />
          <p>
            Corporate <span> Universe </span>
          </p>
        </div>
        <div className="modules-item">
          <img src={Contract} alt="Contract Domain" />
          <p>
            Contract <span>Domain</span>
          </p>
        </div>
        <div className="modules-item">
          <img src={Investor} alt="Investor Relations" />
          <p>
            Investor <span>Relations</span>
          </p>
        </div>
        <div className="modules-item">
          <img src={Dispute} alt="Dispute Portfolio" />
          <p>
            Dispute <span>Portfolio</span>
          </p>
        </div>
        <div className="modules-item">
          <img src={Minute} alt="Minute Book" />
          <p>
            Minute <span>Book</span>
          </p>
        </div>
        <div className="modules-item">
          <img src={Report} alt="Reporting Tool" />
          <p>
            Reporting <span>Tool</span>
          </p>
        </div>
        <div className="modules-item">
          <img src={Attendance} alt="Attendance Register" />
          <p>
            Attendance<span>Register</span>
          </p>
        </div>
      </div>
    </section>
  )
}