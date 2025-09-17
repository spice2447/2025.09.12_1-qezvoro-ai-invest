import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap } from "lucide-react";
import { useState } from "react";

type Props = { t: any; locale?: string };

const QuickRegistrationForm = ({ t, locale }: Props) => {
  const tt = t?.quickForm ?? {};

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    fullName: "",
    experience: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData, { locale });
  };

  return (
    <Card className="card-gradient border-primary/20 glow">
      <CardHeader>
        <CardTitle className="text-2xl gradient-text">
          {tt.formTitle ?? "Начать инвестирование"}
        </CardTitle>
        <CardDescription>
          {tt.formSubtitle ??
            "Заполните форму и получите доступ к ИИ-анализу рынка"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">
              {tt.fields?.email ?? "Email-адрес"}
            </Label>
            <Input
              id="email"
              type="email"
              placeholder={tt.fields?.emailPlaceholder ?? "your@email.com"}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              {tt.fields?.phone ?? "Номер телефона"}
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder={tt.fields?.phonePlaceholder ?? "+1 (202) 555-0147"}
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fullName">
              {tt.fields?.fullName ?? "Полное имя"}
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder={tt.fields?.namePlaceholder ?? "Иван Иванов"}
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              required
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full gradient-bg hover:opacity-90 transition-all"
          >
            <Zap className="w-5 h-5 mr-2" />
            {tt.action ?? "Активировать ИИ-анализ"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            {tt.smallText?.byPressing ??
              "Нажимая кнопку, вы соглашаетесь с нашими"}{" "}
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
  );
};

export default QuickRegistrationForm;
