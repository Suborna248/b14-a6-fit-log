import Image from "next/image";
import LogoImg from "../assets/logo.png";

const Loading = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">

        <div className="animate-spin">
          <Image  src={LogoImg} alt="FitLog"  width={80} height={80} className="object-contain"   />
        </div>

        <p className="text-sm text-[#8a92a0]">
          Loading workouts...
        </p>

      </div>
    </div>
  );
};

export default Loading;