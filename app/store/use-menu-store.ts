import { create } from "zustand";

interface MenuState {
	isMobileMenuOpen: boolean;
	toggleMobileMenu: () => void;
}

export const useMenuStore = create<MenuState>((set) => ({
	isMobileMenuOpen: false,
	toggleMobileMenu: () =>
		set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
}));
