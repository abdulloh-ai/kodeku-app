export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-8 mt-auto text-center text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} <strong className="text-white">Kodemik LMS</strong>. Platform Kursus IT Terstruktur Bahasa Indonesia. All rights reserved.</p>
      </div>
    </footer>
  );
}
