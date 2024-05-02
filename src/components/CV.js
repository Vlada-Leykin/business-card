import React from 'react';
import cv from '../assets/vladislava_leykin_cv.pdf';

function CV() {
  return (
    <section className="container" id="cv">
      <h3>Curriculum Vitae</h3>
      <p>You can download <a href={cv} download={cv}>my CV</a></p>
    </section>
  );
}

export default CV;
