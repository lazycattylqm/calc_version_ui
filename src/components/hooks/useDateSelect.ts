import { useState } from 'react';
import { useSetAtom, useAtomValue } from 'jotai';
import dayjs, { Dayjs } from 'dayjs';
import { dateAtom, currentStepAtom } from '../../store/atoms';

export const useDateSelect = () => {
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

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
  };

  return {
    selectedDate,
    handleDateChange,
    handleSubmit,
    handleBack,
    isSubmitDisabled: !selectedDate,
  };
};
