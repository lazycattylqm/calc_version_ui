import { useState } from 'react';
import { useSetAtom, useAtomValue } from 'jotai';
import { Radio, Button } from 'antd';
import { envAtom, currentStepAtom } from '../store/atoms';
import styles from './EnvSelect.module.css';

function EnvSelect() {
  const env = useAtomValue(envAtom);
  const [selectedEnv, setSelectedEnv] = useState<'sde3' | 'sde4' | ''>(env);
  const setEnv = useSetAtom(envAtom);
  const setCurrentStep = useSetAtom(currentStepAtom);

  const handleSubmit = () => {
    if (selectedEnv) {
      setEnv(selectedEnv);
      console.log('Environment submitted:', selectedEnv);
      setCurrentStep('date');
    }
  };

  const handleBack = () => {
    setCurrentStep('repo');
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <h2 className={styles.title}>Select Environment</h2>
        <p className={styles.hint}>Please choose an environment</p>
        <Radio.Group
          className={styles.radioGroup}
          value={selectedEnv}
          onChange={(e) => setSelectedEnv(e.target.value)}
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
            disabled={!selectedEnv}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EnvSelect;
