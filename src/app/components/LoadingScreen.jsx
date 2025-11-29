import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="w-full min-h-screen px-5 md:px-16 py-10 z-999">

      <div className="flex justify-between items-center mb-10">
        <Skeleton className="h-6 w-28" /> 
        
        <div className="hidden md:flex gap-6">
          <Skeleton className="h-5 w-12" />
          <Skeleton className="h-5 w-12" />
          <Skeleton className="h-5 w-12" />
          <Skeleton className="h-5 w-12" />
        </div>

        <Skeleton className="h-8 w-28" /> 
      </div>

      {/* Hero section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-16">
        
        {/* Text side */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <Skeleton className="h-10 w-3/4" /> 
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-6 w-3/5" />
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-6 w-2/4" />
        </div>

        {/* Right image side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Skeleton className="h-80 w-60 rounded-xl" /> 
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;
