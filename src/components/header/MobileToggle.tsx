'use client';

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function MobileToggle({
  open, onToggle
}: { open: boolean; onToggle: () => void }) {
  return (
    <Button variant="ghost" size="sm" className="lg:hidden" onClick={onToggle}>
      {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </Button>
  );
}
