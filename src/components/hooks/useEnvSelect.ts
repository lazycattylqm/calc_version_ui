import { useState } from 'react';
import { useSetAtom, useAtomValue } from 'jotai';
import { envAtom, currentStepAtom } from '../../store/atoms';

export const useEnvSelect = () => {
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

  const handleEnvChange = (value: 'sde3' | 'sde4') => {
    setSelectedEnv(value);
  };

  return {
    selectedEnv,
    handleEnvChange,
    handleSubmit,
    handleBack,
    isSubmitDisabled: !selectedEnv,
  };
};
