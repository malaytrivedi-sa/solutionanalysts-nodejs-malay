import * as sql from "jm-ez-mysql";
import { Tables } from "../../config/tables";
export class ArticlesUtils {
  public async articleAdd(data){
    const question = await sql.insert(`${Tables.ARTICLE}`, data);
    if (question.insertId) {
      return question.insertId;
    } else {
        return false;
    }
  }
  public async getPageSkipAndLimit(page: string, limit: string) {
    const limits = limit ? +limit : 20; // for paginate records
    const pages = page ? +page : 1;
    return [pages > 1 ? (pages - 1) * limits : 0, limits];
  }

  public async getArticle(req: any){
    let query ;
    query = `SELECT id,title,nickname,content,createdAt FROM articles`;
    if (req.query.page && req.query.limit) {
        const limitParams = await this.getPageSkipAndLimit(req.query.page, req.query.limit);
        query += ` limit ${limitParams[0]}, ${limitParams[1]} `;
    }
    const articles =  await sql.query(query);
    if(articles.length>0){
        return articles;
    }else{
        return false;
    }
  }
  public async getArticleById(data){
    const article = await sql.first(Tables.ARTICLE, ["id","title","nickname","content","createdAt"], `id='${data}'`);
    if(article){
        return article;
    }else{
        return false;
    }
  }
  
}