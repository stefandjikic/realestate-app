import React from "react";

const MapEmbed = ({ lat = 0, lng = 0 }) => {
  return (
    <iframe
      src={`https://maps.google.com/maps?q=${lat},%20${lng}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
      width="100%"
      height="280"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapEmbed;
