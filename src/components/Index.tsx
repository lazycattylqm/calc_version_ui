import { useAtomValue } from 'jotai';
import { currentStepAtom } from '../store/atoms';
import config from '../config';
import styles from './Index.module.css';
import GitOwnerInput from './GitOwnerInput';
import GitRepoInput from './GitRepoInput';
import EnvSelect from './EnvSelect';
import DateSelect from './DateSelect';
import Summary from './Summary';

function Index() {
  const currentStep = useAtomValue(currentStepAtom);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img
            src="/images/hsbc-logo.png"
            alt="HSBC Logo"
            className={styles.logoImage}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.textContent = 'LOGO';
            }}
          />
        </div>
        <span>{config.appTitle}</span>
        {config.isDevelopment && (
          <span
            style={{ marginLeft: 'auto', fontSize: '12px', color: '#52c41a' }}
          >
            DEV
          </span>
        )}
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
        <div className={currentStep === 'env' ? styles.fadeIn : styles.fadeOut}>
          {currentStep === 'env' && <EnvSelect />}
        </div>
        <div
          className={currentStep === 'date' ? styles.fadeIn : styles.fadeOut}
        >
          {currentStep === 'date' && <DateSelect />}
        </div>
        <div
          className={currentStep === 'summary' ? styles.fadeIn : styles.fadeOut}
        >
          {currentStep === 'summary' && <Summary />}
        </div>
      </div>
    </div>
  );
}

export default Index;
