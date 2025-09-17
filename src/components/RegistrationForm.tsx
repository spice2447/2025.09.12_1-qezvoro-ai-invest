import { Shield, Users, Zap } from "lucide-react";
import QuickRegistrationForm from "./forms/QuickRegistrationForm";

type Props = { t: any; locale?: string };

const RegistrationForm = ({ t, locale }: Props) => {
  const tt = t?.quickForm ?? {};

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
            <QuickRegistrationForm t={t} locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
