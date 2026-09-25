import Image from "next/image";
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#13161d] border-t border-[#292d36]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg ">
              <span className="text-xl font-black text-[#13161d]">
                <Image className="w-8 h-8" src={Logo} alt="logo" width={100} height={150}></Image>
              </span>
            </div>

            <h2 className="text-xl font-extrabold tracking-wider text-white">
              FITLOG
            </h2>
          </div>

          <p className="text-center text-sm text-[#8a92a0] md:text-right">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;