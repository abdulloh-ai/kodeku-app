import { NextResponse } from 'next/server';
import { getStudentSession } from '@/lib/student-auth';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const session = await getStudentSession();
  if (!session) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { modulId, userAnswers } = await req.json();

    if (!modulId || !userAnswers) {
      return NextResponse.json({ success: false, message: 'ModulId dan jawaban wajib diisi!' }, { status: 400 });
    }

    const quiz = await prisma.quiz.findUnique({
      where: { modulId },
    });

    if (!quiz) {
      return NextResponse.json({ success: false, message: 'Quiz tidak ditemukan untuk modul ini.' }, { status: 404 });
    }

    let questions: any[] = [];
    try {
      questions = JSON.parse(quiz.pertanyaan);
    } catch {
      questions = [
        {
          pertanyaan: quiz.pertanyaan,
          pilihanJawaban: JSON.parse(quiz.pilihanJawaban || '[]'),
          jawabanBenar: quiz.jawabanBenar,
        },
      ];
    }

    let correctCount = 0;
    const totalQuestions = questions.length;

    questions.forEach((q, idx) => {
      const selectedOptionIndex = userAnswers[idx];
      if (selectedOptionIndex !== undefined && parseInt(selectedOptionIndex) === q.jawabanBenar) {
        correctCount += 1;
      }
    });

    const score = Math.round((correctCount / totalQuestions) * 100);

    // Save progress & quiz score to ProgressBelajar
    const progress = await prisma.progressBelajar.upsert({
      where: {
        siswaId_modulId: {
          siswaId: session.id,
          modulId: modulId,
        },
      },
      update: {
        status: 'SELESAI',
        skorQuiz: score,
        waktuSelesai: new Date(),
      },
      create: {
        siswaId: session.id,
        modulId: modulId,
        status: 'SELESAI',
        skorQuiz: score,
        waktuSelesai: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      message: `Quiz selesai! Skor Anda: ${score}/100`,
      data: {
        score,
        correctCount,
        totalQuestions,
        progress,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
