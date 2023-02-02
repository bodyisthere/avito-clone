import { useEffect } from "react";

import { bodyScrollAllow } from "../../utils/bodyScrollAllow";

export function useClosePop(
  el: React.MutableRefObject<HTMLDivElement | null>,
  changeStateFunction: any
) {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!el.current?.contains(target)) changeStateFunction(false);
    };
    setTimeout(() => document.addEventListener("click", onClick), 1);
    return () => {
      document.removeEventListener("click", onClick);
      bodyScrollAllow(document);
    };
  }, []);
}
