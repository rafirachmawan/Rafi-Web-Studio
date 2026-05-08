import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function DemoCard({ demo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to={demo.path}
        className="group block bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 transition"
      >
        {/* IMAGE */}
        <div className="h-40 overflow-hidden">
          <img
            src={demo.image}
            alt={demo.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* CONTENT */}
        <div className="p-5">
          {/* ICON */}
          <div className="text-2xl mb-2">{demo.icon}</div>

          {/* TITLE */}
          <h2 className="text-lg font-semibold group-hover:text-amber-400">
            {demo.name}
          </h2>

          {/* DESC */}
          <p className="text-gray-400 text-sm mt-1 mb-4">{demo.desc}</p>

          {/* CTA */}
          <span className="text-amber-400 text-sm">Lihat Demo →</span>
        </div>
      </Link>
    </motion.div>
  );
}
