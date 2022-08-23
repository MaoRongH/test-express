const { Sequelize } = require("sequelize");
// 创建实例对象并连接数据库
const db = new Sequelize('express','root','root',{
	dialect:'mysql',  // 数据库类型，支持: 'mysql', 'sqlite', 'postgres', 'mssql'
	host:'172.19.112.1', // 自定义连接地址,可以是ip或者域名,默认为本机:localhost
	port:'3308',      // 端口号,默认为3306
	logging:true,     // 是否开启日志(建议开启,有利于我们查看进行的操作)
	pool:{            // 连接池
        	min:0,
        	max:5,
        	idle:30000,    //空闲最长连接时间
        	acquire:60000, //建立连接最长时间
	},
 	define: { // 统一定义表内的一些属性
        	timestamps: false, // 取消默认字段 createAt, updateAt
        	freezeTableName: false, // 允许给表设置别名
        	underscored: false, // 字段以下划线（_）来分割（默认是驼峰命名风格）
            charset: 'utf8mb4'
    	},
	dialectOptions: {
      		dateStrings: true, // 正确显示时间 否则查出来的时间格式为 2019-08-27T12:02:05.000Z
      		typeCast: true
    	},
	timezone: "+08:00" // 改为标准时区

})
module.exports = db;