import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// Assure-toi que le chemin pointe vers le bon fichier request.ts
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  
  // 👇 AJOUTE CETTE LIGNE
  trailingSlash: true, 
};

export default withNextIntl(nextConfig);