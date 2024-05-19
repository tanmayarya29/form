import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

interface ICustomStepper {
  steps: string[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
  currentPage: React.ReactNode;
}

export default function CustomStepper(props: ICustomStepper) {
  const { steps, currentStep, setCurrentStep } = props;

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={currentStep}
        alternativeLabel
        sx={{
          bgcolor: "background.paper",
          padding: 2,
          overflowY: "auto",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "white",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {currentStep === steps.length ? (
        <Stack spacing={2} sx={{ pt: 2, pb: 1 }}>
          <Typography sx={{ pt: 2, pb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </Stack>
      ) : (
        <Stack spacing={2} sx={{ pt: 2, pb: 1 }}>
          {props.currentPage}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: 2,
              position: "relative",
              bottom: 0,
              width: "100%",
              bgcolor: "background.paper",
              padding: 2,
              zIndex: 1000,
            }}
          >
            <Button
              color="inherit"
              disabled={currentStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {currentStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </Stack>
      )}
    </Box>
  );
}
