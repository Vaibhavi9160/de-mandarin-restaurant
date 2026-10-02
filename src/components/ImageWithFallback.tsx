import React, { useState } from 'react';
import { Utensils } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackTitle,
  fallbackSubtitle,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#18191c] ${containerClassName}`}>
      {/* Background placeholder while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-tr from-[#141517] via-[#1d1f23] to-[#141517] animate-pulse" />
      )}

      {!hasError && src ? (
        <img
          src={src}
          alt={alt || fallbackTitle || 'De Mandarin Resto Cafe'}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      ) : (
        /* Styled CSS/SVG Fallback Container adhering to Zero-Broken-Image Policy */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#1c1e22] via-[#151619] to-[#0f1012] border border-[#2b2d33]">
          <div className="w-12 h-12 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] mb-2 shadow-inner">
            <Utensils className="w-6 h-6 stroke-[1.5]" />
          </div>
          <span className="text-xs font-semibold tracking-wider text-[#d4af37] uppercase mb-0.5">
            De Mandarin
          </span>
          <p className="text-sm font-medium text-[#ECE7DF] max-w-[200px] line-clamp-1">
            {fallbackTitle || alt || 'Artisanal Cuisine'}
          </p>
          {fallbackSubtitle && (
            <p className="text-[11px] text-[#9A9488] mt-0.5 max-w-[180px] line-clamp-1">
              {fallbackSubtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
