import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!, // تأكد إنك ضايفه في .env.local
});

export async function POST(req: Request) {
  const { idea } = await req.json();

  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "أنت مساعد ذكي تحلل أفكار المشاريع وتعطي تقييم مختصر.",
      },
      {
        role: "user",
        content: idea,
      },
    ],
  });

  return NextResponse.json({ result: chatCompletion.choices[0].message.content });
}
