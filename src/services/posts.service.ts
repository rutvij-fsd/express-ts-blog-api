import Post, { IBlogPost } from '../models/post.model';

// Function to create a new blog post
export const createPost = async (data: IBlogPost): Promise<IBlogPost> => {
  return await Post.create(data);
};

// Function to get all blog posts with optional filtering and sorting
export const getAllPosts = async (
  category?: string,
  sortBy?: keyof IBlogPost,
  sortOrder?: 'asc' | 'desc'
): Promise<IBlogPost[]> => {
  let query: any = {};

  // Apply filtering based on category (if provided)
  if (category) {
    query.category = category;
  }


 // Fetch all blog posts from the database with sorting
 const sortOptions: any = {};
 if (sortBy && sortOrder) {
   sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;
 }
 const posts: IBlogPost[] = await Post.find(query).sort(sortOptions);

 return posts;


};  
// Function to get a specific blog post by ID
export const getPostById = async (id: string): Promise<IBlogPost | null> => {
  return await Post.findById(id);
};

// Function to update an existing blog post
export const updatePost = async (id: string, data: Partial<IBlogPost>): Promise<IBlogPost | null> => {
  return await Post.findByIdAndUpdate(id, data, { new: true });
};

// Function to delete a blog post
export const deletePost = async (id: string): Promise<IBlogPost | null> => {
  return await Post.findByIdAndDelete(id);
};
