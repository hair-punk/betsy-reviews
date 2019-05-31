import React from 'react';
var moment = require('moment');

var Item = ({item}) => (
  <div className="jnz-item">
    <img src={item.userProfile} className="jnz-profile"/>
    <span className="jnz-itemTitle">{item.username}</span>
    {/* {moment().format("MMM Do YY")} */}
    {/* <span className="jnz-reviewDate">{.format("MMM Do YY")}</span> */}
    <span className = "jnz-reviewDate">{moment(item.reviewDate.slice(0, 10)).format("MMM Do YY")}</span>
    <div className="jnz-stars">{item.stars}</div>
    <div className="jnz-content">{item.content}</div>
    <img src={item.uploadPics} className="jnz-upload"/>

    <a href="">
      <img src={item.imageUrl} className="jnz-image"/>
    </a>
    <a className="jnz-proUrl" href="">{item.productURL}</a>

  </div>
)

export default Item;