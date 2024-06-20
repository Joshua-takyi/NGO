import Image from "next/image";

export const Card = ({ image, description, header, alt }) => {
	return (
		<div className="flex flex-col gap-2 lg:items-start justify-center items-center text-center lg:text-left lg:justify-start">
			<Image
				src={image}
				alt={alt}
				width={80}
				height={80}
				className="border rounded-full bg-white p-4"
			/>
			<p className="font-semibold md:text-[24px] text-[20px]">{header}</p>
			<p className="text-balance text-slate-700 leading-normal font-medium max-w-md">
				{description}
			</p>
		</div>
	);
};
