import { useAtomValue } from 'jotai';
import { currentStepAtom } from '../store/atoms';
import config from '../config';
import styles from './styles/Index.module.css';
import GitOwnerInput from './GitOwnerInput';
import GitRepoInput from './GitRepoInput';
import EnvSelect from './EnvSelect';
import DateSelect from './DateSelect';
import Summary from './Summary';

function Index() {
  const currentStep = useAtomValue(currentStepAtom);

  const renderStep = () => {
    switch (currentStep) {
      case 'owner':
        return <GitOwnerInput />;
      case 'repo':
        return <GitRepoInput />;
      case 'env':
        return <EnvSelect />;
      case 'date':
        return <DateSelect />;
      case 'summary':
        return <Summary />;
      default:
        return null;
    }
  };

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
        <div className={styles.fadeIn}>{renderStep()}</div>
      </div>
    </div>
  );
}

export default Index;
