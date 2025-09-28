import React, { Suspense, useState } from 'react';
import Spline from '@splinetool/react-spline';

const SplineBackground = ({ className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Loading screen (with spinner)
  const LoadingFallback = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-300 text-xs sm:text-sm">Loading 3D Experience...</p>
      </div>
    </div>
  );

  // Error screen (if spline fails)
  const ErrorFallback = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <p className="text-gray-500 text-sm">Background failed to load.</p>
    </div>
  );

  if (hasError) {
    return (
      <div className={`absolute inset-0 ${className}`}>
        <ErrorFallback />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Suspense fallback={<LoadingFallback />}>
        {/* Desktop / Tablet → Show Spline */}
        <div className="absolute inset-0 hidden sm:block">
          <Spline
            scene="https://prod.spline.design/RdLOYiOVmB94dylV/scene.splinecode"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              objectFit: 'cover', // 🔑 keeps aspect ratio
            }}
          />
          {!isLoaded && <LoadingFallback />}
        </div>

        {/* Mobile → Show fallback image (lighter & faster) */}
        <div
          className="absolute inset-0 block sm:hidden bg-cover bg-center"
          style={{
            backgroundImage: "url('/fallback.jpg')", // replace with your static image
          }}
        />
      </Suspense>
    </div>
  );
};

export default SplineBackground;
