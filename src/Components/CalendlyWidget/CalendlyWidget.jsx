import React, { useEffect } from 'react';
import "./CalendlyWidget.css"

const CalendlyWidget = () => {
  useEffect(() => {
    // Dynamically load the Calendly widget script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget" 
         data-url="https://calendly.com/d/cmb7-jkb-kdx/logolife-acceptedx-college-counseling-consultation?hide_gdpr_banner=1" 
         style={{ minWidth: "300px", height: "970px" }} />
  );
};

export default CalendlyWidget;
