import { Button, Descriptions } from 'antd';
import { useSummary } from './hooks/useSummary';
import styles from './styles/Summary.module.css';

function Summary() {
  const { gitOwner, gitRepo, env, date, version, handleSubmit, handleBack } =
    useSummary();

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <h2 className={styles.title}>Summary</h2>
        <p className={styles.hint}>Please review your selections</p>
        <Descriptions
          className={styles.descriptions}
          bordered
          column={1}
          size="middle"
        >
          <Descriptions.Item label="Git Owner" className={styles.descItem}>
            {gitOwner || 'N/A'}
          </Descriptions.Item>
          <Descriptions.Item label="Git Repository" className={styles.descItem}>
            {gitRepo || 'N/A'}
          </Descriptions.Item>
          <Descriptions.Item label="Environment" className={styles.descItem}>
            {env ? env.toUpperCase() : 'N/A'}
          </Descriptions.Item>
          <Descriptions.Item label="Date" className={styles.descItem}>
            {date || 'N/A'}
          </Descriptions.Item>
          <Descriptions.Item label="Version" className={styles.descItem}>
            {version}
          </Descriptions.Item>
        </Descriptions>
        <div className={styles.buttonGroup}>
          <Button
            className={styles.backButton}
            size="large"
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            className={styles.submitButton}
            type="primary"
            size="large"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
