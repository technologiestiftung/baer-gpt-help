import { content } from "../../content";

export const FooterLogoBar = () => (
	<ul className="w-full flex flex-col justify-center items-center py-6 lg:items-start lg:flex-row gap-12 text-center md:text-start text-schwarz-80">
		{content.footer.logoLinks.map(({ href, src, alt, width, text }) => (
			<li key={href} className="flex flex-col gap-y-5">
				{text ? (
					<p className="text-sm leading-5 font-normal">{text}</p>
				) : (
					<span className="h-5" />
				)}
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className="focus-outline-default"
				>
					<img src={src} alt={alt} className={width} />
				</a>
			</li>
		))}
	</ul>
);
