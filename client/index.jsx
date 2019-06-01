import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './ReviewList.jsx';
// import More from './More.jsx';
import axios from 'axios';

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
      <div id="reviews">
        <h1 className="jnz-title">Reviews</h1>
        <ReviewList items={this.state.otherItems} handleClick={this.clickItem.bind(this)}/>
        <div className="jnz-more">
          <button className="jnz-add16More">+ More</button>
        </div>
        <div className="jnz-readAll">
          <button className="jnz-readAllReviews">Read All Reviews
          + (this.list.length)}</button>
        </div>
         <div className="jnz-reviewPics">
           Photos from reviews
           ReviewList.map.pics
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App/> , document.getElementById('jnz-app'));