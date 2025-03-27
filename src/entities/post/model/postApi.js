import { httpClient } from "@/shared/api/httpClient";
export const getPosts = () => httpClient.get("https://jsonplaceholder.typicode.com/posts");
