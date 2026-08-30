import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const modulId = searchParams.get('modulId');

  if (!modulId) {
    return NextResponse.json({ success: false, message: 'ModulId wajib diisi' }, { status: 400 });
  }

  try {
    const quiz = await prisma.quiz.findUnique({
      where: { modulId },
    });

    if (!quiz) {
      return NextResponse.json({ success: true, data: null });
    }

    let questions = [];
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

    return NextResponse.json({
      success: true,
      data: {
        id: quiz.id,
        modulId: quiz.modulId,
        questions,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { modulId, questions } = await req.json();

    if (!modulId || !questions || !Array.isArray(questions) || questions.length === 0) {
      return NextResponse.json(
        { success: false, message: 'ModulId dan daftar pertanyaan quiz wajib diisi!' },
        { status: 400 }
      );
    }

    const questionsJSON = JSON.stringify(questions);
    const firstQuestionText = questions[0].pertanyaan || 'Quiz Modul';
    const firstQuestionOptions = JSON.stringify(questions[0].pilihanJawaban || []);
    const firstQuestionCorrect = questions[0].jawabanBenar ?? 0;

    const quiz = await prisma.quiz.upsert({
      where: { modulId },
      update: {
        pertanyaan: questionsJSON,
        pilihanJawaban: firstQuestionOptions,
        jawabanBenar: firstQuestionCorrect,
      },
      create: {
        modulId,
        pertanyaan: questionsJSON,
        pilihanJawaban: firstQuestionOptions,
        jawabanBenar: firstQuestionCorrect,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Quiz multi-soal berhasil disimpan untuk Modul!',
      data: quiz,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
