import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function CoursesCard({ header, description, image }) {
	return (
		<Card className="lg:w-[330px] lg:h-[500px] md:h-[460px]  md:w-[350px] w-[300px]">
			<CardHeader>
				<CardTitle>
					<Image
						src={image}
						alt="image"
						width={200}
						height={300}
						className="w-full  rounded-md"
					/>
				</CardTitle>
				<CardDescription className="p-2"></CardDescription>
			</CardHeader>
			<CardContent className="p-4 flex flex-col text-md text-muted-foreground gap-4 text-center justify-center">
				<h5 className="font-bold text-black lg:text-[23px]">{header}</h5>
				<p>{description}</p>
			</CardContent>
			<CardFooter className="p-5 flex items-end h-[10%]">
				<Link
					href={"/"}
					className="hover:scale-[1.1] hover:text-[#FFC100] transition-all"
				>
					Read More <span>→</span>
				</Link>
			</CardFooter>
		</Card>
	);
}
