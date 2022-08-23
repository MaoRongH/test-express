const Message = require("../../model/message");
var moment = require("moment");

module.exports = {
  Mutation: {
    async CreateMessage(root, { message }, ctx) {
      try {
        var {title,content,channel} = message
        var time = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
        message.createdAt= time;

        let res = await Message.create(message);
    
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
