import { create } from "zustand";

type Answer = {
  [key: number]: string; // step → selected option
};

interface OnboardingState {
  currentStep: number;
  answers: Answer;
  setAnswer: (step: number, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  currentStep: 1,
  answers: {},

  setAnswer: (step, value) =>
    set((state) => ({
      answers: { ...state.answers, [step]: value },
    })),

  nextStep: () =>
    set((state) => ({ currentStep: state.currentStep + 1 })),

  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(1, state.currentStep - 1),
    })),

  reset: () => set({ currentStep: 1, answers: {} }),
}));
