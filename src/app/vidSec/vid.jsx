import Video from "next-video";
import firstVid from "../../../videos/first.mov";
export default function VidSec() {
	return (
		<section className="mx-auto lg:px-44 p-4">
			<Video src={firstVid} className="w-[50%]" accentColor="#FFC100" />
		</section>
	);
}
