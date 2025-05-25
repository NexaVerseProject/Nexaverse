import { LoginForm } from "./login-form";
import { LoginTabs } from "./tabs";

export default function LoginPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome Back to NexaWork
        </h1>
        <LoginTabs />
      </div>
    </div>
  );
}
