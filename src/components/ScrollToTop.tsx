import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const isIndexRoute = (path: string) =>
  path === "/" || path === "/akut" || path.startsWith("/landskaber/");

export function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (!isIndexRoute(prevPath.current) || !isIndexRoute(pathname)) {
      window.scrollTo(0, 0);
    }
    prevPath.current = pathname;
  }, [pathname]);

  return null;
}
