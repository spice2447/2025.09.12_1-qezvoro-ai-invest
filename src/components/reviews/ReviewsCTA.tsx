// src/components/reviews/ReviewsCTA.tsx
import QuickRegistrationForm from "@/components/forms/QuickRegistrationForm";
import { CheckCircle } from 'lucide-react';

export default function ReviewsCTA({ dictionary, t }: { dictionary: any, t: any }) {
    const stats = [
        { value: '98%', label: 'renew their subscription' },
        { value: '89%', label: 'new clients via recommendations' },
        { value: '4.9/5.0', label: 'average rating' },
    ];

    return (
        <section className="py-24 bg-gradient-to-t from-background to-muted/20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                            {dictionary?.headline ?? "Join the Community of Successful Investors"}
                        </h2>
                        <p className="text-muted-foreground">
                            {dictionary?.quote ?? '"Qezvoro\'s AI tools provide an analytical edge that is simply indispensable in today\'s markets." - Dmitry Grishankov, Runa Capital'}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                           {stats.map(stat => (
                               <div key={stat.label}>
                                   <p className="text-2xl font-bold text-primary">{stat.value}</p>
                                   <p className="text-sm text-muted-foreground">{stat.label}</p>
                               </div>
                           ))}
                        </div>
                         <ul className="space-y-2">
                           <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2"/> 30-day refund guarantee</li>
                           <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2"/> Regular PwC audits</li>
                           <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2"/> Lloyd's deposit insurance</li>
                        </ul>
                    </div>
                    <div>
                        <QuickRegistrationForm t={t} />
                    </div>
                </div>
            </div>
        </section>
    );
}