import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image
        src="/images/Logo/Logo.svg"
        alt="logo"
        width={117}
        height={34}
        className="w-fit invert"
        quality={100}
      />
      <p className="text-black text-2xl font-semibold ">Aurora Beauty </p>
    </Link>
  );
};

export default Logo;
