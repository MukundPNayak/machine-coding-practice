import React, { lazy, Suspense, useState } from "react";

const LazyLoading = () => {
  const LazyComponent = lazy(
    () => import("./LazyComponent" /*webpackChunkName:"LazyComponent"*/),
  );

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h1>Heading</h1>
      <Suspense fallback={<div>Loading</div>}>
        {isVisible && <LazyComponent />}
      </Suspense>
      <button onClick={() => setIsVisible((prev) => !prev)}>
        Toggle Visibility
      </button>
    </div>
  );
};

export default LazyLoading;
