module.exports = {
  environment:"development",
  database:{
    dbName:'zyc',
    host:"localhost",
    port:3306,
    user:'root',
    password:"admin"
},
  security:{
    secretKey:"abcdefg",
    expiresIn:60*60*24*30//过期时间为1个月
},
}