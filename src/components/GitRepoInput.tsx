import { Input, Button } from 'antd';
import { useGitRepoInput } from './hooks/useGitRepoInput';
import styles from './styles/GitRepoInput.module.css';

function GitRepoInput() {
  const {
    inputValue,
    handleInputChange,
    handleSubmit,
    handleBack,
    isSubmitDisabled,
  } = useGitRepoInput();

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <h2 className={styles.title}>Git Repository Name</h2>
        <p className={styles.hint}>Please enter the repository name</p>
        <Input
          className={styles.input}
          placeholder="e.g., react, vscode, typescript"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
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
            disabled={isSubmitDisabled}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GitRepoInput;
