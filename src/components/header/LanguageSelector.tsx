'use client';

import { useRouter, usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/locales"; // <= было "@/lib/i18n"
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export default function LanguageSelector({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const current = locales.find(l => l.code === locale) ?? locales[0];

  function switchLocale(code: Locale) {
    const parts = pathname.split("/");
    // parts[0] === "" (из-за лидирующего "/"), локаль — в parts[1]
    parts[1] = code;
    const next = parts.join("/") || `/${code}`;

    document.cookie = `locale=${code}; Path=/; Max-Age=31536000; SameSite=Lax`;

    router.push(next);
  }

  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center space-x-2">
          <span className="text-lg">{current.flag}</span>
          <span className="text-sm">{current.name}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {locales.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLocale(lang.code)}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
