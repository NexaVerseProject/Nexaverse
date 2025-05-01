import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar placeholder */}
      <div className="hidden md:block w-64 bg-background border-r h-screen">
        <Skeleton className="h-12 w-32 m-4" />
        <div className="px-4 space-y-8">
          <div className="space-y-3">
            <Skeleton className="h-4 w-24" />
            <div className="space-y-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
          <div className="space-y-3">
            <Skeleton className="h-4 w-24" />
            <div className="space-y-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Main content placeholder */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-6 max-w-[1800px] mx-auto w-full">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <Skeleton className="h-10 w-[250px]" />
                <Skeleton className="h-4 w-[180px]" />
              </div>
              <Skeleton className="h-10 w-[120px]" />
            </div>

            <div className="grid gap-4">
              <Skeleton className="h-[200px] w-full" />
              <Skeleton className="h-[200px] w-full" />
              <Skeleton className="h-[200px] w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
