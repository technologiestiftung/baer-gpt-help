import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "react-router";
import type { ReactNode } from "react";
import type { Route } from "./+types/root";
import "./app.css";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { useMenuStore } from "./store/use-menu-store";

export const links: Route.LinksFunction = () => [
	{ rel: "icon", type: "image/svg+xml", href: "/citylab.png" },
];

export function Layout({ children }: { children: ReactNode }) {
	const { isMobileMenuOpen } = useMenuStore();

	return (
		<html lang="de">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
				{/* <!-- Matomo --> */}
				<script>
					{`var _paq = (window._paq = window._paq || []);
						/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
						_paq.push(["trackPageView"]);
						_paq.push(["enableLinkTracking"]);
						(function () {
						var u = "${import.meta.env.VITE_MATOMO_URL}";
						_paq.push(["setTrackerUrl", u + "matomo.php"]);
						_paq.push(["setSiteId", "${import.meta.env.VITE_MATOMO_SITE_ID}"]);
						var d = document,
						g = d.createElement("script"),
						s = d.getElementsByTagName("script")[0];
						g.async = true;
						g.src = u + "matomo.js";
						s.parentNode.insertBefore(g, s);
					})();`}
				</script>
				{/* <!-- End Matomo Code --> */}
			</head>
			<body
				className={`bg-white ${isMobileMenuOpen ? "overflow-hidden lg:overflow-auto" : ""}`}
			>
				<Header />
				<main>{children}</main>
				<Footer />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
