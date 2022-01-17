import React from 'react';
import './Person.scss';

import { PropTypes } from 'prop-types';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const partner = (sex === 'm' ? 'wife' : 'husband');

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && (
        <p className="Person__age">
          {`I am ${age} ${sex}`}
        </p>
      )}
      {isMarried
        ? `My ${partner}'s name is ${partnerName}`
        : partnerName
      }

    </section>
  );
};

Person.defaultProps = {
  partnerName: 'I am not married',
  age: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};