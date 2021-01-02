// Import only what we need from express
import { Router } from "express";
import {CommentController} from "./commentController"
import { Validator } from "../../validate";
import {CommentModel} from "./commentModel";
// Assign router to the express.Router() instance
const router: Router = Router();
const commentController = new CommentController();
const v: Validator = new Validator();
/*
* Add Api for the comment in article
* URL: /comment/add
* TYPE: POST
* RequestParam {string} nickname
* RequestParam {string} content
* RequestParam {Number} articlesId
* RequestParam {Number} commentId
*/
router.post('/add',v.validate(CommentModel),commentController.addComment)

/*
* Get comment from article id
* URL: /get-comment/:id
* TYPE: GET
*/
router.get('/get-comment/:id',commentController.getComment)



// Export the express.Router() instance to be used by server.ts
export const Comment: Router = router;
