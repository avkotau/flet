import styles from "./PostItem.module.css";
import { CommentList } from "@/widgets/CommentList/CommentList";
import { useToggle } from "@/shared/lib/useToggle";

export const PostItem = ({ post, author }) => {
  const [showComments, toggleComments] = useToggle(false);

  return (
    <div className={styles.item}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.body}>{post.body}</p>
      <div className={styles.author}>Автор: {author?.name}</div>
      <button
        className={styles.toggle}
        onClick={toggleComments}
      >
        {showComments ? "Скрыть комментарии" : "Показать комментарии"}
      </button>
      {showComments && <CommentList postId={post.id} />}
    </div>
  );
};
