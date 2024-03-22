import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="h-screen flex justify-center text-center items-center">
      <div className="text-white font-extrabold">
        <p className="text-[90px] tracking-wider leading-[40px]">
          I’m Siddharth
        </p>
        <p className="text-[98px] bg-gradient-to-r from-[#B3C3FF] to-white text-transparent bg-clip-text tracking-wider">
          Passionate Full-stack
        </p>
        <p className="text-[90px] tracking-wider leading-[40px]">Devloper.</p>
        <div className="flex justify-center">
          <p className="text-[25px] tracking-wider pt-12 w-2/3">
            I develop robust and interactive full stack websites with a strong
            focus on performance
          </p>
        </div>
      </div>
    </div>
  );
}
