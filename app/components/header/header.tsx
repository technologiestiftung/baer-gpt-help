import { content } from "../../content";
import { MobileNavigation } from "./mobile-navigation";
import { useMenuStore } from "../../store/use-menu-store";
import { DesktopNavigation } from "./desktop-navigation";

export interface NavItem {
	url: string;
	name: string;
	ariaLabel: string;
}

export interface ExternalNavItem {
	url: string;
	name: string;
	altText: string;
}

const navItems = [
	{
		name: content["header.nav.0.name"],
		url: content["header.nav.0.url"],
		ariaLabel: content["header.nav.0.ariaLabel"],
	},
	{
		name: content["header.nav.1.name"],
		url: content["header.nav.1.url"],
		ariaLabel: content["header.nav.1.ariaLabel"],
	},
	{
		name: content["header.nav.2.name"],
		url: content["header.nav.2.url"],
		ariaLabel: content["header.nav.2.ariaLabel"],
	},
	{
		name: content["header.nav.3.name"],
		url: content["header.nav.3.url"],
		ariaLabel: content["header.nav.3.ariaLabel"],
	},
];

const externalNavItem = {
	name: content["header.nav.4.name"],
	url: content["header.nav.4.url"],
	altText: content["header.nav.4.altText"],
};

export function Header() {
	const { isMobileMenuOpen, toggleMobileMenu } = useMenuStore();

	return (
		<header className="relative z-50">
			<div className="flex justify-between px-5 lg:px-[50px] py-4 bg-white border-b border-schwarz-100">
				<a href="/">
					<img src="/logo/logo.svg" alt={content["header.logoAlt"]} />
				</a>

				{/* Desktop nav */}
				<DesktopNavigation
					navItems={navItems}
					externalNavItem={externalNavItem}
				/>
				{/* Mobile hamburger */}
				<button
					onClick={toggleMobileMenu}
					className={`lg:hidden flex items-center ${isMobileMenuOpen ? "hidden" : "block"}`}
					aria-label="Toggle menu"
				>
					<img src="/icons/menu-icon.svg" alt="Menu" />
				</button>
				{/* close button */}
				<button
					onClick={toggleMobileMenu}
					aria-label="Close menu"
					className={`lg:hidden flex items-center ${isMobileMenuOpen ? "block" : "hidden"}`}
				>
					<img src="/icons/close-icon.svg" alt="Close" />
				</button>
			</div>

			{isMobileMenuOpen && (
				<MobileNavigation
					navItems={navItems}
					externalNavItem={externalNavItem}
				/>
			)}
		</header>
	);
}
