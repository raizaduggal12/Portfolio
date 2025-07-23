"use client";

export default function Navbar() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-300 shadow-md w-full fixed top-0 left-0 ">
      <div className="max-w-7xl w-full h-[1vh] pb-[1.5vh] flex items-center justify-between">

        {/* Name on Left */}
        <h1 className="text-[2.7vh] font-bold text-lime-400 px-[7vh] mt-[0vh]">
  RAIZA DUGGAL
</h1>



        {/* Links on Right */}
        <nav className="flex gap-6 flex items-center justify-between">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-[1.5vh] text-[3vh] text-white hover:text-pink-600 visited:text-white active:text-white focus:text-white no-underline font-medium transition-colors duration-200"

            >
              {link.label}
            </a>

          ))}
        </nav>
      </div>
    </header>
  );
}
