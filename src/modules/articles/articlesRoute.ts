// Import only what we need from express
import { Router } from "express";
import {ArticlesController} from "./articlesController"
import { Validator } from "../../validate";
import {ArticlesModel} from "./articlesModel";
// Assign router to the express.Router() instance
const router: Router = Router();
const articlesController = new ArticlesController();
const v: Validator = new Validator();
/*
* Add Api for the articles
* URL: /article/add
* TYPE: POST
* RequestParam {string} title
* RequestParam {string} nickname
* RequestParam {string} content
*/
router.post('/add',v.validate(ArticlesModel),articlesController.addArticle)

/*
* Get all  Api for the articles
* URL: /article/get-all-articles
* TYPE: GET
*/
router.get('/get-all-articles',articlesController.getAllArticles)

/*
* Get perticuler articles content
* URL: /article/get-articles-by-id
* TYPE: GET
*/
router.get('/get-articles-by-id/:id',articlesController.getArticlesById)

// Export the express.Router() instance to be used by server.ts
export const Articles: Router = router;
