import { useState } from 'react';
import { useSetAtom, useAtomValue } from 'jotai';
import { Input, Button } from 'antd';
import { gitRepoAtom, currentStepAtom } from '../store/atoms';
import styles from './GitRepoInput.module.css';

function GitRepoInput() {
  const gitRepo = useAtomValue(gitRepoAtom);
  const [inputValue, setInputValue] = useState(gitRepo);
  const setGitRepo = useSetAtom(gitRepoAtom);
  const setCurrentStep = useSetAtom(currentStepAtom);

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setGitRepo(inputValue.trim());
      console.log('Git Repo submitted:', inputValue.trim());
    }
  };

  const handleBack = () => {
    setCurrentStep('owner');
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <h2 className={styles.title}>Git Repository Name</h2>
        <p className={styles.hint}>Please enter the repository name</p>
        <Input
          className={styles.input}
          placeholder="e.g., react, vscode, typescript"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={handleSubmit}
          size="large"
        />
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
            disabled={!inputValue.trim()}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GitRepoInput;
