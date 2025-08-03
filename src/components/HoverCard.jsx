import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Rectangle from "../assets/Dukkaan/Rectangle.png"

const HoverCard = ({
  title,
  subtitle,
  bgColor,
  cardImages,
  comingSoon = false,
  redirectUrl,
  imgLogo = null
}) => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Detect mobile (< md)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener ? mq.addEventListener("change", update) : mq.addListener(update);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", update) : mq.removeListener(update);
    };
  }, []);

  const handleClick = () => {
    if (!comingSoon && redirectUrl) {
      navigate(redirectUrl);
      window.scrollTo(0, 0);
    }
  };

  // Only allow hover effects on desktop (not mobile) and when not coming soon
  const effectiveHover = !isMobile && !comingSoon && hovered;

  return (
    <div
      className={`relative w-full h-[120px] mx-auto overflow-visible transition-all duration-300 ease-in-out cursor-pointer ${
        isMobile ? "my-5" : "my-5 hover:my-14"
      }`}
      onMouseEnter={() => {
        if (!comingSoon && !isMobile) setHovered(true);
      }}
      onMouseLeave={() => {
        if (!comingSoon && !isMobile) setHovered(false);
      }}
      onClick={handleClick}
    >
      {/* Stacked Pyramid Cards - only on desktop when not coming soon */}
      {!comingSoon &&
        !isMobile &&
        cardImages?.slice(1).map((img, index) => {
          const offsetY = (index + 1) * 14;
          const widthPercent = 100 - (index + 1) * 3; // 97%, 94%, etc.
          const z = 20 - index;

          return (
            <motion.div
              key={index}
              className="absolute h-[40px] mx-auto rounded-2xl overflow-hidden bg-center text-white pointer-events-none shadow-xl"
              style={{
                top: `-${offsetY}px`,
                width: `${widthPercent}%`,
                backgroundImage: `url(${img})`,
                zIndex: z,
                left: 0,
                right: 0,
              }}
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: effectiveHover ? 0 : offsetY,
                opacity: effectiveHover ? 0.9 - index * 0.2 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.06 * index,
              }}
            />
          );
        })}

      {/* Main Card */}
      <motion.div
  className="relative w-full h-full rounded-2xl overflow-hidden bg-cover bg-center flex flex-row items-center justify-between px-6 z-30"
  style={{
    backgroundImage: effectiveHover ? `url(${cardImages?.[0]})` : "none",
    backgroundColor: comingSoon
      ? "rgba(255, 255, 255, 0.1)"
      : effectiveHover
      ? "transparent"
      : bgColor,
    filter: comingSoon ? "brightness(85%)" : "none",
  }}
  initial={{ scale: 1 }}
  animate={{
    scale: effectiveHover ? 1.03 : 1,
    y: effectiveHover ? -3 : 0,
  }}
  transition={{ type: "spring", stiffness: 240, damping: 18 }}
>
  {/* Title and Subtitle - Always show on mobile, conditionally on desktop */}
  {(isMobile || !effectiveHover) && (
    <>
      <div className="flex-1">
        <div
          className={`text-2xl font-bold ${
            comingSoon ? "text-black" : "text-white"
          }`}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          className={`text-sm font-medium ${
            comingSoon ? "text-black" : "text-white"
          }`}
        >
          {comingSoon ? "TO BE RELEASED" : subtitle}
        </div>
      </div>
        
      { !comingSoon && imgLogo && (
          <div className="flex-shrink-0">
        <img
          src={imgLogo}
          alt="Rectangle Decoration"
          className="w-14 h-14 object-contain"
        />
      </div>
      )}
      
    </>
  )}
</motion.div>

    </div>
  );
};

export default HoverCard;