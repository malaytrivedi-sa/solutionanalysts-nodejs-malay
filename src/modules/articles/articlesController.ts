import { Request, Response } from "express";
import { isEmpty } from "lodash";
import { ArticlesUtils } from "./articlesUtils";
import { ResponseBuilder } from "../../helpers/responseBuilder";
export class ArticlesController {
    private articlesUtils: ArticlesUtils = new ArticlesUtils();
    public addArticle = async (req:Request,res:Response)=>{
        const question = req.body;
        const result = await this.articlesUtils.articleAdd(question);
        if(result){
            return res.status(200).json(ResponseBuilder.data(result, req.t("SUCCESS")));
        }else {
            return res.status(400).json(ResponseBuilder.badRequest(req.t("FAILED")));
        }
    }

    public getAllArticles = async (req: Request, res:Response)=>{
        const result = await this.articlesUtils.getArticle(req);
        if(result){
            return res.status(200).json(ResponseBuilder.data(result, req.t("SUCCESS")));
        }else {
            return res.status(400).json(ResponseBuilder.badRequest(req.t("NORECORD")));
        }
    }

    public getArticlesById= async (req: Request, res:Response)=>{
        const result = await this.articlesUtils.getArticleById(req.params.id);
        if(result){
            return res.status(200).json(ResponseBuilder.data(result, req.t("SUCCESS")));
        }else {
            return res.status(400).json(ResponseBuilder.badRequest(req.t("NORECORD")));
        }
    }
}
