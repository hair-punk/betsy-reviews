import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './ReviewList.jsx';
// import More from './More.jsx';
import axios from 'axios';

const host = location.hostname || 'localhost';

const allItemsStyle = {
  fontFamily: "Graphik Webfont,-apple-system,BlinkMacSystemFont,Roboto,Droid Sans,Segoe UI,Helvetica,Arial,sans-serif"
};

const jnz_title_style = {
  color: '#212121',
  paddingLeft: '36px',
  textAlign: 'left',
  paddingTop: '30px',
  fontSize: '20px',
  fontWeight: 'bold'
};

const jnz_reviews_star_style = {
  marginLeft: 10
}
const jnz_reviews_num = {
  marginLeft: 6
}
const jnz_reviews_container = {
    fontSize: '14px',
    color: '#212121',
    textAlign: 'left',
    maxWidth: '1272px',
    minWidth: '972px',
    paddingLeft: '36px',
    paddingRight: '36px',
    justifyContent: 'space-around',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    paddingInlineStart: '40px'
  }
const jnz_readAll_style = {
  color: '#FFF',
  textDecoration: 'none',
  backgroundColor: '#222222',
  borderRadius: 3,
  borderStyle: 'solid',
  borderWidth: 1,
  display: 'inline - block',
  fontFamily: 'inherit',
  fontSize: 14,
  fontWeight: 'bold',
  height: 38,
  lineHeight: 1.4,
  padding: '8 12',
  textAlign: 'center',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  webkitTapHighlightColor: 'transparent',
  webkitAppearance: 'none'
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otherItems: []
    }
  }

  componentDidMount() {
    this.fetchItems();
  }

  clickItem() {
    this.fetchItems();
  }

fetchItems(next) {
  axios.get('http://localhost:3005/items')
    .then((res) => {
      this.setState({
        otherItems: res.data
      });
      if (next) {
        next();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

  render() {
    return (
      <div style={allItemsStyle}>
        <div id="reviews">
          <span className="jnz-title" style={jnz_title_style}>Reviews</span>
          <span className="jnz-title" style={jnz_reviews_star_style}>★★★★☆</span>
          <span style={jnz_reviews_num}>(1,371)</span>
        </div>
        <div className="jnz-reviews-container" style={jnz_reviews_container}>
          <ReviewList items={this.state.otherItems} handleClick={this.clickItem.bind(this)}/>
          <div className="jnz-more" >
            <button className="jnz-add16More">+ More</button>
          </div>
          <div className="jnz-readAll">
            <button className="jnz-readAllReviews" style={jnz_readAll_style}>Read All Reviews</button>
          </div>
          <div className="jnz-reviewPics">
            Photos from reviews
            ReviewList.map.pics
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App/> , document.getElementById('jnz-app'));