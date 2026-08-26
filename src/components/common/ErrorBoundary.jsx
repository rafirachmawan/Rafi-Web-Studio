import React from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#fafafc] dark:bg-[#050508] text-zinc-900 dark:text-zinc-100 font-sans">
          <div className="max-w-md w-full text-center space-y-6 bg-white dark:bg-zinc-900/80 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl">
            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto text-amber-500">
              <AlertTriangle size={32} />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold tracking-tight">Terjadi Kesalahan Sistem</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Aplikasi mengalami kendala memuat halaman. Silakan muat ulang halaman atau kembali ke beranda.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={this.handleReload}
                className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-4 rounded-xl transition-all cursor-pointer text-xs uppercase tracking-wider"
              >
                <RefreshCw size={16} />
                Muat Ulang
              </button>

              <button
                onClick={this.handleGoHome}
                className="flex-1 flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-bold py-3 px-4 rounded-xl transition-all cursor-pointer text-xs uppercase tracking-wider"
              >
                <Home size={16} />
                Beranda
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
