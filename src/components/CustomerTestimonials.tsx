import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, TrendingUp, User, MapPin } from "lucide-react";
import { useState } from "react";

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

const CustomerTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Алексей К.",
      role: "Предприниматель",
      location: "Москва",
      content: "За 3 месяца использования Qezvoro мой портфель продемонстрировал 23% доходности, тогда как S&P 500 показал лишь 4% роста. ИИ-сигналы действительно эффективны — поймал ралли Tesla за неделю до официальных анонсов. ROI платформы окупился уже в первый месяц.",
      roi: "+23%",
      duration: "3 месяца",
      rating: 5,
      verified: true
    },
    {
      name: "Мария С.",
      role: "Дизайнер",
      location: "СПб",
      content: "Полный новичок в инвестировании, но благодаря образовательным материалам и ИИ-руководству уже получила прибыль в $3200 за 6 месяцев. Особенно ценю функцию автоматического стоп-лосса — несколько раз защитила от серьезных потерь во время волатильности рынка.",
      roi: "$3,200",
      duration: "6 месяцев",
      rating: 5,
      verified: true
    },
    {
      name: "Дмитрий В.",
      role: "Управляющий активами",
      location: "Екатеринбург",
      content: "15-летний опыт торговли, и могу констатировать: аналитика Qezvoro превосходит Bloomberg по скорости и точности прогнозов. Интеграция API позволяет автоматизировать стратегии. Средняя доходность выросла с 12% до 34% в год.",
      roi: "+34%",
      duration: "1 год",
      rating: 5,
      verified: true
    },
    {
      name: "Анна М.",
      role: "IT-специалист",
      location: "Новосибирск",
      content: "Скептически отношусь к 'волшебным' решениям, но результаты Qezvoro впечатляют. ИИ действительно находит паттерны, которые я бы упустила. За 8 месяцев криптопортфель вырос на 156%. Прозрачность операций и детальная аналитика убедили в надежности платформы.",
      roi: "+156%",
      duration: "8 месяцев", 
      rating: 5,
      verified: true
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Отзывы <span className="gradient-text">клиентов</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Реальный опыт наших пользователей — акцент на ROI, точность прогнозов, доверие и соответствие регуляторным требованиям.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="card-gradient border-primary/20 p-8 glow animate-fade-up">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold">{currentTestimonial.name}</h3>
                        {currentTestimonial.verified && (
                          <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
                            Проверен
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground">{currentTestimonial.role}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin className="w-3 h-3" />
                        {currentTestimonial.location}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < currentTestimonial.rating ? 'text-warning fill-current' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-lg leading-relaxed mb-6 italic">
                    "{currentTestimonial.content}"
                  </blockquote>
                </div>

                {/* Stats */}
                <div className="md:w-48 space-y-4">
                  <div className="bg-success/10 border border-success/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-success mb-1">
                      {currentTestimonial.roi}
                    </div>
                    <div className="text-sm text-muted-foreground">Доходность</div>
                  </div>
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-primary mb-1">
                      {currentTestimonial.duration}
                    </div>
                    <div className="text-sm text-muted-foreground">Период использования</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={prevTestimonial}
            className="border-primary/20 hover:bg-primary/10"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={nextTestimonial}
            className="border-primary/20 hover:bg-primary/10"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Trust Statement */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-success/20 to-primary/20 border border-success/30 rounded-full px-8 py-4">
            <TrendingUp className="w-6 h-6 text-success" />
            <span className="text-lg font-semibold">
              Многие пользователи поначалу скептически относились к вопросу{" "}
              <span className="gradient-text">"Qezvoro — афера или легитимная платформа?"</span>,
              но реальные результаты и прозрачность операций развеяли все сомнения.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;