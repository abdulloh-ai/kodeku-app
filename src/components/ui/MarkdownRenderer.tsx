import React from 'react';

interface MarkdownRendererProps {
  content: string;
  videoUrl?: string | null;
}

export function extractYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}`;
  }
  return null;
}

export default function MarkdownRenderer({ content, videoUrl }: MarkdownRendererProps) {
  const embedVideoUrl = videoUrl ? extractYouTubeEmbedUrl(videoUrl) : null;

  // Simple, fast Markdown Line Parser
  const parseMarkdownLine = (line: string, key: number) => {
    if (line.startsWith('# ')) {
      return <h1 key={key} className="text-2xl font-extrabold text-slate-900 border-b border-slate-200 pb-2 mt-6 mb-3">{line.replace('# ', '')}</h1>;
    }
    if (line.startsWith('## ')) {
      return <h2 key={key} className="text-xl font-bold text-slate-900 mt-5 mb-2">{line.replace('## ', '')}</h2>;
    }
    if (line.startsWith('### ')) {
      return <h3 key={key} className="text-lg font-bold text-slate-800 mt-4 mb-2">{line.replace('### ', '')}</h3>;
    }
    if (line.startsWith('- ') || line.startsWith('* ')) {
      return (
        <li key={key} className="ml-5 list-disc text-slate-700 my-1 font-medium">
          {line.substring(2)}
        </li>
      );
    }
    if (line.startsWith('> ')) {
      return (
        <blockquote key={key} className="border-l-4 border-blue-600 bg-blue-50/50 p-4 rounded-r-lg text-slate-700 italic my-4 font-medium">
          {line.replace('> ', '')}
        </blockquote>
      );
    }
    if (line.startsWith('```')) {
      return null;
    }
    if (line.trim() === '') {
      return <div key={key} className="h-2"></div>;
    }

    // Bold & Inline Code Parser
    const formattedText = line.split(/(\*\*.*?\*\*|`.*?`)/g).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-extrabold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={index} className="bg-slate-100 text-blue-700 font-mono text-xs px-1.5 py-0.5 rounded border border-slate-200">{part.slice(1, -1)}</code>;
      }
      return part;
    });

    return <p key={key} className="text-slate-700 leading-relaxed text-sm my-2">{formattedText}</p>;
  };

  const lines = content.split('\n');

  return (
    <div className="space-y-6">
      {/* Video YouTube 16:9 Responsive Player jika ada */}
      {embedVideoUrl && (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 mb-6">
          <iframe
            src={embedVideoUrl}
            title="Video Pembelajaran Kodemik"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Render Content Markdown */}
      <div className="prose prose-slate max-w-none text-slate-800 text-sm leading-relaxed">
        {lines.map((line, idx) => parseMarkdownLine(line, idx))}
      </div>
    </div>
  );
}
