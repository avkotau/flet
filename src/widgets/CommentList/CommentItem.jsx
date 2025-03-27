import styles from "./CommentItem.module.css";

export const CommentItem = ({ comment }) => {
  return (
    <li className={styles.item}>
      <strong>{comment.email}:</strong> {comment.body}
    </li>
  );
};
