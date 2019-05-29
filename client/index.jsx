import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './ReviewList.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    currentReview: null
    }
  }

  componentDidMount() {
    //Get 4 reviews from database.need to fix reviews
      axios.get('http://localhost:3004/reviews')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1 className="jnz-title">Reviews</h1>
        <ReviewList />
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

ReactDOM.render(<App />, document.getElementById('jnz-app'));