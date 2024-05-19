"use client";
import Page1 from "./pages/Page1";
import { useState } from "react";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import CustomStepper from "./components/CustomStepper";
import { Card } from "@mui/material";
import Page4 from "./pages/Page4";

export interface mainState {
  page1: IPage1;
  page2: IPage2;
  page3: IPage3;
  progress: number;
}

export interface IPage1 {
  name: string; // input
  gender: string; // select
  pronoun: string; // select
  dob: string; // date
}

export interface IPage2 {
  country: string; // select
  timezone: string; // select based on country
  college: string; // input
  course: string; // input
  passoutYear: string; // input
  specialization: string; // input
  minor: string; // input
}

export interface IPage3 {
  whatsapp: string; // input
  linkedin: string; // input
  twitter: string; // input
  mail: string; // input
  phone: string; // input + country code
}

export const defaultPage1Props = {
  name: "",
  gender: "",
  pronoun: "",
  dob: "",
};

export const defaultPage2Props = {
  country: "",
  timezone: "",
  college: "",
  course: "",
  passoutYear: "",
  specialization: "",
  minor: "",
};

export const defaultPage3Props = {
  whatsapp: "",
  linkedin: "",
  twitter: "",
  mail: "",
  phone: "",
};

const defaultMainState = {
  page1: defaultPage1Props,
  page2: defaultPage2Props,
  page3: defaultPage3Props,
  progress: 0,
};

export default function Home() {
  const [mainState, setMainState] = useState<mainState>(defaultMainState);

  const steps = [
    "Personal Information",
    "Education Information",
    "Contact Information",
    "Thank You",
  ];

  const [currentStep, setCurrentStep] = useState<number>(0);

  const pageProps = {
    mainState: mainState,
    setMainState: setMainState,
  };

  const currentPage =
    currentStep === 0 ? (
      <Page1 {...pageProps} />
    ) : currentStep === 1 ? (
      <Page2 {...pageProps} />
    ) : currentStep === 2 ? (
      <Page3 {...pageProps} />
    ) : (
      <Page4 {...pageProps} />
    );

  return (
    <div
      className="
    flex
    justify-center
    items-center
    h-screen
    bg-gray-200
    "
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: "800px",
          bgcolor: "background.paper",
          padding: 2,
          height: "550px",
          borderRadius: 2,
          boxShadow: 3,
          overflowY: "auto",
        }}
      >
        <CustomStepper
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          currentPage={currentPage}
        />
      </Card>
    </div>
  );
}
