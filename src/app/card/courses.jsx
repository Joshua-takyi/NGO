import { CoursesCard } from "@/components/card/coursesCard";

export default function Courses() {
	return (
		<div className="lg:px-44 md:px-10 px-5 lg:py-10 md:py-5 py-5 lg:my-14 ">
			<div className="flex flex-col lg:py-10 py-5  ">
				<h4 className="text-6xl font-bold text-center text-[30px] tracking-wide">
					Featured <span className="text-[#FFC100]">Courses</span>
				</h4>
				<p className="text-md text-muted-foreground text-center my-4 lg:text-xl text-pretty ">
					Our Featured Courses provide essential training on sustainable
					development, human rights, and community empowerment taught by leading
					experts.
				</p>
			</div>
			<section className="grid md:grid-cols-3  grid-cols-1 lg:gap-20 lg:space-x-10  place-items-center gap-10">
				<div className="w-full">
					<CoursesCard
						header="Many different ways today to find"
						description="Explore flexible options to access our transformative courses on sustainable development, human rights, and community empowerment."
						image={"/adobe.jpeg"}
					/>
				</div>
				<div>
					<CoursesCard
						header="Keep Teachers in classroom"
						description="Training to support educators creating lasting community impact"
						image={"/AdobeStock_1.jpeg"}
					/>
				</div>
				<div>
					<CoursesCard
						header="Keep Teachers in classroom"
						description="Training to support educators creating lasting community impact"
						image={"/AdobeStock_1.jpeg"}
					/>
				</div>
				<div>
					<CoursesCard
						header="Raising funds to helping little hands"
						description="Fundraise to provide underprivileged children access to education, nutrition and healthcare for a better future."
						image={"/AdobeStock_3.jpeg"}
					/>
				</div>
			</section>
		</div>
	);
}
