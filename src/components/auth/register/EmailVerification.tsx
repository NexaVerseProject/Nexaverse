import { ArrowRight, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EmailVerificationProps {
  otpSent: boolean;
  otpVerified: boolean;
  onSendOTP: (e: React.MouseEvent) => void;
  onVerifyOTP: (e: React.FormEvent) => void;
  onNext: (e?: React.FormEvent) => void;
}

export function EmailVerification({
  otpSent,
  otpVerified,
  onSendOTP,
  onVerifyOTP,
  onNext,
}: EmailVerificationProps) {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border p-4">
        <div className="flex items-start gap-4">
          <div className="bg-nexapurple-100 dark:bg-nexapurple-900/30 p-2 rounded-full">
            <Mail className="h-5 w-5 text-nexapurple-700" />
          </div>
          <div>
            <h3 className="font-medium">Email Verification</h3>
            <p className="text-sm text-muted-foreground mt-1">
              We&apos;ve sent a verification code to your email address. Please
              check your inbox and enter the code below to verify your account.
            </p>
          </div>
        </div>
      </div>

      {!otpSent ? (
        <div className="space-y-4">
          <Button
            onClick={onSendOTP}
            className="w-full bg-nexapurple-700 hover:bg-nexapurple-800"
          >
            Send Verification Code
          </Button>
        </div>
      ) : (
        <form onSubmit={onVerifyOTP} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="otp">Verification Code</Label>
            <div className="flex gap-2">
              <Input className="text-center" maxLength={1} />
              <Input className="text-center" maxLength={1} />
              <Input className="text-center" maxLength={1} />
              <Input className="text-center" maxLength={1} />
              <Input className="text-center" maxLength={1} />
              <Input className="text-center" maxLength={1} />
            </div>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="text-sm text-nexapurple-700 hover:underline"
            >
              Didn&apos;t receive a code? Resend
            </button>
          </div>
          {!otpVerified ? (
            <Button
              type="submit"
              className="w-full bg-nexapurple-700 hover:bg-nexapurple-800"
            >
              Verify Code
            </Button>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 p-2 bg-green-50 dark:bg-green-900/20 rounded-md">
                <Check className="h-5 w-5 text-green-600" />
                <span className="text-green-600 font-medium">
                  Email verified successfully!
                </span>
              </div>
              <Button
                onClick={() => onNext()}
                className="w-full bg-nexapurple-700 hover:bg-nexapurple-800"
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
