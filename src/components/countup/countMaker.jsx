export const CountMaker = ({ header, title }) => {
	return (
		<div className="flex flex-col gap-5  ">
			<p className="md:text-5xl font-extrabold text-2xl  text-[#FFC100]">
				{header}
			</p>
			<p className=" font-medium text-lg ">{title}</p>
		</div>
	);
};
