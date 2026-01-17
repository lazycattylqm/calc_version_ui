import { Input, Button } from 'antd';
import { useGitOwnerInput } from './hooks/useGitOwnerInput';
import styles from './styles/GitOwnerInput.module.css';

function GitOwnerInput() {
  const { inputValue, handleInputChange, handleSubmit, isSubmitDisabled } =
    useGitOwnerInput();

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
          onChange={(e) => handleInputChange(e.target.value)}
          onPressEnter={handleSubmit}
          size="large"
        />
        <Button
          className={styles.button}
          type="primary"
          size="large"
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default GitOwnerInput;
