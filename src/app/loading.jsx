import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="container mx-auto min-h-screen px-5 md:px-16 py-10 z-999 bg-black ">

      <div className="flex justify-between items-center mb-10">
        <Skeleton className="h-10 w-28 bg-gray-300" /> 
        
        <div className="hidden md:flex gap-6">
          <Skeleton className="h-10 w-16 bg-gray-300" />
          <Skeleton className="h-10 w-16 bg-gray-300" />
          <Skeleton className="h-10 w-16 bg-gray-300" />
          <Skeleton className="h-10 w-16 bg-gray-300" />
        </div>

        <Skeleton className="h-10 w-28 bg-gray-300" /> 
      </div>

      {/* Hero section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-34  md:ml-30 md:mt-40">
        
        {/* Text side */}
        <div className="flex flex-col gap-4 w-full md:w-1/2 judstify-center items-center md:items-start md:justify-start">
          <Skeleton className="bg-gray-300 h-10 w-3/4" /> 
          <Skeleton className="bg-gray-300 h-6 w-1/2" />
          <Skeleton className="bg-gray-300 h-6 w-3/5" />
          <Skeleton className="bg-gray-300 h-6 w-1/3" />
          <Skeleton className="bg-gray-300 h-6 w-2/4" />
        </div>

        {/* Right image side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Skeleton className="h-100 w-80 rounded-xl bg-gray-300" /> 
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;
