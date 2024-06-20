import MotionDiv from "@/components/motion/divMotion";
import MotionSec from "@/components/motion/sectionMotion";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
const pop = Poppins({
	subsets: ["latin"],
	weight: "400",
});

export default function Hero() {
	const TextVariant = {
		hidden: {
			opacity: 0,
			x: -100,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				delay: 0.5,
				duration: 1,
				ease: "easeOut",
				type: "Spring",
			},
		},
	};
	return (
		<MotionSec className=" w-full lg:h-[100dvh] bg-[url('/landing.jpg')] bg-cover bg-no-repeat bg-center lg:px-44 p-4 md:h-[50dvh] h-[70dvh] ">
			<MotionDiv className="flex lg:flex-row flex-1 flex-col lg:justify-start text-white justify-center h-full">
				<MotionDiv
					className={`${pop.className} lg:w-2/3 flex flex-col justify-center  leading-tight p-2  gap-4`}
					variants={TextVariant}
					animate="visible"
					initial="hidden"
				>
					<h1 className="font-bold lg:text-[110px] md:text-[90px] text-[60px] text-balance">
						Hope for Humanity
					</h1>
					<p className="text-pretty ">
						GIVE A HELPING HAND TO THOSE WHO NEED IT!
					</p>
					<div className="flex gap-4 ">
						<Button>Get Started</Button>
						<Button variant="primary">Donate Now</Button>
					</div>
				</MotionDiv>
			</MotionDiv>
		</MotionSec>
	);
}
