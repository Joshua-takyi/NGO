import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function CoursesCard({ header, description, image }) {
	return (
		<Card className="lg:w-[330px] lg:h-[500px] md:h-[460px] md:w-[300px] w-full h-auto overflow-hidden">
			<CardHeader className="overflow-hidden">
				<CardTitle className="h-full">
					<Image
						src={image}
						alt="image"
						layout="responsive"
						width={200}
						height={300}
						className="w-full h-auto rounded-md"
					/>
				</CardTitle>
			</CardHeader>
			<CardContent className="p-4 flex flex-col text-md text-muted-foreground gap-4 text-center justify-center overflow-hidden">
				<h5 className="font-bold text-black lg:text-[23px]">{header}</h5>
				<p>{description}</p>
			</CardContent>
			<CardFooter className="p-5 flex items-end h-[10%]">
				<Link
					href="/"
					className="hover:scale-[1.1] hover:text-[#FFC100] transition-all"
				>
					Read More <span>→</span>
				</Link>
			</CardFooter>
		</Card>
	);
}
