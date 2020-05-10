import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='landing-main'>
        <h1 class='logo'>IEEE SSIT - VIT</h1>
        <div className='lead leadp'>
          Online quiz.
        </div>

        <div className='buttons'>
          <Link to='/register'><button className='login' ><div className='def-txt'>Sign Up</div></button></Link>
          <Link to='/login'><button className='login'><div className='def-txt'>Login</div></button></Link>
        </div>
        
      </div>
    <div class="footer">
        <h1>&copy;<a href = 'https://abhinavgor.netlify.app/'>Abhinav Gorantla</a> 2020.</h1>
    </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
