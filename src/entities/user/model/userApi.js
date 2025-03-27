import { httpClient } from "@/shared/api/httpClient";
export const getUsers = () => httpClient.get("https://jsonplaceholder.typicode.com/users");
