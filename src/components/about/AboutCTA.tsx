// src/components/about/AboutCTA.tsx
import { CheckCircle, Mail } from "lucide-react";
import Link from 'next/link';

export default function AboutCTA({ dictionary }: { dictionary: any }) {
  return (
    <section className="py-24 bg-gradient-to-t from-background to-muted/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
          {dictionary?.headline ?? "Join the Qezvoro Financial Revolution"}
        </h2>
        <p className="max-w-3xl mx-auto text-muted-foreground mb-10">
          {dictionary?.subheadline ?? "Our story is just getting started. Become part of a global community that is already shaping their financial future with artificial intelligence."}
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12 text-left">
            <div>
                <h3 className="font-bold text-xl mb-4">{dictionary?.benefits?.title}</h3>
                <ul className="space-y-3">
                    {dictionary?.benefits?.list?.map((item: string, i: number) => (
                         <li key={i} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"/>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
             <div>
                <h3 className="font-bold text-xl mb-4">{dictionary?.resources?.title}</h3>
                <ul className="space-y-2">
                    {dictionary?.resources?.links?.map((link: any, i: number) => (
                         <li key={i}>
                            <Link href="#" className="text-primary hover:underline">{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div>
            <h3 className="font-bold text-xl mb-4">{dictionary?.contacts?.title}</h3>
            <div className="flex justify-center items-center gap-6 flex-wrap">
                 {dictionary?.contacts?.emails?.map((email: string, i: number) => (
                    <a key={i} href={`mailto:${email}`} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                        <Mail className="w-4 h-4"/>{email}
                    </a>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}