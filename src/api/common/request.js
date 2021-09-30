import axios from 'axios'
import ErrorMsg from '@/common/errorMsg'
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000 // request timeout
})

 
// 开始请求设置（请求我们不做处理，如果有特殊需求，可在此统一处理），发起拦截处理
//axios.interceptors.request.use((config) => {
  // 得到参数中的requestname字段，用于决定下次发起请求，取消相应的  相同字段的请求
  // post和get请求方式的不同，使用三目运算处理
  //let tokenParams = {};
  //tokenParams = (config.params || config.data) ? (config.params || config.data) : {};
  //var paramsStr=JSON.stringify(tokenParams)
 // let paramsStrMD5=MD5(paramsStr)
  // 判断，如果这里拿到上一次的requestName，就取消上一次的请求
  // if (requestName) {
  //   if (axios[requestName] && axios[requestName].cancel) {
  //     axios[requestName].cancel();
  //   }
  //   config.cancelToken = new CancelToken((c) => {
  //     axios[requestName] = {};
  //     axios[requestName].cancel = c;
  //   });
  // }
  //const currentLocation = location.toString();
  //const urlPars = urlparse(currentLocation, true);
  // 截取参数#以后的数据
 // const route = urlPars.hash.substring(1);
 // config.headers.currentRoute = route;
  //token用来避免重复提交，这里的业务背景是增删改查数据时的重复提交问题，
//与后端协商用请求头的token(自定义的变量名称)，来辨别，如果当前请求存在，
//后端将给出一个'不可重复提交'的异常信息。
  //config.headers.token=paramsStrMD5;
  // console.log('config', config);
  //return config;
// }, (error) => {
//   return Promise.reject(error);
// });
 
 
// respone拦截器 我们主要拦截异常，对异常信息统一处理
service.interceptors.response.use(
  (response) => {
    console.log(888)
    return response;
  },
  (error) => {
    // 异常信息统一处理1）,直接给出异常提示
    // const errMsg = ErrorMsg(error.response);
    // Message.show({
    //   type: 'error',
    //   title: '错误信息',
    //   closeable: true,
    //   duration: 0,
    //   content: errMsg,
    // });
       //异常处理2）调用统一异常函数
    ErrorMsg(error.response);
    return Promise.reject(error);
  }
)
export default service
  


