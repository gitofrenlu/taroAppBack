const Controller = require('egg').Controller

class NewsController extends Controller{
  async getList(){

    const dataList =await this.ctx.service.news.getNews();

    await this.ctx.render('index.tpl',dataList);
  }
}

module.exports = NewsController