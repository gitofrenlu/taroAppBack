const Service = require('egg').Service

class newsService extends Service{
  async getNews(){

    const dataList = {
      list : [
          {name:'章三',age:12},
          {name:'里斯',age:34}
        ]
      }

    return dataList
  }
}

module.exports = newsService