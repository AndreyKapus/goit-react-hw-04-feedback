import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <>
      <h3 className={Styles.allTitle}>{title}</h3>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
