import {
     IsNotEmpty, Validate
  } from "class-validator";
  import { Model } from "../../model";
  
  export class ArticlesModel extends Model {
    @IsNotEmpty()
    public nickname: string;
  
    @IsNotEmpty()
    public title: string;
  
    @IsNotEmpty()
    public content: string;
    constructor(body: any) {
      super();
    
    }
  }
  