import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Mid() {
	return (
		<section className="lg:px-44 flex md:flex-row  lg:py-20 md:my-24 flex-col  gap-5 p-4 my-5 ">
			<div className="md:w-1/2 md:justify-start flex justify-center">
				<Image
					src={"/mid.jpg"}
					width={500}
					height={400}
					alt="peace"
					className="lg:h-[550px] lg:w-[500px] h-[400px]  md:w-[400px] md:h-[400px] w-full aspect-square"
				/>
			</div>
			<div className="md:w-1/2 flex-col flex gap-4  justify-center ">
				<h3 className="leading-tight  font-bold lg:text-[64px] text-lg text-[30px]">
					An Important Event <span className="text-[#FFC100]">For Charity</span>
				</h3>
				<p className="text-slate-600 text-pretty tracking-widest ">
					Join us for a momentous occasion where we come together to celebrate
					our collective impact and rally support for our ongoing mission. This
					pivotal event offers an opportunity to connect with like-minded change
					makers, hear inspiring stories, and contribute to creating lasting
					positive change in communities worldwide.
				</p>
				<div className="flex flex-row gap-4 items-center">
					<Button variant="skeleton">$40</Button>
					<Button variant="skeleton">$70</Button>
					<Button variant="skeleton">$120</Button>
					<Button variant="skeleton">More</Button>
				</div>
				<Button className="w-fit" variant="primary">
					Donate Now
				</Button>
			</div>
		</section>
	);
}
