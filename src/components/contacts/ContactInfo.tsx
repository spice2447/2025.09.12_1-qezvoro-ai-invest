import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Clock, MessageCircle } from "lucide-react";

export default function ContactInfo({ dictionary }: { dictionary: any }) {
  return (
    <Card className="border-border/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl">{dictionary.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{dictionary.email.title}</h3>
            <p className="text-muted-foreground">{dictionary.email.support}</p>
            <p className="text-muted-foreground">{dictionary.email.sales}</p>
            <p className="text-muted-foreground">{dictionary.email.partners}</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <MessageCircle className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{dictionary.messengers.title}</h3>
            <p className="text-muted-foreground">{dictionary.messengers.telegram}</p>
            <p className="text-muted-foreground">{dictionary.messengers.whatsapp}</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{dictionary.phone.title}</h3>
            <p className="text-muted-foreground">{dictionary.phone.london}</p>
            <p className="text-muted-foreground">{dictionary.phone.ny}</p>
            <p className="text-muted-foreground">{dictionary.phone.singapore}</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{dictionary.support.title}</h3>
            <p className="text-muted-foreground">{dictionary.support.responseTime}</p>
            <p className="text-muted-foreground">{dictionary.support.channels}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
