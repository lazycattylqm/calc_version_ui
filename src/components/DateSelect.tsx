import { useState } from 'react';
import { useSetAtom, useAtomValue } from 'jotai';
import { DatePicker, Button } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { dateAtom, currentStepAtom } from '../store/atoms';
import styles from './DateSelect.module.css';

function DateSelect() {
  const savedDate = useAtomValue(dateAtom);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
    savedDate ? dayjs(savedDate) : null
  );
  const setDate = useSetAtom(dateAtom);
  const setCurrentStep = useSetAtom(currentStepAtom);

  const handleSubmit = () => {
    if (selectedDate) {
      const dateStr = selectedDate.format('YYYY-MM-DD');
      setDate(dateStr);
      console.log('Date submitted:', dateStr);
      setCurrentStep('summary');
    }
  };

  const handleBack = () => {
    setCurrentStep('env');
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <h2 className={styles.title}>Select Date</h2>
        <p className={styles.hint}>Please choose a date</p>
        <DatePicker
          className={styles.datePicker}
          value={selectedDate}
          onChange={(date) => setSelectedDate(date)}
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
            disabled={!selectedDate}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DateSelect;
