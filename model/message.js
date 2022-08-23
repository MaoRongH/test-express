const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./db");

const Message = sequelize.define(
  "message",
  {
    // 在这里定义模型属性(字段)
    id: {
      type: Sequelize.INTEGER(11), // 数据类型
      primaryKey: true, // 主键
      allowNull: false, // k允许为空 设置列的 allowNull为 false 将会为该列增加 非空 属性
      unique: true, // unique: 'compositeIndex', unique: true
      autoIncrement: true         // 自动递增
    },
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.TEXT
    },
    channel: {
        type: Sequelize.INTEGER(11)
    },
    createdAt : {
        type: Sequelize.DATE
    }
  }

);

// 同步模型
Message.sync();

// 定义表之间的关联
// User.associate = function () {};

module.exports = Message;
