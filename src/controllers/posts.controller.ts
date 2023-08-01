import { Request, Response } from 'express';
import { createPost, getAllPosts, getPostById, updatePost, deletePost } from '../services/posts.service';
import { IBlogPost } from '../models/post.model';

// Controller function to create a new blog post
export const createPostController = async (req: Request, res: Response) => {
  try {
    const postData: IBlogPost = req.body;
    const newPost: IBlogPost = await createPost(postData);
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to get all blog posts with optional filtering and sorting
export const getAllPostsController = async (req: Request, res: Response) => {
  try {
    const { category, sortBy, sortOrder } = req.query;
    const validSortBy: keyof IBlogPost = sortBy as keyof IBlogPost;
    const posts: IBlogPost[] = await getAllPosts(category as string, validSortBy , sortOrder as 'asc' | 'desc');
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to get a specific blog post by ID
export const getPostByIdController = async (req: Request, res: Response) => {
  try {
    const postId: string = req.params.id;
    const post: IBlogPost | null = await getPostById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to update an existing blog post
export const updatePostController = async (req: Request, res: Response) => {
  try {
    const postId: string = req.params.id;
    const postData: Partial<IBlogPost> = req.body;
    const updatedPost: IBlogPost | null = await updatePost(postId, postData);
    if (!updatedPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error('Error updating blog post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to delete a blog post
export const deletePostController = async (req: Request, res: Response) => {
  try {
    const postId: string = req.params.id;
    const deletedPost: IBlogPost | null = await deletePost(postId);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
