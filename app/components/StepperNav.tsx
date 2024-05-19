import React from 'react'

interface IStepperNav {
    steps: string[]
    currentStep: number
    setCurrentStep: (step: number) => void
}
const StepperNav = (props: IStepperNav) => {
    const {steps, currentStep, setCurrentStep} = props;

  return (
    <div className="
    fixed
    bottom-0
    w-full
    bg-black
    flex
    justify-between
    p-4
    shadow-md
    " >
        {currentStep !== 0 && <button
            className='bg-white text-black px-4 py-2 rounded-md'
        onClick={() => setCurrentStep(currentStep - 1)}>Back</button>}
        {currentStep !== steps.length - 1 && <button
            className='bg-white text-black px-4 py-2 rounded-md'
        onClick={() => setCurrentStep(currentStep + 1)}>Next</button>}
    </div>
  )
}

export default StepperNav