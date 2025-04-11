import { content } from "../../content";

export const FooterLogoBar = () => {
	const logoLinks = [
		{
			href: content["footer.logoLinks.0.href"],
			src: content["footer.logoLinks.0.src"],
			alt: content["footer.logoLinks.0.alt"],
			width: content["footer.logoLinks.0.width"],
			text: content["footer.logoLinks.0.text"],
		},
		{
			href: content["footer.logoLinks.1.href"],
			src: content["footer.logoLinks.1.src"],
			alt: content["footer.logoLinks.1.alt"],
			width: content["footer.logoLinks.1.width"],
			text: content["footer.logoLinks.1.text"],
		},
		{
			href: content["footer.logoLinks.2.href"],
			src: content["footer.logoLinks.2.src"],
			alt: content["footer.logoLinks.2.alt"],
			width: content["footer.logoLinks.2.width"],
			text: content["footer.logoLinks.2.text"],
		},
	];

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
						className="focus-outline-default"
					>
						<img src={src} alt={alt} className={width} />
					</a>
				</div>
			))}
		</div>
	);
};
