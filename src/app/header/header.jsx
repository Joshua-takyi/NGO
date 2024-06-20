import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
				<Sheet>
					<SheetTrigger asChild>
						<Button className="md:hidden bg-[#FFC100] hover:bg-yellow-500 hover:text-white">
							<span>
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
							</span>
							<span className="sr-only">Toggle navigation menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="right">
						<div className="grid gap-4 p-6 ">
							<Link
								href="#"
								className="hover:underline hover:underline-offset-4"
								prefetch={false}
							>
								Home
							</Link>
							<Link
								href="#"
								className="hover:underline hover:underline-offset-4"
								prefetch={false}
							>
								Gallery
							</Link>
							<Link
								href="#"
								className="hover:underline hover:underline-offset-4"
								prefetch={false}
							>
								Career
							</Link>
							<Link
								href="#"
								className="hover:underline hover:underline-offset-4"
								prefetch={false}
							>
								Contact
							</Link>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
}

function MenuIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}

function MountainIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}
