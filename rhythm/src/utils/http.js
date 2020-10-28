import axios from 'axios';
const mainUrl = '';
const http = {};
http.get = (url) => {
    return new Promise((resolve, reject) => {
        // axios.defaults.headers.common['token'] = localStorage.getItem('token');
        axios({
            method: 'get',
            url: mainUrl + url,
        }).then((res) => {
            resSuccess(resolve, reject, res)
        }).catch(function (error) {
            reject(error)
        })
    })
};
http.post = (url, data) => {
    return new Promise((resolve, reject) => {
        // axios.defaults.headers.common['token'] = localStorage.getItem('token');
        axios({
            method: 'post',
            url: mainUrl + url,
            data: data
        }).then((res) => {
            resSuccess(resolve, reject, res)
        }).catch((error) => {
            reject(error)
        })
    })
};
function resSuccess(resolve, reject, res) {
    let datas = res.data
    if (datas.errorCode === 0) {
        resolve(datas);
    } else {
        // message.error(datas.msg)
        reject(datas);
    }
}
export default http;

// componentDidMount(){
//     let result = http.post('http://49.235.115.228/userInfo/register',{
//         "idcard": "123456789",
//         "password": "qwer",
//         "phoneid": "18637566291",
//         "photoaddress": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1783902704,643624260&fm=26&gp=0.jpg",
//         "realname": "思琦",
//         "replynewpassword": "qwer",
//         "status": "0",
//         "username": "siqi"
//       })
//       .then((res)=>{
//         console.log('结果',res);
//     }).catch(() => {
//         console.log('失败')
//     })
//     console.log(result);
// }