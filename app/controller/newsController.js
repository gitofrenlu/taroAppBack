const Controller = require('egg').Controller

class NewsController extends Controller{
  async getList(){

    const dataList = {
      list : [
          {name:'章三',age: 12},
          {name:'里斯',age:34}
        ]
      }

    await this.ctx.render('index.tpl',dataList);
  }
}

module.exports = NewsController