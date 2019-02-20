const Service = require('egg').Service

class newsService extends Service{
  async getNews(){

    const dataList = {
      list : [
          {name:'章三',age:12},
          {name:'里斯',age:34}
        ]
      }
     let sql = 'select * from employee where id = 1';

     let emp =await this.app.mysql.get('db1').query(sql);

     this.logger.debug(emp)
      
    return dataList
  }
}

module.exports = newsService