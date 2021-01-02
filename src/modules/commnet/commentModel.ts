import {
     IsNotEmpty, Validate
  } from "class-validator";
  import { Model } from "../../model";
  
  export class CommentModel extends Model {
    @IsNotEmpty()
    public nickname: string;
  
    @IsNotEmpty()
    public content: string;
  
    @IsNotEmpty()
    public articlesId: number;
    constructor(body: any) {
      super();
      const {
        nickname,
        content,
        articlesId,
    } = body;

    this.nickname = nickname;
    this.content = content;
    this.articlesId = articlesId;
    }
  }
  