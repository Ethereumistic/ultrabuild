import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define logo URLs
const LIGHT_LOGO_URL = "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/light.png";
const DARK_LOGO_URL = "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/dark.png";

/**
 * A responsive logo component for ULTRABUILD.
 * Assumes you are using Tailwind CSS with the 'dark' class strategy.
 *
 * - Mobile (default): Logo stacked on top of smaller text.
 * - Desktop (md breakpoint): Logo to the left of larger text.
 */
const Logo = () => {
  // --- Mobile dimensions (1.5x smaller than 90x62) ---
  // Width: 90 / 1.5 = 60px
  // Height: 62 / 1.5 = 41.33px (we'll use 41px)
  
  return (
    <Link
      href="/"
      className="
        flex items-center 
        
        // --- Mobile Layout (default) ---
        flex-col gap-1 
        
        // --- Desktop Layout (md: breakpoint) ---
        md:flex-row md:gap-2.5
      "
      aria-label="Ultrabuild Homepage"
    >
      <Image
        src={LIGHT_LOGO_URL}
        alt="Ultrabuild Logo"
        className="
           
          
          object-contain       // Ensures aspect ratio is maintained
          w-[60px] h-[41px]    // Mobile size (default)
          md:w-[90px] md:h-[62px] // Desktop size (md breakpoint)
        "
        width={90}  // Base width (largest size)
        height={62} // Base height (largest size)
      />
      {/* <Image
        src={DARK_LOGO_URL}
        alt="Ultrabuild Logo"
        className="
          hidden dark:block 
          
          object-contain       // Ensures aspect ratio is maintained
          w-[60px] h-[41px]    // Mobile size (default)
          md:w-[90px] md:h-[62px] // Desktop size (md breakpoint)
        "
        width={90}  // Base width (largest size)
        height={62} // Base height (largest size)
      /> */}
      <span 
        className="
          font-semibold tracking-wide text-base md:text-xl text-secondary dark:text-white/80
        "
      >
        ULTRABUILD
      </span>
    </Link>
  );
};

export default Logo;