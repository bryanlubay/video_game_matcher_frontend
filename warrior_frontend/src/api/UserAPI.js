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

export default {
  fetchUserToken,
  createNewUser,
}