// src/components/reviews/PartnerEcosystem.tsx
import Image from 'next/image';

// Placeholder data - use actual paths from /public
const partners = {
    exchange: [{ name: 'Binance', logo: '/assets/partners/binance.png' }, { name: 'Coinbase', logo: '/assets/partners/coinbase.png' }, { name: 'Interactive Brokers', logo: '/assets/partners/interactive_brokers.png' }],
    technology: [{ name: 'Google Cloud AI', logo: '/assets/partners/bloomberg.png' }, { name: 'NVIDIA', logo: '/assets/partners/binance.png' }, { name: 'Bloomberg', logo: '/assets/partners/bloomberg.png' }],
    banking: [{ name: 'JP Morgan Chase', logo: '/assets/partners/kraken.png' }, { name: 'HSBC', logo: '/assets/partners/coinbase.png' }, { name: 'State Street', logo: '/assets/partners/interactive_brokers.png' }],
};

const PartnerCategory = ({ title, items }: { title: string, items: any[] }) => (
    <div>
        <h3 className="text-2xl font-semibold mb-6 text-center">{title}</h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
            {items.map(partner => (
                <div key={partner.name} className="grayscale hover:grayscale-0 transition-all" title={partner.name}>
                    <Image src={partner.logo} alt={partner.name} width={150} height={50} style={{ objectFit: 'contain' }} />
                </div>
            ))}
        </div>
    </div>
);


export default function PartnerEcosystem({ dictionary }: { dictionary: any }) {
    return (
        <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    {dictionary?.title ?? "Our Partner Ecosystem"}
                </h2>
                <div className="space-y-16">
                    <PartnerCategory title="Exchange Integrations" items={partners.exchange} />
                    <PartnerCategory title="Technology Alliances" items={partners.technology} />
                    <PartnerCategory title="Banking & Custody" items={partners.banking} />
                </div>
            </div>
        </section>
    );
}