import React from 'react';

function AboutMeSection() {
  return (
    <section className='text-center' id="about_me">
      <p className='display-2'>Hey,</p>
      <h1 className='display-3'>I&#39;m Vlada Leykin</h1>

      <h3>TL;DR</h3>
      <p className='lead'>
        I&#39;m a Software Engineer with 7 years of experience.
        I&#39;m passionate about designing and developing high-quality software solutions.
      </p>
      <h3>Full story</h3>
      <p className="lead">
        My passion for Software Development found expression as
        I studied Computer Science and later worked 7 years as a Software Engineer.
        I’ve made a path to Senior Software Developer and
        finally I was leading a team as a Software Architect.
      </p>
      <p className="lead">
        I believe in continuous self-improvement and care about clean code, test coverage,
        maintainability and simple architecture.
      </p>
      <p className="lead">
        I’ve gained an expertise in working efficiently
        in a large team with big Web applications on a large scale,
        maintaining fast CI/CD and monitoring processes,
        conducting experiments, giving and receiving code review.
        I mastered the art of working simultaneously with dozens of
        developers on the same codebase, delivering high quality features in the shortest time,
        impacting the lives of millions of people around the world.
      </p>
      <p className="lead">
        I’m currently based in Linz, Austria and I’m open for opportunities.
      </p>
    </section>
  );
}

export default AboutMeSection;
