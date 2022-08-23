const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./db");

const Channel = sequelize.define(
  "channel",
  {
    // 在这里定义模型属性(字段)
    id: {
      type: Sequelize.INTEGER(11), // 数据类型
      primaryKey: true, // 主键
      allowNull: false, // k允许为空 设置列的 allowNull为 false 将会为该列增加 非空 属性
      unique: true, // unique: 'compositeIndex', unique: true
      autoIncrement: true         // 自动递增
    },
    // 在模型中的名字是小驼峰,在表中的列名可以用 field 属性来指定
    name: {
      type: DataTypes.STRING
    },
  },
  {
    indexes: [
        {
            unique: true,
            fields: ['name']
        }
    ]
  }
);

// 同步模型
Channel.sync();

// 定义表之间的关联
// User.associate = function () {};

module.exports = Channel;
