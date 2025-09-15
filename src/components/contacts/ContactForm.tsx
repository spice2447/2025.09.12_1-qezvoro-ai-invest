'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [agree, setAgree] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agree) return; // мягкая валидация согласия
    setSubmitting(true);
    try {
      // TODO: отправка формы
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Card className="border-border/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Получить доступ к ИИ-аналитике</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Имя</label>
              <Input name="name" placeholder="Ваше имя" required />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input name="email" type="email" placeholder="email@example.com" required />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Телефон</label>
              <Input name="phone" placeholder="+1 (202) 555-0147" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Опыт инвестирования</label>
              <Select name="experience">
                <SelectTrigger><SelectValue placeholder="Выберите опыт" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Новичок</SelectItem>
                  <SelectItem value="1-3">1–3 года</SelectItem>
                  <SelectItem value="3-5">3–5 лет</SelectItem>
                  <SelectItem value="5+">Более 5 лет</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Планируемая сумма инвестиций</label>
            <Select name="budget">
              <SelectTrigger><SelectValue placeholder="Выберите диапазон" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="100-1000">$100–1,000</SelectItem>
                <SelectItem value="1k-10k">$1,000–10,000</SelectItem>
                <SelectItem value="10k-100k">$10,000–100,000</SelectItem>
                <SelectItem value="100k+">Более $100,000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Сообщение</label>
            <Textarea name="message" placeholder="Расскажите о ваших инвестиционных целях..." rows={4} />
          </div>

          <div className="flex items-start gap-3">
            <Checkbox id="agree" checked={agree} onCheckedChange={(v) => setAgree(Boolean(v))} />
            <label htmlFor="agree" className="text-sm text-muted-foreground">
              Согласен с <a className="underline" href="/ru/privacy" target="_blank">условиями использования</a> и <a className="underline" href="/ru/privacy">политикой конфиденциальности</a>
            </label>
          </div>

          <Button
            type="submit"
            disabled={submitting || !agree}
            className="w-full gradient-bg hover:opacity-90 transition-opacity"
          >
            {submitting ? "Отправка..." : "Создать аккаунт бесплатно"}
          </Button>

          {/* подписи под формой */}
          <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1 text-sm text-muted-foreground mt-2">
            <li>✓ Регистрация за 2 минуты</li>
            <li>✓ Демо-счёт $100,000</li>
            <li>✓ 30 дней бесплатных ИИ-сигналов</li>
            <li>✓ Без обязательств</li>
          </ul>
        </form>
      </CardContent>
    </Card>
  );
}
