import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("projects", "routes/projects.tsx"),
  route("projects/:projectSlug/changelog", "routes/projects.$projectSlug.changelog.tsx"),
] satisfies RouteConfig;
