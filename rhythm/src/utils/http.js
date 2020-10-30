import axios from 'axios'

const get = (url,params) => {
  return new Promise((resolve, reject) => {
    axios(url, {            
      params: params        
    })     
    .then(res => {
      resolve(res)
    })
    .then(err => {
      reject(err)
    })
  })
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
  post
}