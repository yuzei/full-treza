import { supabase } from "./supabase";
import { QUESTIONS } from "../data/questions";

export async function saveOnboardingAnswers(userId: string, answers: Record<number, string>) {
  const payload = QUESTIONS.map(q => ({
    user_id: userId,
    step: q.id,
    answer: answers[q.id]
  }));

  const { error } = await supabase.from("onboarding_answers").insert(payload);

  if (error) {
    console.error("Error saving onboarding:", error);
    throw error;
  }
}
