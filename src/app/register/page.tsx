"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { UserType } from "@/types/auth";
import {
  UserTypeSelection,
  BasicInfoForm,
  SkillsForm,
  IdentityVerification,
  EmailVerification,
  ConnectWallet,
} from "@/components/auth/register";

export default function Register() {
  const router = useRouter();
  const [userType, setUserType] = useState<UserType | null>(null);
  const [step, setStep] = useState(0); // Start with 0 for user type selection
  const [progress, setProgress] = useState(0);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [idUploaded, setIdUploaded] = useState(false);
  const [selfieUploaded, setSelfieUploaded] = useState(false);

  const handleSelectUserType = (type: UserType) => {
    setUserType(type);
    setStep(1);
    setProgress(20);
  };

  const handleNextStep = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const nextStep = step + 1;
    setStep(nextStep);
    setProgress(nextStep * 20);
  };

  const handleSendOTP = (e: React.MouseEvent) => {
    e.preventDefault();
    setOtpSent(true);
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    setOtpVerified(true);
  };

  const handleUploadID = (e: React.MouseEvent) => {
    e.preventDefault();
    setIdUploaded(true);
  };

  const handleTakeSelfie = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelfieUploaded(true);
  };

  const handleCompleteRegistration = () => {
    // Save user type to localStorage for demo purposes
    localStorage.setItem("user_type", userType || "freelancer");

    // Set auth cookie for demo purposes
    document.cookie = "auth_token=demo_token; path=/; max-age=86400";

    // Redirect to dashboard
    router.push("/dashboard");
  };

  const handleBackStep = () => {
    const prevStep = step - 1;
    setStep(prevStep);
    setProgress(prevStep * 20);
  };

  return (
    <div className="container max-w-md py-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Create Your Account
          </h1>
          <p className="text-muted-foreground">
            Join NexaWork to access blockchain freelance opportunities
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>
                  {step === 0 && "Choose your account type to get started"}
                  {step === 1 && "Enter your details to create an account"}
                  {step === 2 && "Tell us about your skills and experience"}
                  {step === 3 && "Verify your identity for account security"}
                  {step === 4 && "Verify your email address"}
                  {step === 5 && "Connect your wallet to complete registration"}
                </CardDescription>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                {step > 0 && <span>Step {step}/5</span>}
              </div>
            </div>
            {step > 0 && <Progress value={progress} className="h-2" />}
          </CardHeader>
          <CardContent>
            {/* Step 0: Choose Account Type */}
            {step === 0 && (
              <UserTypeSelection onSelectUserType={handleSelectUserType} />
            )}

            {/* Step 1: Basic Information */}
            {step === 1 && userType && (
              <BasicInfoForm userType={userType} onSubmit={handleNextStep} />
            )}

            {/* Step 2: Skills & Experience (Freelancer) or Company Details (Business) or Job Preferences (Job Poster) */}
            {step === 2 && userType && (
              <SkillsForm userType={userType} onSubmit={handleNextStep} />
            )}

            {/* Step 3: Identity Verification */}
            {step === 3 && (
              <IdentityVerification
                idUploaded={idUploaded}
                selfieUploaded={selfieUploaded}
                onIdUpload={handleUploadID}
                onTakeSelfie={handleTakeSelfie}
                onNext={handleNextStep}
              />
            )}

            {/* Step 4: Email Verification */}
            {step === 4 && (
              <EmailVerification
                otpSent={otpSent}
                otpVerified={otpVerified}
                onSendOTP={handleSendOTP}
                onVerifyOTP={handleVerifyOTP}
                onNext={handleNextStep}
              />
            )}

            {/* Step 5: Connect Wallet */}
            {step === 5 && (
              <ConnectWallet onComplete={handleCompleteRegistration} />
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 0 && (
              <Button variant="outline" onClick={handleBackStep}>
                Back
              </Button>
            )}
            {step === 0 && (
              <div className="flex justify-center w-full">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-nexapurple-700 hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            )}
            {step === 1 && (
              <div className="flex justify-center w-full">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-nexapurple-700 hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            )}
            {step > 1 && step < 3 && <div />}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
