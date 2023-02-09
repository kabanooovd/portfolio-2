import React from 'react';

export function getWindowDimensions() {
  const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
  return {
	  screenWidth,
	  screenHeight,
  };
}
export default function useDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState(
	  getWindowDimensions(),
  );
  React.useEffect(() => {
	  function handleResize() {
		  setWindowDimensions(getWindowDimensions());
	  }
	  window.addEventListener("resize", handleResize);
	  return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
}