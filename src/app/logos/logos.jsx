import Image from "next/image";

export default function Logos() {
	return (
		<section className=" flex justify-center lg:px-44 overflow-hidden lg:py-20 p-5 mr-auto ">
			<div className="grid md:grid-cols-4 md:gap-12 gap-5 items-center place-items-center grid-cols-2 hue-rotate-180">
				<Image
					src="/unicef-3.svg"
					width={200}
					height={100}
					alt="an image"
					className="size-36 lg:size-44 "
				/>
				<Image
					src="/tata-1.svg"
					width={200}
					height={100}
					alt="an image"
					className="size-36 lg:size-44 "
				/>
				<Image
					src="/who.svg"
					width={200}
					height={100}
					alt="an image"
					className="size-20 lg:size-28 "
				/>
				<Image
					src="/eu.svg"
					width={200}
					height={100}
					alt="an image"
					className="size-20 lg:size-28 "
				/>
			</div>
		</section>
	);
}
