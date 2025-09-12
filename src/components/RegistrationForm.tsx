import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Zap } from "lucide-react";
import { useState } from "react";

type Props = { t: any; locale?: string };

const RegistrationForm = ({ t, locale }: Props) => {
  const tt = t?.quickForm ?? {};

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    fullName: "",
    experience: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData, { locale });
  };

  return (
    <section id="registration" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {(tt.title.slice(0, tt.title.indexOf(tt.titleAccent)) ?? "Запустите")} <span className="gradient-text">
                    {tt.titleAccent ?? "ИИ-инвестирование"}
                  </span>{" "}
                  {tt.title.slice(tt.title.indexOf(tt.titleAccent) + tt.titleAccent.length) ?? "за 60 секунд"}
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  {tt.desc ?? "Более 50 000 трейдеров доверяют нашим алгоритмам."}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      {tt.left?.freeRegTitle ?? "Бесплатная регистрация"}
                    </h3>
                    <p className="text-muted-foreground">
                      {tt.left?.freeRegText ?? "Никаких скрытых платежей или комиссий"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      {tt.left?.demoTitle ?? "Виртуальный счет для практики"}
                    </h3>
                    <p className="text-muted-foreground">
                      {tt.left?.demoText ?? "$100,000 виртуальных средств для обучения"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      {tt.left?.noOblTitle ?? "Никаких обязательств"}
                    </h3>
                    <p className="text-muted-foreground">
                      {tt.left?.noOblText ?? "Отмените в любое время без комиссий"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <Card className="card-gradient border-primary/20 glow">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">
                  {tt.formTitle ?? "Начать инвестирование"}
                </CardTitle>
                <CardDescription>
                  {tt.formSubtitle ?? "Заполните форму и получите доступ к ИИ-анализу рынка"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">{tt.fields?.email ?? "Email-адрес"}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={tt.form?.emailPlaceholder ?? "your@email.com"}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{tt.fields?.phone ?? "Номер телефона"}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={tt.form?.phonePlaceholder ?? "+7 (999) 123-45-67"}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fullName">{tt.fields?.fullName ?? "Полное имя"}</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder={tt.form?.namePlaceholder ?? "Иван Иванов"}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>{tt.fields?.experience ?? "Инвестиционный опыт"}</Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => setFormData({ ...formData, experience: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={tt.select?.placeholder ?? "Выберите ваш опыт"} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">
                          {tt.select.beginner ?? "Новичок (0-1 год)"}
                        </SelectItem>
                        <SelectItem value="intermediate">
                          {tt.select.intermediate ?? "Средний (1-3 года)"}
                        </SelectItem>
                        <SelectItem value="advanced">
                          {tt.select.advanced ?? "Продвинутый (3-5 лет)"}
                        </SelectItem>
                        <SelectItem value="expert">
                          {tt.select.expert ?? "Эксперт (5+ лет)"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" size="lg" className="w-full gradient-bg hover:opacity-90 transition-all">
                    <Zap className="w-5 h-5 mr-2" />
                    {tt.action ?? "Активировать ИИ-анализ"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    {tt.smallText?.byPressing ?? "Нажимая кнопку, вы соглашаетесь с нашими"}{" "}
                    <a href="#" className="text-primary hover:underline">
                      {tt.smallText?.terms ?? "условиями использования"}
                    </a>{" "}
                    {tt.smallText?.and ?? "и"}{" "}
                    <a href="#" className="text-primary hover:underline">
                      {tt.smallText?.privacy ?? "политикой конфиденциальности"}
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
