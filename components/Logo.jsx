import Link from "next/link";
import Image from "next/image";
import Logo1 from "../public/EPD.png";
const Logo = () => {
  return (
    <Link href="/">
      <Image className="w-[40px] " src={Logo1} />
    </Link>
  );
};

export default Logo;
