import React from 'react';
var moment = require('moment');

const jnz_profile_style = {
  width: 50,
  height: 50,
  borderWidth: 1,
  backgroundColor: '#E1E3DF',
  borderColor: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 25,
  overflow: 'hidden',
  display: 'inline-block'
}
const jnz_review_style = {
  marginTop: 0,
  color: '#222 !important',
  verticalAlign: 'top',
  display: 'inline-block'
}
const jnz_reviewInfo_style = {
  display: 'inline-block'
}
const jnz_reviewName_style = {
  textDecoration: 'underline',
  marginRight: 6,
  display: 'inline-block'
}
const jnz_reviewTime_style = {
  marginLeft: 6,
  display: 'inline-block'
}

const jnz_reviewStar_style = {
  listStyle: 'none',
  marginTop: 10,
  marginBottom: 0,
  verticalAlign: 'bottom',
}
const jnz_content_style = {
  margin: '0, 0, 12',
  paddingLeft: 84,
  fontSize: 14,
  lineHeight: 1.71429,
  color: '#222'
}
// const jnz_uploadedPic_style= {
//     display: 'block',
//     margin: 0,
//     padding: 0,
//     border: 0,
//     width: 300,
//     height: 300

// }

const jnz_productUrl_style = {
  display: 'inline-block',
}
const jnz_productPic_style = {
  display: 'inline-block',
  backgroundColor: '#92877C',
  borderColor: 'rgba(0, 0, 0, 0.05)',
 boxSizing: 'border-box',
  margin: 84,
  padding: 0,
  border: 0,
  width: 50,
  height: 50
}

// const jnz_url_style = {
//   display: 'inline-block',
//   verticalAlign: 'middle'
// }
const jnz_proUrl_style = {
  display: 'inline-block',
  marginTop: 100,
  verticalAlign: 'top'
}
var Item = ({item}) => (
  <div className="jnz-item">
    <img src={item.userProfile} className="jnz-profile" roundAsCircle={true} style={jnz_profile_style}/>
    <ul style={jnz_review_style}>
      <li className = "jnz-reviewInfo" style={jnz_reviewInfo_style}>
        <span className="jnz-itemTitle" style={jnz_reviewName_style}>{item.username}</span>
        <span className = "jnz-reviewDate" style={jnz_reviewTime_style}>{moment(item.reviewDate.slice(0, 10)).format("MMM Do YY")}</span>
      </li>
      <li className="jnz-stars" style={jnz_reviewStar_style}>{item.stars}</li>
    </ul>
    <div className="jnz-content" style={jnz_content_style}>{item.content}</div>
    {/* <img className="jnz-upload" src={item.uploadPics}  style={jnz_uploadedPic_style}/> */}
    <div style={jnz_productUrl_style}>
      <a href="">
        <img src={item.imageUrl} className="jnz-image" style={jnz_productPic_style}/>
      </a>
      <a className="jnz-proUrl" href="" style={jnz_proUrl_style}>{item.productURL}</a>
    </div>
  </div>
)

export default Item;