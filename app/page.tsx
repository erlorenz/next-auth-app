import Image from "next/image";
import { Inter } from "next/font/google";
import TestSignIn from "./TestSignIn";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <TestSignIn></TestSignIn>
    </main>
  );
}
