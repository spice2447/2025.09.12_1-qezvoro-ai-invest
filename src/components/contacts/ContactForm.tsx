'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactForm() {
  // (пример локального стейта; при необходимости добавишь react-hook-form/валидацию)
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
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
        <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
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

          <div>
            <label className="text-sm font-medium mb-2 block">Телефон</label>
            <Input name="phone" placeholder="+7 (999) 123-45-67" />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Тема</label>
            <Input name="subject" placeholder="Консультация по инвестированию" />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Сообщение</label>
            <Textarea name="message" placeholder="Расскажите о ваших инвестиционных целях..." rows={4} />
          </div>

          <Button
            type="submit"
            disabled={submitting}
            className="w-full gradient-bg hover:opacity-90 transition-opacity"
          >
            {submitting ? "Отправка..." : "Отправить сообщение"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
