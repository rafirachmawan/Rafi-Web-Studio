import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Layers, Tag, User, ExternalLink } from "lucide-react";
import { demos } from "../constants/demos";
import Footer from "../components/common/Footer";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProject = demos.find((d) => d.id === id);
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafc] dark:bg-[#050508] text-black dark:text-white">
        <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
        <Link to="/" className="text-amber-500 font-bold hover:underline">
          &larr; Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafc] dark:bg-[#050508] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-amber-500/30">
      
      {/* Simple Navbar for Detail Page */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#050508]/80 backdrop-blur-xl border-b border-zinc-200 dark:border-white/5 px-4 py-4 md:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
            <ArrowLeft size={16} /> Kembali
          </Link>
          <div className="font-heading font-extrabold text-lg tracking-tight text-black dark:text-white">
            Gapai<span className="text-amber-500">Digital</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            <span className="px-4 py-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-500 border border-amber-500/20 text-xs font-black uppercase tracking-wider rounded-full flex items-center gap-1.5 shadow-sm">
              <Tag size={14} /> {project.category}
            </span>
            {project.client && (
              <span className="px-4 py-1.5 bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 text-xs font-black uppercase tracking-wider rounded-full flex items-center gap-1.5 shadow-sm">
                <User size={14} /> Klien: {project.client}
              </span>
            )}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6"
          >
            <span className="mr-4 inline-block">{project.icon}</span>
            {project.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex justify-center mb-10"
          >
            <a
              href={project.path}
              target={project.path !== "#" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-8 py-3.5 rounded-full text-sm font-black transition-all shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-95"
            >
              Kunjungi Live Website <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* GAMBAR DIPERKECIL: max-w-4xl & aspect-video (16:9) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-full max-w-4xl mx-auto aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-zinc-200/50 dark:border-white/10"
          >
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </header>

      {/* Content Layout */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-8 space-y-12 md:space-y-16">
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">Gambaran Proyek</h2>
              <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed md:text-lg">
                <p>{project.fullDescription || project.desc}</p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black dark:text-white">Fitur Unggulan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {project.features ? project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 shadow-sm">
                    <div className="bg-emerald-500/10 p-2 rounded-full shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    </div>
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">{feature}</span>
                  </div>
                )) : (
                  <p className="text-zinc-500">Detail fitur sedang disiapkan...</p>
                )}
              </div>
            </motion.section>
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Tech Stack Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-[2rem] p-6 md:p-8 shadow-xl shadow-black/[0.02] dark:shadow-none sticky top-28"
            >
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <Layers className="text-amber-500 w-5 h-5" />
                </div>
                Teknologi
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {project.techStack ? project.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3.5 py-2 bg-zinc-100 dark:bg-[#111] border border-zinc-200 dark:border-white/5 rounded-xl text-sm font-bold text-zinc-700 dark:text-zinc-300">
                    {tech}
                  </span>
                )) : (
                  <span className="text-sm text-zinc-500">Mendata tech stack...</span>
                )}
              </div>

              <div className="pt-6 border-t border-zinc-100 dark:border-white/5">
                <p className="text-sm text-zinc-500 font-medium mb-4">Ingin melihat hasil akhirnya secara langsung?</p>
                <a
                  href={project.path}
                  target={project.path !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white w-full py-4 rounded-xl text-sm font-black transition-all shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-95"
                >
                  Kunjungi Live Website <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
