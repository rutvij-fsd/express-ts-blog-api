# Express TypeScript Blog API

This is a simple RESTful API for a blog application built using Node.js, Express.js, and TypeScript. The API allows you to perform CRUD (Create, Read, Update, Delete) operations on blog posts and store them in a MongoDB database.

## Requirements

- Node.js (v14 or higher)
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/express-ts-blog-api.git
   cd express-ts-blog-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory of the project and add the following variables:

   ```plaintext
   MONGODB_URI=your-mongodb-connection-string
   ```

   Replace `your-mongodb-connection-string` with your actual MongoDB connection string.

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

   The server will be running on `http://localhost:4001`.

2. Use Postman or any API client to interact with the API.

## Endpoints

- `GET /api/posts`: Get all blog posts (Optional query parameters: `category`, `sortBy`, `sortOrder`).
- `GET /api/posts/:id`: Get a specific blog post by ID.
- `POST /api/posts`: Create a new blog post.
- `PUT /api/posts/:id`: Update an existing blog post.
- `DELETE /api/posts/:id`: Delete a blog post.

## Examples

1. Get all blog posts:

   ```bash
   curl --location 'http://localhost:4001/api/posts'
   ```

2. Get all blog posts sorted by createdAt in descending order:

   ```bash
   curl --location 'http://localhost:4001/api/posts?sortBy=createdAt&sortOrder=desc'
   ```

3. Get all blog posts in a specific category:

   ```bash
   curl --location 'http://localhost:4001/api/posts?category=technology'
   ```

4. Get a specific blog post by ID:

   ```bash
   curl --location 'http://localhost:4001/api/posts/609e395aa1234567890abcdef'
   ```

5. Create a new blog post:

   ```bash
   curl --location --request POST 'http://localhost:4001/api/posts' \
   --header 'Content-Type: application/json' \
   --data-raw '{
       "title": "Sample Blog Post",
       "content": "This is a sample blog post content.",
       "category": "technology"
   }'
   ```

6. Update an existing blog post:

   ```bash
   curl --location --request PUT 'http://localhost:4001/api/posts/609e395aa1234567890abcdef' \
   --header 'Content-Type: application/json' \
   --data-raw '{
       "title": "Updated Blog Post Title"
   }'
   ```

7. Delete a blog post:

   ```bash
   curl --location --request DELETE 'http://localhost:4001/api/posts/609e395aa1234567890abcdef'
   ```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.
