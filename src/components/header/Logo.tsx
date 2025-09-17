import Link from "next/link";

export default function Logo({ locale }: { locale: string }) {
  return (
    <Link href={`/${locale}`} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
      {/* <img src="/assets/qezvoro-logo.png" alt="Qezvoro Invest" className="h-10 w-auto" /> */}
      <img src="/assets/logo.jpeg" alt="Qezvoro Invest" className="h-10 w-auto rounded-md" />
      <span className="text-xl font-bold gradient-text">Qezvoro Invest</span>
    </Link>
  );
}
