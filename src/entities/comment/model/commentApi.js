import { httpClient } from "@/shared/api/httpClient";
export const getCommentsByPostId = (postId) =>
    httpClient.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
