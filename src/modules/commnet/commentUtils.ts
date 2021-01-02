import * as sql from "jm-ez-mysql";
import { Tables } from "../../config/tables";
export class CommentUtils {
  public async commentAdd(data){
    const question = await sql.insert(`${Tables.COMMENT}`, data);
    if (question.insertId) {
      return question.insertId;
    } else {
        return false;
    }
  }
  public async getComment(id){
    const query = `SELECT c.id,c.nickname,c.content,
    CONCAT('[',
           IF(sc.commentId != 'NULL',GROUP_CONCAT(DISTINCT
            JSON_OBJECT(
              'id', sc.id,
              'name', sc.nickname,
             'content', sc.content
          )),''),
          ']') AS innerComment FROM comments as c
      INNER JOIN  comments  sc on sc.commentId = c.id          
      WHERE c.id =${id}
      ORDER by c.id ASC`;
   const result = await sql.query(query);
  const commentData = await result.map((data) => {
      data.innerComment = data && data.innerComment ? JSON.parse(data.innerComment) : null;
      return data;
    })
    return commentData;
    } 
}