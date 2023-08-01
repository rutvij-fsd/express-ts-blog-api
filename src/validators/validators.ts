import { body, param, query, ValidationChain } from 'express-validator';

const createPostValidator: ValidationChain[] = [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
  body('category').notEmpty().withMessage('Category is required'),
];

const getAllPostsValidator: ValidationChain[] = [
  query('category').optional().notEmpty().withMessage('Category must not be empty'),
  query('sortBy')
    .optional()
    .isIn(['createdDate', 'blogName'])
    .withMessage('Invalid sortBy value. Possible values: createdDate, blogName'),
  query('sortOrder')
    .optional()
    .isIn(['asc', 'desc'])
    .withMessage('Invalid sortOrder value. Possible values: asc, desc'),
];

const updatePostValidator: ValidationChain[] = [
  param('id').notEmpty().withMessage('Blog post ID is required'),
  body('title').optional().notEmpty().withMessage('Title is required'),
  body('content').optional().notEmpty().withMessage('Content is required'),
  body('category').optional().notEmpty().withMessage('Category is required'),
];

const deletePostValidator: ValidationChain[] = [
  param('id').notEmpty().withMessage('Blog post ID is required'),
];

export { createPostValidator, getAllPostsValidator, updatePostValidator, deletePostValidator };
