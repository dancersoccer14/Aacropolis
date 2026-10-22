/**
 * Static export for GitHub Pages.
 * NEXT_PUBLIC_BASE_PATH is set by the GitHub Actions workflow:
 *   - "" when using a custom domain or a <user>.github.io repo
 *   - "/<repo-name>" for normal project pages (https://<user>.github.io/<repo-name>/)
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};
export default nextConfig;
