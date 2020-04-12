const bcrypt = require('bcryptjs')
const {
  sequelize
} = require('../../core/db')

const {
  Sequelize,
  Model
} = require('sequelize')
class User extends Model { //用于放入关于User的逻辑}
  User.init({
    id: { //主键不能为空
      //自动增长 最好不用字符串做主键 性能问题.
      type: Sequelize.INTEGER,
      primaryKey: true, //设置主键 关系型数据库中重要的概念
      autoIncrement: true, //自动增长
    },
    nickname: Sequelize.STRING,
    email: Sequelize.STRING,
    password: {
      type: Sequelize.STRING,
      set(val) {
        //  加密
        const salt = bcrypt.genSaltSync(10) //10 指生成这个盐的成本
        const psw = bcrypt.hashSync(val, salt)
        this.setDataValue('password', psw)
      }
    },
  },{
    sequelize,
    tableName:"user"
  })
  module.exports = {
    User
  }