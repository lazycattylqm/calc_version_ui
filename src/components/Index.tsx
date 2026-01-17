import styles from './Index.module.css';
import GitOwnerInput from './GitOwnerInput';

function Index() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>LOGO</div>
        <span>Index Header</span>
      </header>
      <div className={styles.body}>
        <GitOwnerInput />
      </div>
    </div>
  );
}

export default Index;
