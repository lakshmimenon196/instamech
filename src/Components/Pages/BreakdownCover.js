import React, { Component } from 'react';
class BreakdownCover extends Component {
  render() {
    return (
    <div className="breakDown">
        <div className="inlineDivLeft">
           <div className="Standard">
             <div className="HeadingText">Standard </div>
             <div className="SubtitleText">From Rs. 500/-</div>
           </div>
           <div className="PlanDetails">
           <p> Up to Rs. 10,000/- roadside assistance anywhere in Kerala</p>
           <hr/>
            <p>  We’ll pay up to Rs.1500/- garage labour costs</p>
            <hr/>
            <p>  Up to Rs.2000/- accommodation expenses or up to Rs.2000/- to continue your journey</p>
            <hr/>
            <p>  Up to Rs.3000 or the market value if lower, to get your vehicle back to your home location, providing your vehicle is not beyond economical repair</p>
           </div>
        </div>
        <div className="inlineDivRight">
          <div className="Premium">
              <div className="HeadingText">Premium</div>
              <div className="SubtitleText">From Rs. 1500/-</div>
          </div>
          <div className="PlanDetails">
                 <p>Unlimited roadside assistance anywhere in Kerala</p>
                 <hr/>
                <p>We’ll pay up to Rs.3000/- garage labour costs</p>
                <hr/>
                <p>Up to Rs.4000/- accommodation expenses or up to Rs.4000/- to continue your journey</p>
                <hr/>
                <p>We’ll pay up to the market value of your vehicle to get it back to the home location,
                providing your vehicle is not beyond economical repair</p>
                <hr/>
                <p>Pickup and drop to location of your choice for the entire time vehicle is under repair</p>
            </div>
           </div>
    </div>
    );
  }
}

export default BreakdownCover;
