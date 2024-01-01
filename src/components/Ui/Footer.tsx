import Link from "next/link";
import Header from "../Typography/Header";
import AnimatedText from "../Animation/AnimatedText";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white py-10 mt-20 rounded-t-[36px] lg:rounded-t-[46px] h-[93vh] ">
      <div className="mx-8 h-full justify-around flex flex-col  lg:mx-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-10 gap-6">
          <Header className="text-4xl w-full lg:text-6xl col-span-4 text-white font-bold">
            Let&apos;s work <span className="block">together </span>
          </Header>
          <div className="col-span-4 text-white text-xl border border-white flex flex-col items-center justify-center rounded-3xl gap-4 p-6 w-full ">
            <p>Looking for a Frontend Developer?</p>
            <Link
              className="bg-white rounded-xl text-zinc-900 text-center w-full py-3"
              href={"mailto:khantlinnyan.dev@gmail.com"}
            >
              khantlinnyan.dev@gmail.com
            </Link>
          </div>
          <div className=" col-span-4 text-xl border w-full justify-center border-white flex flex-col items-center gap-4 rounded-3xl p-6">
            <p>Want a more in-depth look at my history?</p>
            <Link
              prefetch={false}
              className="bg-white rounded-xl text-zinc-900 w-full py-3 text-center"
              href="https://drive.google.com/file/d/1JgEGJaTK0IjqF9ilP_7DhnRU6c6AuYru/view?usp=sharing"
            >
              View resume
            </Link>
          </div>
        </div>
        <h1 className="font-bold text-base lg:text-lg text-white mt-5 w-full">
          © 2024 KHANT LIN NYAN
        </h1>
      </div>
    </footer>
  );
}
