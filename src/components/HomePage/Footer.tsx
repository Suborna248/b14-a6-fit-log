const Footer = () => {
  return (
    <footer className="bg-[#13161d] border-t border-[#292d36]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Left - Brand */}
          <div className="flex items-center gap-3">
            {/* Logo Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ccff00]">
              <span className="text-xl font-black text-[#13161d]">
                F
              </span>
            </div>

            {/* Brand Name */}
            <h2 className="text-xl font-extrabold tracking-wider text-white">
              FITLOG
            </h2>
          </div>

          {/* Right - Copyright */}
          <p className="text-center text-sm text-[#8a92a0] md:text-right">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;