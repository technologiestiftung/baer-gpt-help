import { content } from "../../content";
import { MobileNavigation } from "./mobile-navigation";
import { useMenuStore } from "../../store/use-menu-store";
import { DesktopNavigation } from "./desktop-navigation";

export function Header() {
	const { isMobileMenuOpen, toggleMobileMenu } = useMenuStore();

	return (
		<header className="relative z-50">
			<div className="flex justify-between items-center px-5 1080:px-[50px] py-4 bg-white border-b border-schwarz-100">
				<a href="/">
					<img src="/logo/logo.svg" alt={content["header.logoAlt"]} />
				</a>

				<DesktopNavigation />

				{/* Mobile hamburger */}
				<button
					onClick={toggleMobileMenu}
					className={`1080:hidden flex items-center ${isMobileMenuOpen ? "hidden" : "block"}`}
					aria-label="Toggle menu"
				>
					<img src="/icons/menu-icon.svg" alt="Menu" />
				</button>

				{/* close button */}
				<button
					onClick={toggleMobileMenu}
					aria-label="Close menu"
					className={`1080:hidden flex items-center ${isMobileMenuOpen ? "block" : "hidden"}`}
				>
					<img src="/icons/close-icon.svg" alt="Close" />
				</button>
			</div>

			{isMobileMenuOpen && <MobileNavigation />}
		</header>
	);
}
