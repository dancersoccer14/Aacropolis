/** Old Wix URLs are redirected so existing links and SEO keep working. */
const nextConfig = {
  async redirects() {
    return [
      { source: "/copy-of-about", destination: "/promotions", permanent: true },
      { source: "/copy-of-show-homes", destination: "/video-tours", permanent: true },
      { source: "/copy-of-home-1", destination: "/digitalwelcome", permanent: true },
      { source: "/post/:slug", destination: "/blog/:slug", permanent: true },
    ];
  },
};
export default nextConfig;
