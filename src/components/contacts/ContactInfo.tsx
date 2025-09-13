import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Clock, MessageCircle } from "lucide-react";

export default function ContactInfo() {
  return (
    <Card className="border-border/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Свяжитесь с нами</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-muted-foreground">support@qezvoro.com — техподдержка</p>
            <p className="text-muted-foreground">sales@qezvoro.com — вопросы по тарифам</p>
            <p className="text-muted-foreground">partners@qezvoro.com — сотрудничество</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <MessageCircle className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Мессенджеры</h3>
            <p className="text-muted-foreground">Telegram: @QezvoroSupport</p>
            <p className="text-muted-foreground">WhatsApp: +1 (202) 555-0147</p>
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
            <p className="text-muted-foreground">Среднее время ответа — менее 2 минут в рабочее время</p>
            <p className="text-muted-foreground">Онлайн-чат, телефон, email</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
