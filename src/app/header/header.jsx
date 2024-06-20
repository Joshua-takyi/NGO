import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
	const navLinks = [
		{
			title: "Home",
			href: "/",
		},
		{
			title: "Gallery",
			href: "/",
		},
		{
			title: "Career",
			href: "/",
		},
		{
			title: "Contacts",
			href: "/",
		},
	];
	return (
		<nav className="flex flex-row w-full lg:px-44 justify-between absolute p-4 top-0">
			<header className="p-2 flex flex-row items-center gap-2">
				<Image src={"/hope.png"} alt="logo" width={50} height={50} />
				<p className="font-bold text-lg text-white">Hope</p>
			</header>
			<div className=" lg:flex flex-row hidden justify-around items-center gap-x-14 text-white">
				{navLinks.map((item, index) => (
					<Link key={index} href={item.href}>
						{item.title}
					</Link>
				))}
				<Link href={"/"}>
					<Button variant="primary">Donate</Button>
				</Link>
			</div>
			<div className="flex items-center lg:hidden">
				<Button variant="primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</Button>
			</div>
		</nav>
	);
}
