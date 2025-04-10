import { content } from "../../content";

export const FooterNavBar = () => {
	const navbarLinks = content.footer.navbar;

	return (
		<div className="flex flex-col lg:flex-row gap-6 justify-between lg:items-center w-full p-6 lg:py-4 lg:px-[50px] bg-dunkelblau-100 text-white">
			<img
				src="/images/berlin-baer.svg"
				alt="Berlin Bär Logo"
				className="size-11"
			/>

			<div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
				{navbarLinks.map((link, index) => (
					<a
						key={link.url}
						href={link.url}
						className={`text-white text-base font-normal border-b border-b-dunkelblau-100 hover:border-b-white w-fit
                            focus-visible:rounded-[3px] focus-visible:outline-3 focus-visible:outline-mittelblau-100 focus-visible:outline-offset-2`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="flex items-center gap-0.5">
							<p>{link.name}</p>
							<img
								src="/images/arrow-link.svg"
								alt="Icon Link Pfeil"
								className={`${index === 0 ? "flex" : "hidden"}`}
							/>
						</span>
					</a>
				))}
			</div>
		</div>
	);
};
