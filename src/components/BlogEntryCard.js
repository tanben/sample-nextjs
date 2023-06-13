import styles from "../app/page.module.css";

export default function BlogEntryCard({ author, title, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.description}>
        <img alt='blog' src={image} width={180} height={35} />
        <p>{title}</p>
        <p>{author}</p>
      </div>
    </div>
  );
}
