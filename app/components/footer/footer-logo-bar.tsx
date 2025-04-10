import { content } from "../../content";

export const FooterLogoBar = () => {
	const logoLinks = content.footer.logoLinks;

	return (
		<div className="w-full flex flex-col justify-center items-center lg:items-start lg:flex-row lg:py-6 gap-12 text-center lg:text-start text-schwarz-80">
			{logoLinks.map(({ href, src, alt, width, text }) => (
				<div key={href} className="flex flex-col gap-y-5">
					{text && <p className="text-sm leading-5 font-normal">{text}</p>}
					{!text && <span className="h-5" />}
					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className="focus-visible:rounded-[3px] focus-visible:outline-3 focus-visible:outline-mittelblau-100 focus-visible:outline-offset-2"
					>
						<img src={src} alt={alt} className={width} />
					</a>
				</div>
			))}
		</div>
	);
};
