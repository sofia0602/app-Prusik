import Router from 'express'
import PostController from "./Controllers/PostController.js";
import UserController from "./Controllers/UserController.js";

const router = new Router()

router.post('/posts/add', PostController.create)
router.post('/users/add', UserController.create)
router.get('/posts', PostController.getAll)
router.get('/users', UserController.getAll)
router.get('/posts/:id', PostController.getOne)
router.get('/users/:id', UserController.getOne)
router.put('/posts', PostController.update)
router.put('/users', UserController.update)
router.delete('/posts/:id', PostController.delete)
router.delete('/users/:id', UserController.delete)

export default router;
