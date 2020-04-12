const { HttpException } = require('lin-mizar')
class testException extends HttpException{
  constructor(msg,code,errorCode){
    super()
    this.msg = msg ||"测试错误"
    this.code = code||400
    this.errorCode = errorCode||10000
  }
}
class Forbbiden extends HttpException{
  constructor(msg,code,errorCode){
    super()
    this.msg = msg||"禁止进入",
    this.code = code||403
    this.errorCode = errorCode||10001
  }
}
module.exports = {
  testException,
  Forbbiden
}