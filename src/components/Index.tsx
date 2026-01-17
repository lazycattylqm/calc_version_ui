import styles from './Index.module.css';

function Index() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>LOGO</div>
        <span>Index Header</span>
      </header>
      <div className={styles.body}>Body Content</div>
    </div>
  );
}

export default Index;
