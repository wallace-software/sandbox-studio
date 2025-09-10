import { NavigationLinks } from "@constants";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, use, useEffect, useState } from "react";
import { set } from "video.js/dist/types/tech/middleware";

interface NavigationItemProps {
  item: NavigationLinks;
}
const NavigationItem: FC<NavigationItemProps> = (
  props: NavigationItemProps
) => {
  const { item } = props;
  const router = useRouter();
  const [active, setActive] = useState(router.asPath === item.href);

  if (item.hide) {
    return null; // If hide is true, do not render the item
  }

  useEffect(() => {
    setActive(router.asPath === item.href);
  }, [router.asPath]);

  return (
    <Link
      href={item.href}
      className={`text-base font-barlow font-medium py-1 ${
        active
          ? "text-sand-300 cursor-default"
          : "text-grayscale-200 hover:text-sand-300 transition-200"
      }`}
    >
      {item.label}
    </Link>
  );
};

export default NavigationItem;
