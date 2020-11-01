import axios from 'axios'

const get = (url) => {
  return new Promise((resolve, reject) => {
    axios(url     
    )     
    .then(res => {
      resolve(res)
    })
    .then(err => {
      reject(err)
    })
  })
}

const put = (url) => {
  return new Promise((resolve, reject) => {
    axios.put(url)
  .then(res => {
      resolve(res);
  })
  .catch(err =>{
      reject(err)
  })
});
}

const post = (url, params) => {
    return new Promise((resolve, reject) => {
      axios.post(url, JSON.stringify(params))
    .then(res => {
        resolve(res);
    })
    .catch(err =>{
        reject(err)
    })
  });
}


  
export {
  get,
  put,
  post
}