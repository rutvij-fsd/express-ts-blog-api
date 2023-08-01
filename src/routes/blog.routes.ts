import { Router } from 'express';
import { createPostController, getAllPostsController, getPostByIdController, updatePostController, deletePostController } from '../controllers/posts.controller';
import { createPostValidator, getAllPostsValidator, updatePostValidator, deletePostValidator } from '../validators/validators';

const router = Router();

router.post('/posts', createPostValidator, createPostController);
router.get('/posts', getAllPostsValidator, getAllPostsController);
router.get('/posts/:id', getPostByIdController);
router.put('/posts/:id', updatePostValidator, updatePostController);
router.delete('/posts/:id', deletePostValidator, deletePostController);

export default router;
