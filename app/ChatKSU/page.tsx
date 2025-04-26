"use client"

import type React from "react"
import Head from "next/head"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Copy } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function IdeaAnalyzerPage() {
  const [idea, setIdea] = useState("")
  const [analysis, setAnalysis] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)

  const exampleIdeas = [
    "شروط الترقية لأعضاء هيئة التدريس",
    "شروط التحويل إلى كلية علوم الحاسب والمعلومات ",
  ]

  const handleIdeaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setIdea(value)
  }

  const handleExampleClick = (example: string) => {
    setIdea(example)
  }

  const analyzeIdea = async () => {
    if (!idea.trim()) {
      setError("الرجاء إدخال سؤالك أولاً")
      return
    }

    setIsLoading(true)
    setError("")
    setAnalysis("")

    try {
      const input = idea.toLowerCase()

      if (input.includes("الترقية")) {
        setAnalysis(`<h2>✅ شروط الترقية لأعضاء هيئة التدريس:</h2>
        <ul>
          <li>خدمة لا تقل عن 4 سنوات في الرتبة الحالية.</li>
          <li>نشر أو قبول الإنتاج العلمي أثناء فترة العمل بالرتبة.</li>
          <li>استيفاء الحد الأدنى من الإنتاج العلمي حسب اللوائح.</li>
          <li>التقييم بناءً على:
            <ul>
              <li>الإنتاج العلمي: 60 نقطة</li>
              <li>التدريس: 25 نقطة</li>
              <li>خدمة الجامعة والمجتمع: 15 نقطة</li>
            </ul>
          </li>
        </ul>
        <strong>يجب تحقيق 100 نقطة على الأقل للترقية.</strong>`)
        setIsLoading(false)
        return
      }

      if (input.includes("التحويل") && input.includes("الحاسب")) {
        setAnalysis(`<h2>✅ شروط التحويل إلى كلية علوم الحاسب والمعلومات:</h2>
        <ul>
          <li>إكمال فصل دراسي واحد على الأقل (12 وحدة معتمدة).</li>
          <li>معدل تراكمي لا يقل عن 4.00.</li>
          <li>وجود مقاعد متاحة في القسم المطلوب.</li>
          <li>النسبة المركبة تعتمد على:
            <ul>
              <li>25% من درجة التحصيلي</li>
              <li>25% من درجة القدرات</li>
              <li>25% من المعدل التراكمي</li>
              <li>25% من المعدل في الرياضيات والإحصاء والفيزياء</li>
            </ul>
          </li>
        </ul>
        <strong>النسبة الكلية: 100 نقطة</strong>`)
        setIsLoading(false)
        return
      }

      const apiEndpoint = "https://api.openai.com/v1/chat/completions"

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer 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`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: idea }]
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`حدث خطأ: ${errorText}`)
      }

      const data = await response.json()

      if (!data.choices || !data.choices[0]?.message?.content) {
        throw new Error("لم يتم استلام نتيجة التحليل من الخادم")
      }

      setAnalysis(data.choices[0].message.content)
    } catch (err) {
      setError(err instanceof Error ? err.message : "❌ حدث خطأ أثناء التحليل")
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = () => {
    if (!analysis) return
    navigator.clipboard.writeText(analysis).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }, (err) => {
      console.error("Could not copy text: ", err)
    })
  }

  return (
    <>
      <Head>
        <title>ChatKSU</title>
        <meta name="description" content="دليل شامل لشروط التحويل إلى كلية علوم الحاسب والمعلومات بجامعة الملك سعود، وشروط الترقية لأعضاء هيئة التدريس." />
        <meta name="keywords" content="شروط التحويل, كلية الحاسب, جامعة الملك سعود, شروط الترقية, هيئة التدريس, تحويل جامعي, الترقيات الأكاديمية" />
        <meta property="og:title" content="شروط الترقية والتحويل إلى كلية الحاسب" />
        <meta property="og:description" content="تعرف على متطلبات التحويل إلى كلية علوم الحاسب ومتطلبات الترقية في جامعة الملك سعود بالتفصيل." />
      </Head>

      <div className="flex flex-col min-h-screen justify-center items-center p-6 space-y-6">
        <h1 className="text-4xl font-bold text-ksu-blue text-center">ChatKSU </h1>
        
        {/* Textarea للمستخدم */}
        <Textarea
          placeholder=" اكتب سؤالك هنا..."
          value={idea}
          onChange={handleIdeaChange}
          className="w-full max-w-2xl min-h-[120px] p-4 text-right border rounded-md"
          dir="rtl"
          maxLength={500}
        />

        {/* أمثلة سريعة */}
        <div className="flex flex-wrap gap-4 justify-center">
          {exampleIdeas.map((example, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleExampleClick(example)}
              className="text-right w-64"
              dir="rtl"
            >
              {example}
            </Button>
          ))}
        </div>

        {/* زر التحليل */}
        <Button onClick={analyzeIdea} disabled={isLoading} className="w-40 bg-ksu-blue hover:bg-ksu-blue/90">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              جاري التحليل...
            </>
          ) : (
            " حلل السؤال"
          )}
        </Button>

        {/* عرض النتيجة */}
        {error && (
          <Alert variant="destructive" className="max-w-2xl">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {analysis && (
          <Card className="max-w-2xl w-full p-4">
            <CardContent>
              <div
                className="prose text-right"
                dir="rtl"
                dangerouslySetInnerHTML={{
                  __html: analysis.replace(/\n/g, "<br />"),
                }}
              />
              <div className="text-left mt-4">
                <Button variant="outline" size="sm" onClick={copyToClipboard}>
                  <Copy className="h-4 w-4 mr-2" />
                  {copied ? "تم النسخ!" : "نسخ الإجابة"}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  )
}
