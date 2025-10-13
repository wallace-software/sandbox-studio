import { Dispatch, SetStateAction, useEffect, RefObject } from "react";

export const useOutsideAlerter = (
  ref: RefObject<HTMLElement>,
  callback: Dispatch<SetStateAction<boolean>>,
  ignoreRef?: RefObject<HTMLElement>
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        (!ignoreRef?.current || !ignoreRef.current.contains(event.target as Node))
      ) {
        callback(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, ignoreRef]);
};