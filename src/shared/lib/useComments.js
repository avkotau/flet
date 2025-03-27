import { useEffect, useState } from "react";
import { getCommentsByPostId } from "@/entities/comment/model/commentApi";

export const useComments = (postId) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCommentsByPostId(postId)
            .then(setComments)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [postId]);

    return { comments, loading, error };
};
