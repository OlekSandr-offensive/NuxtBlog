import type { IPost } from '../types/post';
import type { IComments } from '../types/comment';

const config = useRuntimeConfig();
const $api = config.public.baseURL;

// Function to execute API request
export const apiClient = $fetch.create({
  baseURL: $api,
  headers: {
    'Content-Type': 'application/json',
  },
  onResponseError({ response }) {
    if (response.status === 404) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found',
      });
    }
  },
});

// Getting all posts
export const fetchPosts = async () => {
  const posts = await apiClient<IPost[]>(`${$api}/posts`);
  return posts;
};

// Getting a post by id
export const fetchPostById = async (id: string): Promise<IPost> => {
  const post = await apiClient<IPost>(`${$api}/posts/${id}`);
  return post;
};

// Getting all comments
export const fetchComments = async (): Promise<IComments[]> => {
  const comments = await apiClient<IComments[]>(`${$api}/comments`);
  return comments;
};
