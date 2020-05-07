import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';
import { addPost } from '../../actions/post';

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const [ans1, setText] = useState('');
  const [ans2, setText2] = useState('');
  const [ans3, setText3] = useState('');
  const [ans4, setText4] = useState('');
  // var score = 0;

  // function check(answer, key){
  //   if (key === answer){
  //     document.getElementById(answer).innerHTML = 'Correct';
  //     // document.getElementById('posts').style.visibility = "none";
  //     score++;
  //   }
  // }
    let s1 = 0;
    let s2 = 0;
    let s3  = 0;
    let s4 = 0;
  
  let score = s1 + s2 + s3 + s4;

  function checkall(q1,q2,q3,q4){
    const a1 = '3';
    const a2 = 'india';
    const a3='spelling';
    const a4 = 'No';
    if (q1 === a1){
      document.getElementById(a1).innerHTML = 'Correct';
      // document.getElementById('posts').style.visibility = "none";
      const s1 = 1;
    }
    else{
      document.getElementById(a1).innerHTML = 'Wrong';
    }
    if (q2 === a2){
      document.getElementById(a2).innerHTML = 'Correct';
      // document.getElementById('posts').style.visibility = "none";
      const s2=1;
    }else{
      document.getElementById(a2).innerHTML = 'Wrong';
    }
    if (q3 === a3){
      document.getElementById(a3).innerHTML = 'Correct';
      // document.getElementById('posts').style.visibility = "none";
      const s3=1;
    }else{
      document.getElementById(a3).innerHTML = 'Wrong';
    }
    if (q4 === a4){
      document.getElementById(a4).innerHTML = 'Correct';
      // document.getElementById('posts').style.visibility = "none";
      s4 = 1;
    }else{
      document.getElementById(a4).innerHTML = 'Wrong';
    }

    return score;
  }

  return (
    <Fragment>
      {/* <PostForm /> */}
      <div className="posts" id='posts'>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
      <div className='post-form'>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addPost({ ans4 });
          setText4('');
          checkall(ans1, ans2, ans3, ans4);
        }}
      >
         <div className='bg-primary p'>
          <h3>Question 1</h3>
        </div>
        <h1>What is 1+2?</h1>
        <div id='3'><input
          id='ans1'
          name='text'
          cols='30'
          rows='5'
          placeholder='Answer'
          value={ans1}
          onChange={e => setText(e.target.value)}
          
        /><br /></div>
        <div className='bg-primary p'>
          <h3>Question 2</h3>
        </div>
        <h1>New Delhi is capital of ______?</h1>
        <div id='india'><input
          name='text'
          cols='30'
          rows='5'
          placeholder='Answer'
          value={ans2}
          onChange={e => setText2(e.target.value)}
          
        /><br /></div>
        <div className='bg-primary p'>
          <h3>Question 3</h3>
        </div>
        <h1>Waht is the speeling of speling?</h1>
        <div id='spelling'><input
          name='text'
          cols='30'
          rows='5'
          placeholder='Answer'
          value={ans3}
          onChange={e => setText3(e.target.value)}
          
        /><br /></div>
        <div className='bg-primary p'>
          <h3>Question 4</h3>
        </div>
        <h1>Am I creepy?</h1>
        <div id='No'><input
          name='text'
          cols='30'
          rows='5'
          placeholder='Answer'
          value={ans4}
          onChange={e => setText4(e.target.value)}
          
        /><br />
        <input type='submit' className='btn btn-dark my-1' value='Submit'/></div>
      </form>
      
      <div id='ans'>{score}</div>
    </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
