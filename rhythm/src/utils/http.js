import axios from 'axios'

axios.defaults.timeout = 5000

//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json;charset=utf-8',
      'token': localStorage.getItem('token') // 获取token缓存
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
);

export default {
  /**
   * 封装get方法
   * @param url
   * @param data
   * @returns {Promise}
   */
  get: function (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  /**
   * 封装post请求
   * @param url
   * @param data
   * @returns {Promise}
   */
  post: function (url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(response => {
          resolve(response.data)
        }, err => {
          reject(err)
        })
    })
  },
  ajaxpost(url,data){
    let ajax=new XMLHttpRequest()
    ajax.open('POST',url,true)
    ajax.setRequestHeader("Content-type","application/json; charset=utf-8")
    ajax.send(data)
    console.log(1);
    ajax.addEventListener('load',function(res){
     console.log(2);
      let result=JSON.parse(res.currentTarget.response)
     
      return result
    })
  }
}

  
