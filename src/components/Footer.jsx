import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo-black.svg";

export default function Footer() {
  return (
    <footer>
      <Link href={"/"}>
        <Image src={logo} alt="logo" className="w-max" />
      </Link>
    </footer>
  );
}

// https://quivo.co/uk/
