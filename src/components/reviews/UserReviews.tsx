// src/components/reviews/UserReviews.tsx
'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

// Placeholder data
const reviews = {
  beginner: [
    { name: "Emily Rodriguez", role: "Marketing, Austin", review: "+28% in 4 months, starting with $200, now at $5,000." },
    { name: "David Kim", role: "IT Developer, Seattle", review: "+42.5% in 6 months, which translated to a $3,400 profit." },
  ],
  professional: [
    { name: "Michael Anderson", role: "Portfolio Manager, NY", review: "Grew my $2M AUM from 18% to 31% annually using their API automation." },
    { name: "Jonathan Wilson", role: "Hedge Fund Manager, Chicago", review: "The arbitrage signals are unmatched. Achieved a 187% ROI last year." },
  ],
  international: [
      { name: "James Richardson", role: "Advisor, NY", review: "+43% in emerging markets portfolio." },
      { name: "Hans Mueller", role: "Entrepreneur, Berlin", review: "+29% in 10 months, passive AI portfolio mgmt." },
  ]
};

const ReviewCard = ({ review }: { review: any }) => (
  <Card className="bg-muted/30 border-primary/10">
    <CardHeader>
      <CardTitle className="text-lg">{review.name}</CardTitle>
      <p className="text-sm text-muted-foreground">{review.role}</p>
    </CardHeader>
    <CardContent>
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
      </div>
      <p className="italic">"{review.review}"</p>
    </CardContent>
  </Card>
);


export default function UserReviews({ dictionary }: { dictionary: any }) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {dictionary?.title ?? "Trusted by Investors Worldwide"}
        </h2>
        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="beginner">Beginner Investors</TabsTrigger>
            <TabsTrigger value="professional">Professional Traders</TabsTrigger>
            <TabsTrigger value="international">International</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid md:grid-cols-2 gap-6">
              {[...reviews.beginner, ...reviews.professional, ...reviews.international].map((r, i) => <ReviewCard key={i} review={r} />)}
            </div>
          </TabsContent>
          <TabsContent value="beginner">
            <div className="grid md:grid-cols-2 gap-6">
              {reviews.beginner.map((r, i) => <ReviewCard key={i} review={r} />)}
            </div>
          </TabsContent>
          <TabsContent value="professional">
             <div className="grid md:grid-cols-2 gap-6">
              {reviews.professional.map((r, i) => <ReviewCard key={i} review={r} />)}
            </div>
          </TabsContent>
          <TabsContent value="international">
             <div className="grid md:grid-cols-2 gap-6">
              {reviews.international.map((r, i) => <ReviewCard key={i} review={r} />)}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}