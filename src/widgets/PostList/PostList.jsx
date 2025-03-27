import styles from "./PostList.module.css";
import { PostItem } from "./PostItem";
import { Loader } from "@/shared/ui/Loader";
import { ErrorMessage } from "@/shared/ui/ErrorMessage";
import {usePostsWithUsers} from "@/shared/lib/usePostsWithUsers.js";

export const PostList = () => {
  const { posts, users, loading, error } = usePostsWithUsers();

  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;

  return (
    <div className={styles.list}>
      {posts.map((post) => {
        const author = users.find((u) => u.id === post.userId);
        return <PostItem key={post.id} post={post} author={author} />;
      })}
    </div>
  );
};
