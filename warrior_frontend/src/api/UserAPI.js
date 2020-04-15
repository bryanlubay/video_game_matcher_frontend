const URL = "http://localhost:8000/"

const fetchUserToken = async (loginCredentials) => {
  let res = await fetch('http://localhost:8000/auth/token/login', {
    method : 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(loginCredentials)
  })
  let data = await res.json()
  return data
}

const fetchAllProfiles = async () => {
  let response = await fetch(`${URL}profile/list`);
  let data = await response.json();
  return data
}

const createNewUser = async (userObj) => {
  let res = await fetch('http://localhost:8000/auth/users/', {
    method : 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(userObj)
  })
  let data = await res.json()
  return data
}

const linkUserToProfile = async (userID) => {
  let res = await fetch(`http://localhost:8000/profile/${userID}/link/`)
  let data = await res.json()
  console.log(data)
}

const fetchCurrentUser = async () => {
  let res = await fetch('http://localhost:8000/auth/current_user/', {
  method : 'GET',
  headers : {
    'Accept' : 'application/json',
    'content-type' : 'application/json',
    'Authorization' : `token ${localStorage.getItem('token')}`
  }
})
  let data = await res.json()
  return data
}

const fetchProfileDetails = async (userId) => {
  let res = await fetch(`http://localhost:8000/profile/${userId}/details/`)
  let data = await res.json()
  return data
}

export default {
  fetchUserToken,
  createNewUser,
  fetchAllProfiles,
  linkUserToProfile,
  fetchCurrentUser,
  fetchProfileDetails,
}