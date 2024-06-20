import { CountMaker } from "@/components/countMaker/countAdd";
import Footer from "@/components/footer/footer";
import { Button } from "@/components/ui/button";

export default function Count() {
	return (
		<>
			<article className="">
				<div className="relative h-[40dvh] w-full">
					<div className="absolute opacity-[0.5] bg-gradient-to-r bg-yellow-300 via-amber-300 from-yellow-400 w-[100%] h-[100%]"></div>
					<section className="grid md:grid-cols-4 grid-cols-2 gap-5 place-items-center bg-[url('/vid.jpg')] h-[40dvh] bg-cover bg-center text-white ">
						<div className="relative">
							<CountMaker header="$150K" title="donations" />
						</div>
						<div className="relative">
							<CountMaker header="400+" title="volunteers" />
						</div>
						<div className="relative">
							<CountMaker header="7500+" title="people rescued" />
						</div>
						<div className="relative">
							<CountMaker header="37K" title="Day donors" />
						</div>
					</section>
					<section className="relative lg:h-[60dvh] md:h-[40dvh]">
						<div className="w-full h-[100%] bg-[#FF9A00] opacity-[0.8] absolute"></div>
						<div className="bg-[url('/map.jpg')] h-[100%] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
							<div className="relative flex flex-col gap-5 justify-center items-center p-4">
								<h4 className="font-bold lg:text-[90px] md:text-[40px] text-[30px] text-pretty">
									Become a volunteer
								</h4>
								<p className="font-medium text-lg text-center">
									Join us for a better life and a beautiful future
								</p>
								<Button className="my-5 ">Join Us Now</Button>
							</div>
						</div>
					</section>
				</div>
			</article>
			<div className="z-50 relative lg:top-[30em] md:top-[25em] top-[15em]">
				<Footer />
			</div>
		</>
	);
}
