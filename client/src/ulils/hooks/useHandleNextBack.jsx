import React from 'react'
import { useState } from 'react';

const useHandleNextBack = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        if (step !== 3) {
          setStep(step + 1);
        }
      };
    
      const handleBack = () => {
        if (step !== 1) {
          setStep(step - 1);
        }
      };

  return 
};

export default useHandleNextBack