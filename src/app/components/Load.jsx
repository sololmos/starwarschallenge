import React from 'react';
import "@/app/Loader.css"

const Loader = () => {
  return (
    <div id="load-loader" className="load-loader">
      <div className="load-ls-particles load-ls-part-1"></div>
      <div className="load-ls-particles load-ls-part-2"></div>
      <div className="load-ls-particles load-ls-part-3"></div>
      <div className="load-ls-particles load-ls-part-4"></div>
      <div className="load-ls-particles load-ls-part-5"></div>
      <div className="load-lightsaber load-ls-left load-ls-green"></div>
      <div className="load-lightsaber load-ls-right load-ls-red"></div>
    </div>
  );
}

export default Loader;
