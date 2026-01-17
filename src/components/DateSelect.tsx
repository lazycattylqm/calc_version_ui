import { DatePicker, Button } from 'antd';
import { useDateSelect } from './hooks/useDateSelect';
import styles from './styles/DateSelect.module.css';

function DateSelect() {
  const {
    selectedDate,
    handleDateChange,
    handleSubmit,
    handleBack,
    isSubmitDisabled,
  } = useDateSelect();

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <h2 className={styles.title}>Select Date</h2>
        <p className={styles.hint}>Please choose a date</p>
        <DatePicker
          className={styles.datePicker}
          value={selectedDate}
          onChange={handleDateChange}
          size="large"
          format="YYYY-MM-DD"
          placeholder="Select date"
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

export default DateSelect;
