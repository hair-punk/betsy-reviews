import React, {Component} from 'react';
import CommentInput from './CommentInput.jsx';
import CommentList from './CommentList.jsx';

class CommentApp extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {  }
  // }
  render() {
    return (
      //className for css
      <div className='wrapper'>
        <CommentList/>
      </div>
     )
  }
}

export default CommentApp;