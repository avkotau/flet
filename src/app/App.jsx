import { PostList } from "@/widgets/PostList/PostList";
import styles from "./App.module.css";

export const App = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Список постов</h1>
      <PostList />
    </main>
  );
};
