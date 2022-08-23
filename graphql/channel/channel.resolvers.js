const { or } = require("sequelize");
const Channel = require("../../model/channel");
const Message = require("../../model/message");

module.exports = {
  Query: {
    async GetChannel(root, { id,name,page,limit,message_page,message_limit,order,order_type }, ctx) {
      var where = {}
      if (id !== undefined) {
        where.id = id
      }
      if (name !== undefined) {
        where.name = name
      }
      if (page === undefined) {
        page = 1
      }
      if (limit === undefined) {
        limit = 20
      }
      if (message_page === undefined) {
        message_page = 1
      }
      if (message_limit === undefined) {
        message_limit = 20
      }

      if (order === undefined) {
        order = "createdAt"
      }

      if (order_type === undefined) {
        order_type = "desc"
      }

      try {
      
        let channel = await Channel.findAndCountAll({
          where: where,
          limit: limit,
          page:page
        });

        let ret = [];
        for (i=0;i<channel.rows.length;i++) {
          let c = channel.rows[i].toJSON()
          let channle_id = c.id
          let m = await Message.findAndCountAll({
            where: {channel:channle_id},
            limit: message_limit,
            page:message_page,
            order: [[order,order_type]]
          });
    
          console.log(m,123213,c);
          ret.push({channel:c,message:{data:m.rows,page:message_page,count:m.count}})
        }

        return {
          code: 1,
          msg: 'success',
          data: ret,
          count: channel.count,
          page: page
        };
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  },

  Mutation: {
    async CreateChannel(root, { name }, ctx) {
      try {
        let res = await Channel.create({name:name});
        return {
          code: 1,
          msg: "ok",
          data: res.toJSON()
        };
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  }
};
