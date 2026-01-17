import { Radio, Button } from 'antd';
import { useEnvSelect } from './hooks/useEnvSelect';
import styles from './styles/EnvSelect.module.css';

function EnvSelect() {
  const {
    selectedEnv,
    handleEnvChange,
    handleSubmit,
    handleBack,
    isSubmitDisabled,
  } = useEnvSelect();

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <h2 className={styles.title}>Select Environment</h2>
        <p className={styles.hint}>Please choose an environment</p>
        <Radio.Group
          className={styles.radioGroup}
          value={selectedEnv}
          onChange={(e) => handleEnvChange(e.target.value)}
          size="large"
        >
          <Radio.Button value="sde3" className={styles.radioButton}>
            SDE3
          </Radio.Button>
          <Radio.Button value="sde4" className={styles.radioButton}>
            SDE4
          </Radio.Button>
        </Radio.Group>
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
            disabled={isSubmitDisabled}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EnvSelect;
