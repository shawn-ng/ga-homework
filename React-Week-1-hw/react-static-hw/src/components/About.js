import React from 'react';

const AboutTexts = ({ text }) => {
  return <p>{text}</p>;
};

const About = ({ aboutTextsArray }) => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10 content">
            <h2 className="title">About</h2>
            {
                aboutTextsArray.map((text) => (
                    <AboutTexts key={text} text={text}/>
                ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
