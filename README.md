# test-express
test-express
1. 启动项目 docker-composer up -d
2. 
```
# 查看数据库被限制了索引的大小
SHOW variables like 'innodb_large_prefix'

# 解除限制
SET GLOBAL INNODB_LARGE_PREFIX = ON;
 

# 查看当前的innodb_file_format引擎格式类型
SHOW variables like 'innodb_file_format'

# 修改
SET GLOBAL innodb_file_format = BARRACUDA;

ALTER TABLE channels row_format = dynamic;
ALTER TABLE channels row_format = compressed

```

3. 查询所有channel 和下面的 message
```
id,name,page,limit,message_page,message_limit,order(createdAt),order_type(desc) 这些参数可选，page，limit 默认 1，20 
{
  GetChannel {
    code
    msg
    data {
      channel {
        id
        name
      }
      message {
        data {
          id
          title
          content
          channel
          createdAt
        }
        count
        page
      }
    }
    page
    count
  }
}


{
  "data": {
    "GetChannel": {
      "code": 1,
      "msg": "success",
      "data": [
        {
          "channel": {
            "id": 1,
            "name": "sdgfasfs"
          },
          "message": {
            "data": [
              {
                "id": 3,
                "title": "2132131",
                "content": "21312321",
                "channel": 1,
                "createdAt": "2022-08-24 22:43:05"
              }
            ],
            "count": 1,
            "page": 1
          }
        }
      ],
      "page": 1,
      "count": 1
    }
  }
}

```

4. 创建channel
```
mutation {
  CreateChannel(name: "复旦皇冠是个复读生") {
    code
    msg
    data {
      id
      name
    }
  }
}

{
  "data": {
    "CreateChannel": {
      "code": 1,
      "msg": "ok",
      "data": {
        "id": 5,
        "name": "复旦皇冠是个复读生"
      }
    }
  }
}
```

5. 创建message
```
mutation {
  CreateMessage(message: {title: "灌水灌水", content: "分段函数第八十八", channel: 5}) {
    code
    msg
    data {
      id
      title
    }
  }
}

{
  "data": {
    "CreateMessage": {
      "code": 1,
      "msg": "ok",
      "data": {
        "id": 4,
        "title": "灌水灌水"
      }
    }
  }
}
```