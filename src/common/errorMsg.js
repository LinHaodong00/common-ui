// import { Message } from '@alifd/next';
 
 
/**
 * 异常信息统一处理，包括axios请求，以及databinder方式请求
 * errorResponse，请求错误的error.response
 */
 
const ErrorMsg = (errorResponse) => {
//errorResponse来自ErrorMsg(error.response)
   let msgTitle='错误信息';
   let visible=true;
  // 异常统一处理（包括后台校验不通过的，权限不足访问的）
  // 初始化异常信息 提取异常信息
  let errMsg = '';
  if (typeof errorResponse !== 'undefined' && typeof errorResponse.data !== 'undefined' && errorResponse.data) {
    const errordata = errorResponse.data;
    // 异常状态码
    const errorCode = errordata.code;
    if (typeof errorCode !== 'undefined' && errorCode) {
      //  储存校验异常信息有个地方 一个是actionErrorList 一个是fieldErrorMap
      // 状态码为403 说明是校验异常
      // 循环获取actionErrorList中的异常信息
      if (errorCode === 403) {
        visible=true;
        // 获取自定义校验异常信息
        const actErrors = errordata.errorMsg.actionErrorList;
        if (typeof actErrors !== 'undefined' && actErrors && actErrors.length > 0) {
 
          for (let i = 0; i < actErrors.length; i++) {
            errMsg += actErrors[i];
            errMsg += '  ';
          }
        }
        // 循环获取actionErrorList中的异常信息（一般是表单校验）
        const fieldErrorMap = errordata.errorMsg.fieldErrorMap;
        if (typeof fieldErrorMap !== 'undefined' && fieldErrorMap) {
          for (const fielerr in fieldErrorMap) {
            // errMsg += fielerr;
            // errMsg += ':';
            errMsg += fieldErrorMap[fielerr];
            errMsg += '     ';
          }
        }
      } else if (errorCode === 302) {
        //用户未登录
        visible=true;
        msgTitle='';
        errMsg += errordata.errorMsg;
        const toUrl = `${window.baseUrl2}`;
        //定位到登录页面
        location.href = `${toUrl}user/login`;
      } else if (errorCode === 203) {
        // 用户没有访问页面的权限
        visible=false;
        // errMsg += errordata.errorMsg;
        const toUrl = `${window.baseUrl2}`;
        const currentUrl = location.toString();
        if (currentUrl !== `${toUrl}exception/203`) {
          location.href = `${toUrl}exception/203`;
        }
      } else if (errorCode === 204) {
        visible=false;
        // 用户请求接口的权限
        // errMsg='无查询权限';
        // msgTitle='';
      console.log('用户请求无权限，异常为：',errorResponse)
      }
    }
  }
  if (errMsg === '' || !errMsg) {
  // 包含：接口500异常提示信息处理
    console.log('此时errorMsg为空', errorResponse);
    errMsg = '系统异常，请稍后再试';
  }
  // 显示出错误信息
  if(visible||errorResponse==='undefined'||errorResponse.data===null){
    console.log('type:error_'+'title:' + msgTitle+'_'+'content:'+errMsg)
    // Message.show({
    //   type: 'error',
    //   title: msgTitle,
    //   closeable: true,
    //   duration: 0,
    //   content: errMsg,
    // });
   }
};
 
export default ErrorMsg;