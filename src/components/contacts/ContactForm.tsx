'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function ContactForm({ dictionary }: { dictionary: any }) {
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
        <CardTitle className="text-2xl">{dictionary.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">{dictionary.nameLabel}</label>
              <Input name="name" placeholder={dictionary.namePlaceholder} required />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">{dictionary.emailLabel}</label>
              <Input name="email" type="email" placeholder={dictionary.emailPlaceholder} required />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">{dictionary.phoneLabel}</label>
              <Input name="phone" placeholder={dictionary.phonePlaceholder} />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">{dictionary.experienceLabel}</label>
              <Select name="experience">
                <SelectTrigger><SelectValue placeholder={dictionary.experiencePlaceholder} /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">{dictionary.experienceOptions.beginner}</SelectItem>
                  <SelectItem value="1-3">{dictionary.experienceOptions["1-3"]}</SelectItem>
                  <SelectItem value="3-5">{dictionary.experienceOptions["3-5"]}</SelectItem>
                  <SelectItem value="5+">{dictionary.experienceOptions["5+"]}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{dictionary.budgetLabel}</label>
            <Select name="budget">
              <SelectTrigger><SelectValue placeholder={dictionary.budgetPlaceholder} /></SelectTrigger>
              <SelectContent>
                <SelectItem value="100-1000">{dictionary.budgetOptions["100-1000"]}</SelectItem>
                <SelectItem value="1k-10k">{dictionary.budgetOptions["1k-10k"]}</SelectItem>
                <SelectItem value="10k-100k">{dictionary.budgetOptions["10k-100k"]}</SelectItem>
                <SelectItem value="100k+">{dictionary.budgetOptions["100k+"]}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{dictionary.messageLabel}</label>
            <Textarea name="message" placeholder={dictionary.messagePlaceholder} rows={4} />
          </div>

          <div className="flex items-start gap-3">
            <Checkbox id="agree" checked={agree} onCheckedChange={(v) => setAgree(Boolean(v))} />
            <label htmlFor="agree" className="text-sm text-muted-foreground">
              {dictionary.agreeLabel}<a className="underline" href="/ru/privacy" target="_blank">{dictionary.termsLink}</a>{dictionary.and}<a className="underline" href="/ru/privacy">{dictionary.privacyLink}</a>
            </label>
          </div>

          <Button
            type="submit"
            disabled={submitting || !agree}
            className="w-full gradient-bg hover:opacity-90 transition-opacity"
          >
            {submitting ? dictionary.submittingButton : dictionary.submitButton}
          </Button>

          {/* подписи под формой */}
          <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1 text-sm text-muted-foreground mt-2">
            {dictionary.formPerks.map((perk: string) => <li key={perk}>{perk}</li>)}
          </ul>
        </form>
      </CardContent>
    </Card>
  );
}
