import { useAtomValue } from 'jotai';
import { currentStepAtom } from '../store/atoms';
import styles from './Index.module.css';
import GitOwnerInput from './GitOwnerInput';
import GitRepoInput from './GitRepoInput';

function Index() {
  const currentStep = useAtomValue(currentStepAtom);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>LOGO</div>
        <span>Index Header</span>
      </header>
      <div className={styles.body}>
        <div
          className={currentStep === 'owner' ? styles.fadeIn : styles.fadeOut}
        >
          {currentStep === 'owner' && <GitOwnerInput />}
        </div>
        <div
          className={currentStep === 'repo' ? styles.fadeIn : styles.fadeOut}
        >
          {currentStep === 'repo' && <GitRepoInput />}
        </div>
      </div>
    </div>
  );
}

export default Index;
