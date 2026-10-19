import Link from "next/link";
import { ArrowRight, Home, Compass, FolderGit2, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center space-y-8">
        {/* Error Code */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#1877F2] dark:text-[#0BCB91] uppercase">
            Error 404 · Page Not Found
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#000B49] dark:text-white tracking-tight">
            Destination Outside Perimeter.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
            The page or resource you requested does not exist or may have been relocated during our architectural updates.
          </p>
        </div>

        {/* Helpful Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <Link
            href="/"
            className="p-4 rounded-2xl bg-white dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 hover:border-[#1877F2]/40 dark:hover:border-[#0BCB91]/40 shadow-xs hover:shadow-md transition-all flex items-center gap-3 group"
          >
            <div className="p-2 rounded-xl bg-blue-500/10 text-[#1877F2]">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#000B49] dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors">
                Homepage
              </div>
              <div className="text-[11px] text-slate-400">Back to main overview</div>
            </div>
          </Link>

          <Link
            href="/services"
            className="p-4 rounded-2xl bg-white dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 hover:border-[#1877F2]/40 dark:hover:border-[#0BCB91]/40 shadow-xs hover:shadow-md transition-all flex items-center gap-3 group"
          >
            <div className="p-2 rounded-xl bg-emerald-500/10 text-[#0BCB91]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#000B49] dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors">
                Capabilities
              </div>
              <div className="text-[11px] text-slate-400">Explore engineering disciplines</div>
            </div>
          </Link>

          <Link
            href="/projects"
            className="p-4 rounded-2xl bg-white dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 hover:border-[#1877F2]/40 dark:hover:border-[#0BCB91]/40 shadow-xs hover:shadow-md transition-all flex items-center gap-3 group"
          >
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#000B49] dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors">
                Case Studies
              </div>
              <div className="text-[11px] text-slate-400">View real-world projects</div>
            </div>
          </Link>

          <Link
            href="/contact"
            className="p-4 rounded-2xl bg-white dark:bg-[#070F2B] border border-slate-200 dark:border-slate-800 hover:border-[#1877F2]/40 dark:hover:border-[#0BCB91]/40 shadow-xs hover:shadow-md transition-all flex items-center gap-3 group"
          >
            <div className="p-2 rounded-xl bg-blue-500/10 text-[#1877F2]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#000B49] dark:text-white group-hover:text-[#1877F2] dark:group-hover:text-[#0BCB91] transition-colors">
                Contact Team
              </div>
              <div className="text-[11px] text-slate-400">Reach our engineers directly</div>
            </div>
          </Link>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#000B49] hover:bg-[#1877F2] dark:bg-[#1877F2] dark:hover:bg-blue-600 transition-colors shadow-sm"
          >
            <span>Return to Homepage</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
