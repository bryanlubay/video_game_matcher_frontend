import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Profile.css';

function Profile(props) {
  const user = props.userProfileInfo.user

  useEffect(()=> {
    props.fetchUserProfileInfo()
  },[])
  console.log('this is a user: ', user)
  return (
    <div className='container'>
      {
        localStorage.getItem('isAuthenticated') == 'true'
        ?
          <div className='profile-parent'>
            
            <div className='profile-img'>
              <img src='https://via.placeholder.com/150' />
              {
                user !== undefined
                ?
                  <h3> {user['first_name']}</h3>
                :
                  null
              }
            </div>

            <div className='profile-info'>
              <div>
              {
                user !== undefined
                ?
                  <h3> {user['username']}</h3>
                :
                  null
              }
                <div>
                  <h4 className='info-inline'>Casual or Competitive: </h4>
                  <p className='info-inline'>{props.userProfileInfo.casual_competitive}</p>
                </div>
                <div>
                  <h4 className='info-inline'> Platforms:</h4>
                  <p className='info-inline'>{props.userProfileInfo.platform}</p>
                </div>
                <div>
                  <h4 className='info-inline'> Game(s):</h4> 
                  <p className='info-inline'>{props.userProfileInfo.game}</p>
                </div>
              </div>

              <div>
                {
                  user !== undefined
                  ?
                    <Link to = {`/profile/${user.id}/edit`}> <Button>Edit</Button></Link>
                  :
                    null
                }
                <button> Add Friend</button>
                <button> Delete Friend</button>
                <br />
                <button> Chat</button>
              </div>
            </div>

          </div> 
        :
         <Redirect to = '/' />
      }
    </div>
  )
}

export default Profile
