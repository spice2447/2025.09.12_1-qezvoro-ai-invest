import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, TrendingUp, User, MapPin } from "lucide-react";
import { useState } from "react";

type Props = { t: any };

interface Testimonial {
  name: string;
  role: string;
  location: string;
  content: string;
  roi: string;
  duration: string;
  rating: number;
  verified: boolean;
}

const CustomerTestimonials = ({ t }: Props) => {
  const tt = t?.testimonials ?? {};
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = (tt.items ?? []).map((item: any) => ({
    name: item.author,
    content: item.text,
    role: item.role,
    location: item.location,
    roi: item.roi,
    duration: '3',
    rating: 5,
    verified: true,
  }));

  if (testimonials.length === 0) {
    testimonials.push(
      {
        name: "Алексей К.",
        role: "Предприниматель",
        location: "Москва",
        content:
          "За 3 месяца +23% против +4% S&P 500. Сигналы помогли поймать ралли Tesla.",
        roi: "+23%",
        duration: "3 месяца",
        rating: 5,
        verified: true,
      },
       {
        name: "Мария С.",
        role: "Дизайнер",
        location: "Санкт-Петербург",
        content:
          "Новичок, но с ИИ-наставником +$3 200 за 6 месяцев. Авто-стоп-лосс спасал в волатильность.",
        roi: "+$3200",
        duration: "6 месяцев",
        rating: 5,
        verified: true,
      },
      {
        name: "Дмитрий В.",
        role: "Управляющий активами",
        location: "Екатеринбург",
        content:
          "Аналитика превосходит альтернативы. API автоматизировал стратегии. Доходность 34%/год.",
        roi: "+34%/год",
        duration: "1 год",
        rating: 5,
        verified: true,
      },
    )
  }

  const next = () => setCurrentIndex((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
  const cur = testimonials[currentIndex];
  console.log('testimonials:', tt.items)
  console.log('cur:', cur)

  return (
    <section id="reviews" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {(tt.title ?? "Отзывы о Qezvoro: реальный опыт")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {tt.subtitle ??
              "Реальный опыт пользователей — акцент на ROI, точность прогнозов, доверие и соответствие регуляторным требованиям."}
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="card-gradient border-primary/20 p-8 glow animate-fade-up">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold">{cur.name}</h3>
                        {cur.verified && (
                          <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
                            {tt.labels?.verified ?? "Проверен"}
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground">{cur.role}</p>
                      {/* <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin className="w-3 h-3" />
                        {cur.location}
                      </div> */}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < cur.rating ? "text-yellow-500 fill-current" : "text-muted-foreground"}`} />
                    ))}
                  </div>

                  <blockquote className="text-lg leading-relaxed mb-6 italic">"{cur.content}"</blockquote>
                </div>

                <div className="md:w-48 space-y-4">
                  <div className="bg-success/10 border border-success/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-success mb-1">{cur.roi}</div>
                    <div className="text-sm text-muted-foreground">{tt.labels?.roi ?? "Доходность"}</div>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-primary mb-1">{cur.duration}</div>
                    <div className="text-sm text-muted-foreground">{tt.labels?.period ?? "Период использования"}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          <Button variant="outline" size="sm" onClick={prev} className="border-primary/20 hover:bg-primary/10">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"}`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
          <Button variant="outline" size="sm" onClick={next} className="border-primary/20 hover:bg-primary/10">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-success/20 to-primary/20 border border-success/30 rounded-full px-8 py-4">
            <TrendingUp className="w-6 h-6 text-success" />
            <span className="text-lg font-semibold">
              {tt.banner ??
                "Многие пользователи поначалу скептически относились к вопросу «Qezvoro — афера или платформа?», но результаты и прозрачность развеяли сомнения."}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
