import { useState } from 'react';
import { useSetAtom, useAtomValue } from 'jotai';
import { gitRepoAtom, currentStepAtom } from '../../store/atoms';

export const useGitRepoInput = () => {
  const gitRepo = useAtomValue(gitRepoAtom);
  const [inputValue, setInputValue] = useState(gitRepo);
  const setGitRepo = useSetAtom(gitRepoAtom);
  const setCurrentStep = useSetAtom(currentStepAtom);

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setGitRepo(inputValue.trim());
      console.log('Git Repo submitted:', inputValue.trim());
      setCurrentStep('env');
    }
  };

  const handleBack = () => {
    setCurrentStep('owner');
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return {
    inputValue,
    handleInputChange,
    handleSubmit,
    handleBack,
    isSubmitDisabled: !inputValue.trim(),
  };
};
