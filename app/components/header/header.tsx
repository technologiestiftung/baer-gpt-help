import { content } from "../../content";
import { MobileNavigation } from "./mobile-navigation";
import { useMenuStore } from "../../store/use-menu-store";
import { DesktopNavigation } from "./desktop-navigation";
import { HeaderIconButton } from "./header-icon-button";

export function Header() {
	const { isMobileMenuOpen, toggleMobileMenu } = useMenuStore();

	return (
		<header className="relative z-50">
			<div className="flex justify-between items-center px-5 1080:px-[50px] py-4 bg-white border-b border-schwarz-100">
				<a href="/" className="focus-outline-default">
					<img src="/logo/logo.svg" alt={content["header.logoAlt"]} />
				</a>

				<DesktopNavigation />

				{/* Mobile hamburger */}
				{!isMobileMenuOpen && (
					<HeaderIconButton
						onClick={toggleMobileMenu}
						ariaLabel={content["header.button.hamburger.ariaLabel"]}
						defaultIconSrc="/icons/menu-icon.svg"
						hoverIconSrc="/icons/menu-bold-icon.svg"
						className="1080:hidden"
					/>
				)}

				{/* close button */}
				{isMobileMenuOpen && (
					<HeaderIconButton
						onClick={toggleMobileMenu}
						ariaLabel={content["header.button.close.ariaLabel"]}
						defaultIconSrc="/icons/close-icon.svg"
						hoverIconSrc="/icons/close-bold-icon.svg"
						className="1080:hidden"
					/>
				)}
			</div>

			{isMobileMenuOpen && <MobileNavigation />}
		</header>
	);
}
