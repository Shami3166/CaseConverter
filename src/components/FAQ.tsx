import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  HelpCircle,
  Zap,
  Smartphone,
  Shield,
  Clock,
  Wand2,
  FileText,
  Rocket,
  Type,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function FAQ() {
  const faqItems = [
    {
      value: "item-1",
      question: "What does a Case Converter do?",
      answer:
        "A Case Converter instantly changes your text style into different cases like UPPERCASE, lowercase, Sentence case, Title Case, and Capitalized Case. It’s perfect for writers, students, and developers who need quick text formatting without any software.",
      icon: <HelpCircle className="h-5 w-5 text-blue-600" />,
    },
    {
      value: "item-2",
      question: "Is this tool completely free?",
      answer:
        "Yes! It’s 100% free to use — no sign-up, no hidden costs, and no limits. You can use it as much as you like without any restrictions.",
      icon: <Zap className="h-5 w-5 text-green-600" />,
    },
    {
      value: "item-3",
      question: "Does it work on mobile?",
      answer:
        "Definitely! The Case Converter is fully responsive and works perfectly on phones, tablets, and desktop devices.",
      icon: <Smartphone className="h-5 w-5 text-purple-600" />,
    },
    {
      value: "item-4",
      question: "Is my text safe here?",
      answer:
        "Yes, your text is 100% safe. All conversions happen in your browser — nothing is uploaded, stored, or tracked on our servers.",
      icon: <Shield className="h-5 w-5 text-red-600" />,
    },
    {
      value: "item-5",
      question: "What happens if you don't use a converter?",
      answer:
        "Without a converter, formatting text manually can take a lot of time and may lead to inconsistency. A case converter saves time and ensures your content looks clean and professional every time.",
      icon: <Lightbulb className="h-5 w-5 text-yellow-600" />,
    },
    {
      value: "item-6",
      question: "Why does Gen Z love lowercase?",
      answer:
        "Gen Z often uses lowercase text because it feels more casual, aesthetic, and less formal. It gives messages a friendly, relaxed vibe that fits with modern digital communication.",
      icon: <Type className="h-5 w-5 text-pink-600" />,
    },
    {
      value: "item-7",
      question: "Why type in capital letters?",
      answer:
        "Typing in all caps is often used to show emphasis, importance, or emotion — like shouting in text. However, using a case converter helps you balance tone by switching between cases easily.",
      icon: <Wand2 className="h-5 w-5 text-indigo-600" />,
    },
    {
      value: "item-8",
      question: "What is the purpose of a converter?",
      answer:
        "The purpose of a converter is to simplify formatting tasks by automatically transforming text into the desired case. It ensures consistency across documents, web content, or code.",
      icon: <FileText className="h-5 w-5 text-teal-600" />,
    },
    {
      value: "item-9",
      question: "How fast does it work?",
      answer:
        "Instantly! Since everything runs in your browser, there’s no delay — your text converts in real time as you click.",
      icon: <Clock className="h-5 w-5 text-orange-600" />,
    },
    {
      value: "item-10",
      question: "Can I request more features?",
      answer:
        "Absolutely! We’re always improving the Case Converter. If you have ideas or suggestions, reach out — we’d love to hear from you.",
      icon: <Rocket className="h-5 w-5 text-blue-500" />,
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg">
          Quick answers to common questions
        </p>
      </div>

      {/* FAQ Accordion */}
      <Card className="shadow-lg rounded-2xl border-0 bg-gradient-to-br from-white to-blue-50/30">
        <CardContent className="p-6">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="border border-gray-200 rounded-lg px-4 hover:shadow-md transition-all duration-200 hover:border-blue-200 data-[state=open]:border-blue-300 data-[state=open]:bg-blue-50/50"
              >
                <AccordionTrigger className="py-4 text-left hover:no-underline group">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors text-left">
                      {item.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-600 leading-relaxed">
                  <div className="pl-8 border-l-2 border-blue-200 ml-2">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Quick Help */}
      <div className="text-center mt-6">
        <Badge
          variant="secondary"
          className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-700"
        >
          💡 Need more help? Feel free to <Link className="underline" to="/contact">contact us!</Link>
        </Badge>
      </div>
    </div>
  );
}
