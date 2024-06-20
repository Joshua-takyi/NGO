import { Card } from "@/components/card/card";
import { Button } from "@/components/ui/button";

export default function Main() {
	return (
		<main className="bg-[#F7F9F2] lg:px-44 lg:my-24 md:my-10">
			<div className="flex lg:flex-row lg:py-20 p-2 flex-col gap-14 ">
				<div className="lg:w-1/2 flex flex-col p-2 gap-4 justify-center lg:justify-start items-center lg:items-start">
					<h2 className="lg:text-[60px] font-bold text-[27px] text-pretty leading-tight">
						Story About <span className="text-[#FFC100]">What We Do</span>
					</h2>
					<p className="text-balance text-left lg:text-left md:text-center  ">
						Hope works to uplift underserved communities worldwide through
						sustainable programs in water, food, education, health and more. Our
						grassroots approach empowers local populations to drive positive
						change from within. United by a vision for a just world, we&apos;re
						fostering human rights and human dignity on a global scale.
					</p>
					<Button size="lg" className="w-fit my-4" variant="dark">
						Know More
					</Button>
				</div>
				<div className="lg:w-1/2 grid md:grid-cols-2 grid-cols-1 gap-5">
					<div className="p-2">
						<Card
							image={"/legacy.png"}
							alt="legacy"
							header="Leave A Legacy"
							description="Lasting impact through your philanthropic legacy."
						/>
					</div>
					<div className="p-2">
						<Card
							image={"/donate.png"}
							alt="donate"
							header="Make Donation"
							description="Contribute to sustainable change through giving."
						/>
					</div>
					<div className="p-2">
						<Card
							image={"/donation.png"}
							alt="donation"
							description="Lend your time and talents to uplift communities."
							header="Become
							a
							Fundraiser"
						/>
					</div>
					<div className="p-2">
						<Card
							image={"/heart-rate.png"}
							header="Become a volunteer"
							description="Rally support to amplify our global impact."
							alt="volunteer"
						/>
					</div>
				</div>
			</div>
		</main>
	);
}
