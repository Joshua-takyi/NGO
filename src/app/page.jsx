import Courses from "./card/courses";
import Count from "./count/count";
import Header from "./header/header";
import Hero from "./hero/hero";
import Logos from "./logos/logos";
import Main from "./main/main";
import Mid from "./middleHero/midHero";
import VidSec from "./vidSec/vid";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Logos />
			<Main />
			<Mid />
			<VidSec />
			<Courses />
			<Count />
		</>
	);
}
