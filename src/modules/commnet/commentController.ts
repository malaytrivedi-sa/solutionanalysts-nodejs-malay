import { Request, Response } from "express";
import { CommentUtils } from "./commentUtils";
import { ResponseBuilder } from "../../helpers/responseBuilder";
export class CommentController {
    private commentUtils: CommentUtils = new CommentUtils();
    public addComment = async (req:Request,res:Response)=>{
        const comment = req.body;
        const result = await this.commentUtils.commentAdd(comment);
        if(result){
            return res.status(200).json(ResponseBuilder.data(result, req.t("SUCCESS")));
        }else {
            return res.status(400).json(ResponseBuilder.badRequest(req.t("FAILED")));
        }
    }

    public getComment = async (req: Request, res:Response)=>{
        const id  =  req.params.id
        const result = await this.commentUtils.getComment(id);
        if(result){
            return res.status(200).json(ResponseBuilder.data(result, req.t("SUCCESS")));
        }else {
            return res.status(400).json(ResponseBuilder.badRequest(req.t("NORECORD")));
        }
    }
   
}
