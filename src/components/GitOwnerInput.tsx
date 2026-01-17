import { useState } from 'react';
import { useSetAtom } from 'jotai';
import { Input, Button } from 'antd';
import { gitOwnerAtom } from '../store/atoms';
import styles from './GitOwnerInput.module.css';

function GitOwnerInput() {
  const [inputValue, setInputValue] = useState('');
  const setGitOwner = useSetAtom(gitOwnerAtom);

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setGitOwner(inputValue.trim());
      console.log('Git Owner submitted:', inputValue.trim());
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <h2 className={styles.title}>Git Repository Owner</h2>
        <p className={styles.hint}>
          Please enter the owner name of the Git repository
        </p>
        <Input
          className={styles.input}
          placeholder="e.g., facebook, microsoft, google"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={handleSubmit}
          size="large"
        />
        <Button
          className={styles.button}
          type="primary"
          size="large"
          onClick={handleSubmit}
          disabled={!inputValue.trim()}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default GitOwnerInput;
