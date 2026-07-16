import { route, type RouteConfig } from "@react-router/dev/routes";

export default [
	route("/", "routes/index.tsx"),
	route("/about/", "./routes/about/index.tsx"),
	route("/faq/", "./routes/faq/index.tsx"),
	route(
		"/baergpt-ihr-ki-assistent/",
		"./routes/baergpt-ihr-ki-assistent/index.tsx",
	),
	route("/arbeiten-mit-baergpt/", "./routes/working-with-baergpt/index.tsx"),
	route("/tutorials/", "./routes/tutorials/index.tsx"),
	route("/tutorials/:video-slug/", "./routes/tutorials/video-detail/index.tsx"),
	route("/training/", "./routes/training/index.tsx"),
	route("/training/:video-slug/", "./routes/training/video-detail/index.tsx"),
] satisfies RouteConfig;
