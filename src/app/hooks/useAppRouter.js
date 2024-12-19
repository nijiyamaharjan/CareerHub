"use client";

import { usePathname } from "next/navigation";

export function useAppRouter() {
  const pathname = usePathname();
  const basePath = '/CareerHub';
  
  const isProduction = process.env.NODE_ENV === 'production';
  
  const getPath = (path) => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return isProduction ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
  };

  const isActive = (path) => {
    const productionPath = isProduction ? `${basePath}${path}` : path;
    return pathname === productionPath;
  };

  return { getPath, isActive };
}