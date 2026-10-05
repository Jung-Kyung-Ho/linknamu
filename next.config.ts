import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 프로필 사진 placeholder (PNG 포맷으로 요청 — SVG는 next/image 기본 설정에서 차단됨)
    remotePatterns: [new URL("https://placehold.co/**")],
  },
};

export default nextConfig;
