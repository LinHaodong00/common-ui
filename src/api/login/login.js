 import service from  '@/api/common/request'

function doLogin(account, password) {
    return service({
       url: '/user/login/doLogin',
       method: 'GET',
       timeout: 15000,
       params: {
        account: account,
        password: password
     }})
     
}

export  {
  doLogin
}