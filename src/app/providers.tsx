'use client';

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { ModalProvider } from "@/components/modal/ModalProvider";

export default function Providers({ children }: { children: ReactNode }) {
  // чтобы QueryClient не пересоздавался при рендере
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ModalProvider>

          {children}
          <Toaster />
          <Sonner />
        </ModalProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
