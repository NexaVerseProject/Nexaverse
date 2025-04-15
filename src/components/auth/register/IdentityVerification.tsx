import {
  ArrowRight,
  Check,
  FileText,
  Info,
  Camera,
  Shield,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface IdentityVerificationProps {
  idUploaded: boolean;
  selfieUploaded: boolean;
  onIdUpload: (e: React.MouseEvent) => void;
  onTakeSelfie: (e: React.MouseEvent) => void;
  onNext: (e?: React.FormEvent) => void;
}

export function IdentityVerification({
  idUploaded,
  selfieUploaded,
  onIdUpload,
  onTakeSelfie,
  onNext,
}: IdentityVerificationProps) {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border p-4">
        <div className="flex items-start gap-4">
          <div className="bg-nexapurple-100 dark:bg-nexapurple-900/30 p-2 rounded-full">
            <Shield className="h-5 w-5 text-nexapurple-700" />
          </div>
          <div>
            <h3 className="font-medium">Identity Verification</h3>
            <p className="text-sm text-muted-foreground mt-1">
              To ensure platform security and trust, we need to verify your
              identity. This information is encrypted and securely stored.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Government ID</Label>
          <div className="border rounded-lg p-4">
            {!idUploaded ? (
              <div className="flex flex-col items-center justify-center gap-2 py-6">
                <FileText className="h-10 w-10 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Upload a photo of your ID card or passport
                </p>
                <Button
                  onClick={onIdUpload}
                  className="mt-2 bg-nexapurple-700 hover:bg-nexapurple-800"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload ID
                </Button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">ID_Document.jpg uploaded</span>
                </div>
                <Button variant="outline" size="sm">
                  Change
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Selfie Verification</Label>
          <div className="border rounded-lg p-4">
            {!selfieUploaded ? (
              <div className="flex flex-col items-center justify-center gap-2 py-6">
                <Camera className="h-10 w-10 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Take a selfie to verify it&apos;s really you
                </p>
                <Button
                  onClick={onTakeSelfie}
                  className="mt-2 bg-nexapurple-700 hover:bg-nexapurple-800"
                >
                  <Camera className="mr-2 h-4 w-4" />
                  Take Selfie
                </Button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Selfie captured successfully</span>
                </div>
                <Button variant="outline" size="sm">
                  Retake
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Alert
        variant="default"
        className="border-nexapurple-200 bg-nexapurple-50 dark:border-nexapurple-900/50 dark:bg-nexapurple-900/20"
      >
        <Info className="h-4 w-4 text-nexapurple-700" />
        <AlertTitle>Privacy Notice</AlertTitle>
        <AlertDescription className="text-sm text-muted-foreground">
          Your ID and selfie are only used for verification and are stored
          securely. We never share this information with third parties.
        </AlertDescription>
      </Alert>

      <Button
        onClick={() => onNext()}
        className="w-full bg-nexapurple-700 hover:bg-nexapurple-800"
        disabled={!idUploaded || !selfieUploaded}
      >
        Continue
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
