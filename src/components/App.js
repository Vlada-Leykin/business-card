import React from 'react';
import PropTypes from 'prop-types';

function Greeting({ name }) {
  return (
    <h1>
      Hello,
      {name}
    </h1>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default function App() {
  return <Greeting name="Vlada" />;
}
