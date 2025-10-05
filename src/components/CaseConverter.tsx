import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCaseConverter } from "@/hooks/useCaseConverter";
import { toast } from "sonner";
import { Clipboard, ClipboardCheck, Trash2 } from "lucide-react"; // ✅ Icons
import { useState } from "react";

const CaseConverter = () => {
  const {
    text,
    setText,
    activeCase,
    handleSentenceCase,
    handleLowerCase,
    handleUpperCase,
    handleCapitalizeCase,
    handleTitleCase,
    handleClear,
  } = useCaseConverter();

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (text) {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Copied to clipboard ✅");

      // Reset icon after 2s
      setTimeout(() => setCopied(false), 2000);
    } else {
      toast.error("Nothing to copy ❌");
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-2xl rounded-2xl border bg-white">
      <CardHeader>
        <CardTitle className="text-center text-3xl font-bold text-gray-800">
          🔠 Case Converter Tool
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Case Buttons Toolbar */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <Button
            onClick={handleSentenceCase}
            variant={activeCase === "sentence" ? "default" : "outline"}
            className={`cursor-pointer ${
              activeCase === "sentence"
                ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white"
                : ""
            }`}
          >
            Sentence Case
          </Button>
          <Button
            onClick={handleLowerCase}
            variant={activeCase === "lower" ? "default" : "outline"}
            className={`cursor-pointer ${
              activeCase === "lower"
                ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white"
                : ""
            }`}
          >
            lower case
          </Button>
          <Button
            onClick={handleUpperCase}
            variant={activeCase === "upper" ? "default" : "outline"}
            className={`cursor-pointer ${
              activeCase === "upper"
                ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white"
                : ""
            }`}
          >
            UPPER CASE
          </Button>
          <Button
            onClick={handleCapitalizeCase}
            variant={activeCase === "capitalize" ? "default" : "outline"}
            className={`cursor-pointer ${
              activeCase === "capitalize"
                ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white"
                : ""
            }`}
          >
            Capitalize Case
          </Button>
          <Button
            onClick={handleTitleCase}
            variant={activeCase === "title" ? "default" : "outline"}
            className={`cursor-pointer ${
              activeCase === "title"
                ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white"
                : ""
            }`}
          >
            Title Case
          </Button>
        </div>

        {/* Text Area */}
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="✍️ Type or paste your text here..."
          className="min-h-[200px] mb-4 text-lg p-4 border rounded-xl shadow-sm"
          spellCheck={false} // ✅ disable grammar
        />

        {/* Clear & Copy */}
        <div className="flex justify-end gap-3">
          <Button
            onClick={handleClear}
            variant="destructive"
            className="cursor-pointer flex items-center gap-2"
          >
            <Trash2 size={18} />
            Clear
          </Button>
          <Button
            onClick={handleCopy}
            variant="outline"
            className="cursor-pointer flex items-center gap-2"
          >
            {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
            {copied ? "Copied" : "Copy"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseConverter;
