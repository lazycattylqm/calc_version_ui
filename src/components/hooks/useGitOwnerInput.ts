import { useState } from 'react';
import { useSetAtom, useAtomValue } from 'jotai';
import { gitOwnerAtom, currentStepAtom } from '../../store/atoms';

export const useGitOwnerInput = () => {
  const gitOwner = useAtomValue(gitOwnerAtom);
  const [inputValue, setInputValue] = useState(gitOwner);
  const setGitOwner = useSetAtom(gitOwnerAtom);
  const setCurrentStep = useSetAtom(currentStepAtom);

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setGitOwner(inputValue.trim());
      console.log('Git Owner submitted:', inputValue.trim());
      setCurrentStep('repo');
    }
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return {
    inputValue,
    handleInputChange,
    handleSubmit,
    isSubmitDisabled: !inputValue.trim(),
  };
};
