import { useEffect, useState } from "react";
import { getPosts } from "@/entities/post/model/postApi";
import { getUsers } from "@/entities/user/model/userApi";

export const usePostsWithUsers = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        Promise.all([getPosts(), getUsers()])
            .then(([p, u]) => {
                setPosts(p);
                setUsers(u);
            })
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    return { posts, users, loading, error };
};
