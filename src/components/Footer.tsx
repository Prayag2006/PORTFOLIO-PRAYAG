import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[#C9C2B7] py-8 px-6 md:px-12 lg:px-16 bg-[#F5F1E8] text-[11px] font-semibold tracking-[0.2em] text-[#55504A] uppercase select-none">
      <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Copyright */}
        <div>
          <span>© 2026 PRAYAG KANSARA</span>
        </div>

        {/* Center Tagline */}
        <div className="hidden sm:block text-center text-[#171717]">
          <span>WEB DESIGNER / FULL-STACK DEVELOPER</span>
        </div>

        {/* Right Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#B85C3A] transition-colors duration-300"
          >
            INSTAGRAM
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#B85C3A] transition-colors duration-300"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#B85C3A] transition-colors duration-300"
          >
            LINKEDIN
          </a>
        </div>
      </div>
    </footer>
  );
};
