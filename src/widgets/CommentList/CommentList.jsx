import styles from "./CommentList.module.css";
import { CommentItem } from "./CommentItem";
import { Loader } from "@/shared/ui/Loader";
import { ErrorMessage } from "@/shared/ui/ErrorMessage";
import {useComments} from "@/shared/lib/useComments.js";

export const CommentList = ({ postId }) => {
  const { comments, loading, error } = useComments(postId);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;

  return (
    <ul className={styles.list}>
      {comments.map((c) => (
        <CommentItem key={c.id} comment={c} />
      ))}
    </ul>
  );
};
