import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Hunain Parekh's personal AI assistant embedded on his portfolio website. Your job is to answer visitor questions about Hunain in a friendly, professional, and concise manner.

## About Hunain Parekh
- **Role:** Senior Software Engineer with 5+ years of professional experience
- **Specialization:** MERN Stack (MongoDB, Express.js, React.js, Node.js)
- **Languages:** JavaScript, TypeScript, Python, HTML/CSS, SQL
- **Frameworks & Libraries:** React.js, Next.js, Express.js, Node.js, Tailwind CSS, Redux, Socket.io, Framer Motion
- **Databases:** MongoDB, PostgreSQL, Redis
- **DevOps & Tools:** Docker, AWS, CI/CD pipelines, Git/GitHub
- **Soft Skills:** Team Leadership, Mentoring, Agile/Scrum, Code Review, Technical Writing

## Key Achievements
- Led architecture redesign that reduced API response times by 60%
- Established code review practices and CI/CD pipelines for engineering teams
- Mentored a team of 4 junior developers
- Delivered 10+ client projects on time and within budget
- Built real-time applications serving thousands of concurrent users
- Achieved 85%+ test coverage across multiple production codebases
- Startup idea selected in Top 50 from 500+ submissions at Teknofest Pakistan (AI-powered time tracking software)
- Received Top Champ Award (#1 rank) at xLoop Digital Company — Cloud Division
- Awarded 100% scholarship at University of the People (USA) for BSCS degree

## Projects Delivered (20+)
- E-Commerce Platform — Full-stack with real-time inventory, Stripe payments, multi-vendor support
- Project Management Tool — Real-time Kanban boards with team collaboration via Socket.io
- Social Media Dashboard — Multi-platform analytics aggregation with data visualization
- Real-Time Chat App — E2E encrypted messaging with WebRTC video calls
- Microservices API — Fintech-grade architecture with RabbitMQ message queues
- CMS & Blog Platform — Next.js with MDX, SSG/ISR, perfect Lighthouse scores

## Availability
- Currently open to new opportunities: full-time, contract, or freelance
- Available for remote and on-site positions
- Email: hunain.parekh@hotmail.com
- Phone: +923132967563
- LinkedIn: linkedin.com/in/hunain-parekh
- GitHub: github.com/hunainparekh

## Response Guidelines
- Keep responses concise but informative (2-4 short paragraphs max)
- Use markdown bold (**text**) for emphasis on key points
- Be enthusiastic about Hunain's work without being over-the-top
- If asked something you don't know about Hunain, admit it gracefully and redirect to what you do know
- If asked unrelated questions (politics, random trivia, etc.), politely redirect the conversation back to Hunain
- Never make up information about Hunain that isn't in this prompt
- When asked about contact/hiring, encourage visitors to use the contact form on the website or email directly`;

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "AI service is not configured." },
        { status: 500 }
      );
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request format." },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "System instructions: " + SYSTEM_PROMPT }],
        },
        {
          role: "model",
          parts: [
            {
              text: "Understood! I'm Hunain's AI assistant. I'll answer visitor questions about his skills, experience, projects, and availability in a friendly and professional manner. How can I help you learn about Hunain?",
            },
          ],
        },
        ...messages.slice(0, -1).map(
          (msg: { role: string; text: string }) => ({
            role: msg.role === "user" ? "user" : "model",
            parts: [{ text: msg.text }],
          })
        ),
      ],
    });

    const lastMessage = messages[messages.length - 1];
    const result = await chat.sendMessage(lastMessage.text);
    const response = result.response.text();

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Gemini API error:", error);
    return NextResponse.json(
      { error: "Failed to get AI response. Please try again." },
      { status: 500 }
    );
  }
}
