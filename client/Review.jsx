import React from 'react';
var moment = require('moment');
// moment().format();

var Review = (props) => (
  <div className="jnz-review">
    {/* 1 Should Add className into Each one*/}
    <img src="https://i.etsystatic.com/iusa/a373a4/65302497/iusa_400x400.65302497_s2jd.jpg" className="jnz-image"/>
    {/* 2 */}
    <a  href="">username</a>
    {/* 3 */}
    <div className="reviewDate">{moment().format("MMM Do YY")}</div>
    {/* 4 */}
    <div>Stars</div>
    {/* 5 */}
    <div className = "jnz-content">'The best for ever!'</div>
    {/* 6 */}
    <img src = "https://i.etsystatic.com/iap/7187ce/1902303181/iap_300x300.1902303181_8ipz4uaw.jpg?version=0" className = "jnz-buyerImage" />
    {/* 7 */}
    <a href="https://www.etsy.com/listing/172974806/dinosaur-crayons-natural-crayons?ref=reviews">
    <img src="https://i.etsystatic.com/5761006/r/il/0c2f6a/1431938153/il_794xN.1431938153_ka09.jpg"
    className = "jnz-reviewImage" />
    </a>
    <a href="https://www.etsy.com/listing/172974806/dinosaur-crayons-natural-crayons?ref=reviews">Dinosaur CRAYONS - Natural Crayons - Dinosaur Gift - Dinosa…</a>

  </div>
)

export default Review;