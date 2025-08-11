import Link from "next/link";
import logo from "../public/logo.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="py-5 fixed w-full z-10">
      <div className="max-w-[1100px] mx-auto flex items-center justify-around rounded-[10px] bg-white shadow-[0px_10px_80px_#3333338f] py-3 px-4">
        <Link href={"/"}>
          <Image src={logo} alt="logo image" />
        </Link>
        {/* main page name and links */}
        <div className="flex items-center gap-3">
          <Link href={'about'}></Link>
        </div>
      </div>
    </div>
  );
}
