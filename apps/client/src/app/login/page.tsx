import { LoginForm } from "@repo/ui";
import Image from "next/image";
import BgImg from "../../assets/images/signup-bg.png";

export default function Page(): JSX.Element {
  return (
    <div className="grid grid-cols-2 h-screen items-center">
      <section className="flex justify-center">
        <Image alt="bg-image" src={BgImg} width={600} />
      </section>
      <section className="p-28">
        <h1 className="text-[2.5em] mb-10 font-bold">Login</h1>
        <LoginForm />
      </section>
    </div>
  );
}
