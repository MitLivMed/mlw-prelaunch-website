/** Trivsels Grupper pre-launch signup calls against the MitLivMed backend. */
import { apiFetch } from "./api";

export type TrivselLifeStage = "ungdom" | "midtliv" | "erfaren";

export interface TrivselSignupInput {
  name: string;
  email: string;
  phone?: string;
  lifeStage: TrivselLifeStage;
  note?: string;
  consent: boolean;
}

export type TrivselSignupResult =
  | { signedUp: true }
  | { alreadySignedUp: true };

export function submitTrivselSignup(
  input: TrivselSignupInput,
): Promise<TrivselSignupResult> {
  return apiFetch<TrivselSignupResult>("/api/trivsel/signup", {
    method: "POST",
    body: JSON.stringify(input),
  });
}
