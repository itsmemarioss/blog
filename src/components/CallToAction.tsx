import React from 'react';


function CallToAction({title, description, buttonText, buttonLink}) {
  return (
    <div className="call-to-action">
      <h2>{title}</h2>
      <p>{description}</p>
      <a className="button button--primary" href={buttonLink}>
        {buttonText}
      </a>
    </div>
  );
}

export default CallToAction;
