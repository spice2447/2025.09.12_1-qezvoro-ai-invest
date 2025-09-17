import { ShieldCheck, Lock, BadgeCheck, FileCheck2 } from "lucide-react";

const Item = ({ icon: Icon, title, subtitle }:{icon:any; title:string; subtitle:string}) => (
  <div className="flex items-start gap-3">
    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <div>
      <div className="font-medium">{title}</div>
      <div className="text-sm text-muted-foreground">{subtitle}</div>
    </div>
  </div>
);

export default function SecurityBadges({ dictionary }: { dictionary: any }) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Item icon={ShieldCheck} title={dictionary.licenses} subtitle={dictionary.licensesDesc} />
          <Item icon={BadgeCheck} title={dictionary.insurance} subtitle={dictionary.insuranceDesc} />
          <Item icon={Lock} title={dictionary.encryption} subtitle={dictionary.encryptionDesc} />
          <Item icon={FileCheck2} title={dictionary.audit} subtitle={dictionary.auditDesc} />
        </div>
      </div>
    </section>
  );
}
