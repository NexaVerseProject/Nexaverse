import type { UserType } from "@/types/auth";
import { User, Building, Briefcase } from "lucide-react";

interface UserTypeSelectionProps {
  onSelectUserType: (type: UserType) => void;
}

export function UserTypeSelection({
  onSelectUserType,
}: UserTypeSelectionProps) {
  return (
    <div className="space-y-4">
      <p className="text-center text-muted-foreground mb-4">
        Select the type of account you want to create
      </p>
      <div className="grid grid-cols-1 gap-4">
        <button
          onClick={() => onSelectUserType("freelancer")}
          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-6  hover:bg-muted hover:text-accent-foreground transition-colors h-40"
        >
          <User className="mb-3 h-10 w-10 text-nexapurple-600" />
          <h3 className="text-lg font-medium">Freelancer</h3>
          <p className="text-sm text-muted-foreground text-center mt-2">
            Find work, showcase your skills, and get paid for your expertise
          </p>
        </button>

        <button
          onClick={() => onSelectUserType("business")}
          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-6 hover:bg-muted hover:text-accent-foreground transition-colors h-40"
        >
          <Building className="mb-3 h-10 w-10 text-nexapurple-600" />
          <h3 className="text-lg font-medium">Business</h3>
          <p className="text-sm text-muted-foreground text-center mt-2">
            Hire talent, manage projects, and grow your business
          </p>
        </button>

        <button
          onClick={() => onSelectUserType("job-poster")}
          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-6 hover:bg-muted hover:text-accent-foreground transition-colors h-40"
        >
          <Briefcase className="mb-3 h-10 w-10 text-nexapurple-600" />
          <h3 className="text-lg font-medium">Job Poster</h3>
          <p className="text-sm text-muted-foreground text-center mt-2">
            Post jobs, find qualified candidates, and complete projects
          </p>
        </button>
      </div>
    </div>
  );
}
