import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contacts = () => {
  useEffect(() => {
    document.title = "Контакты — Qezvoro Invest";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "Свяжитесь с командой Qezvoro Invest. Получите консультацию по ИИ-инвестированию и поддержку 24/7. Офисы в Лондоне, Нью-Йорке, Сингапуре."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Свяжитесь с нами
              </h1>
              <p className="text-lg text-muted-foreground">
                Наша команда экспертов готова помочь вам начать путешествие в мир ИИ-инвестирования. 
                Получите персональную консультацию и поддержку 24/7.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="border-border/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="email@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Тема</label>
                    <Input placeholder="Консультация по инвестированию" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о ваших инвестиционных целях..." 
                      rows={4}
                    />
                  </div>
                  <Button className="w-full gradient-bg hover:opacity-90 transition-opacity">
                    Отправить сообщение
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="border-border/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl">Контактная информация</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">support@qezvoro.com</p>
                        <p className="text-muted-foreground">info@qezvoro.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Телефон</h3>
                        <p className="text-muted-foreground">+44 20 7946 0958 (Лондон)</p>
                        <p className="text-muted-foreground">+1 212 555 0123 (Нью-Йорк)</p>
                        <p className="text-muted-foreground">+65 6789 0123 (Сингапур)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Поддержка</h3>
                        <p className="text-muted-foreground">24 часа / 7 дней в неделю</p>
                        <p className="text-muted-foreground">Онлайн чат, телефон, email</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl">Офисы</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Лондон (Главный офис)</h3>
                        <p className="text-muted-foreground text-sm">
                          1 Canary Wharf<br />
                          London E14 5AB, UK
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Нью-Йорк</h3>
                        <p className="text-muted-foreground text-sm">
                          350 Fifth Avenue<br />
                          New York, NY 10118, USA
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Сингапур</h3>
                        <p className="text-muted-foreground text-sm">
                          1 Marina Bay<br />
                          Singapore 018989
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Готовы начать инвестировать с ИИ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Присоединяйтесь к 50,000+ инвесторов, которые уже используют наши алгоритмы
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg hover:opacity-90 transition-opacity">
                  Начать инвестирование
                </Button>
                <Button size="lg" variant="outline">
                  Демо-счет $100,000
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;