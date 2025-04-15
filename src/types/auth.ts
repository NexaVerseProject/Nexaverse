export type UserType = "freelancer" | "business" | "job-poster";

export interface RegistrationState {
  userType: UserType | null;
  step: number;
  progress: number;
  otpSent: boolean;
  otpVerified: boolean;
  idUploaded: boolean;
  selfieUploaded: boolean;
}
