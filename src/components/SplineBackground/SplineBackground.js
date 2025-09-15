import React, { Suspense, useState } from 'react';
import Spline from '@splinetool/react-spline';

const SplineBackground = ({ className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const LoadingFallback = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-300 text-sm">Loading 3D Experience...</p>
      </div>
    </div>
  );

  const ErrorFallback = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e50914' fill-opacity='0.2'%3E%3Cpolygon points='50,0 60,35 100,35 70,57 80,91 50,70 20,91 30,57 0,35 40,35'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }} />
      </div>
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
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/eK9EMUsQOeXabho8/scene.splinecode"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1
            }}
          />
          {!isLoaded && <LoadingFallback />}
        </div>
      </Suspense>
      
    </div>
  );
};

export default SplineBackground;