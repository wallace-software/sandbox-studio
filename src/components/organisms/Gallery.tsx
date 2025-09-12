"use client";

import {
  FC,
  HTMLAttributes,
  useState,
  useEffect,
  useRef,
  ReactNode,
} from "react";
import { useWindowSize } from "@hooks";
import { ArrowButtonIcon } from "@components";

interface GalleryProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode[]; // All items to render
  itemWidth?: number; // px
  itemGap?: number; // px
  visibleCountDesktop?: number;
  visibleCountMobile?: number;
  arrowsAligned?: "left" | "right"; // Alignment of arrows
  roundedParent?: boolean; // Whether to apply rounded corners to the parent container
  galleryItemGap?: string; // Gap between gallery items, can be a Tailwind CSS class
}

const Gallery: FC<GalleryProps> = ({
  children,
  className,
  itemGap = 20,
  arrowsAligned = "left",
  roundedParent = false,
  galleryItemGap,
}) => {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [items, setItems] = useState<ReactNode[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const prevIndex = useRef<number>(galleryIndex);
  const [winWidth] = useWindowSize();
  const isMobile = winWidth < 640;

  const [itemWidth, setItemWidth] = useState<number>(320);

  useEffect(() => {
    if (isMobile) setItemWidth(320);
    else setItemWidth(608);
  }, [isMobile]);

  useEffect(() => {
    setItems([...children, ...children]);
  }, [children]);

  const handlePrevious = () => {
    if (items.length === 0) return; // Fail-safe: Do nothing if there are no items

    setGalleryIndex((prev) => {
      const newIndex = prev === 0 ? items.length - 1 : prev - 1;

      // Prepend items if moving to the left and at the start
      if (newIndex === items.length - 1) {
        setItems((prevItems) => [...children, ...prevItems]);
      }

      prevIndex.current = prev;
      return newIndex;
    });
  };

  const handleNext = () => {
    if (items.length === 0) return; // Fail-safe: Do nothing if there are no items

    setGalleryIndex((prev) => {
      const newIndex = prev + 1;

      // Append items if moving to the right and at the end
      if (newIndex >= items.length - (isMobile ? 1 : 3)) {
        setItems((prevItems) => [...prevItems, ...children]);
      }

      return newIndex;
    });
  };

  const calculateOffset = (index: number) => {
    return -(index * (itemWidth + itemGap));
  };

  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const getIsMobileDevice = (): boolean => {
    if (typeof navigator === "undefined") return false; // Ensure this runs only on the client
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  };
  // Detect if the device is mobile on the client side
  useEffect(() => {
    setIsMobileDevice(getIsMobileDevice()); // Use the utility function to detect mobile devices
  }, []);

  return (
    <div
      className={`flex flex-col w-full items-center gap-6 ${className ?? ""} ${
        isMobileDevice ? "pt-6" : ""
      }`}
    >
      {!isMobileDevice && (
        <div
          className={`gap-5 w-full ${
            arrowsAligned === "right"
              ? "row-end pr-5 lg:pr-8 xl:pr-8 2010:pr-0"
              : "row-start"
          }`}
        >
          <ArrowButtonIcon direction="left" onClick={handlePrevious} />
          <ArrowButtonIcon direction="right" onClick={handleNext} />
        </div>
      )}
      <div
        ref={containerRef}
        className={`overflow-hidden w-full flex transition-transform duration-500 ease-out ${
          roundedParent ? "rounded-l-3xl 2010:rounded-r-3xl " : " "
        }
          ${galleryItemGap ?? " gap-5  "}`}
      >
        {items.map((item, index) => (
          <GalleryItemWrapper
            key={index}
            offset={calculateOffset(galleryIndex)}
          >
            {item}
          </GalleryItemWrapper>
        ))}
      </div>
    </div>
  );
};

interface GalleryItemWrapperProps {
  offset: number;
  children: ReactNode;
}

const GalleryItemWrapper: FC<GalleryItemWrapperProps> = ({
  offset,
  children,
}) => {
  return (
    <div
      className="shrink-0 transition-transform duration-500 ease-out"
      style={{
        transform: `translateX(${offset}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default Gallery;
