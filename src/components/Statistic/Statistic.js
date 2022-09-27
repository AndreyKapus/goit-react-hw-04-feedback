import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Statistic.module.css';

const Statistic = ({ value, label }) => (
  <>
    {label === 'Positive feedback' ? (
      <p className={Styles.statisticLabel}>
        {label}: {value}%
      </p>
    ) : (
      <p className={Styles.statisticLabel}>
        {label}: {value}
      </p>
    )}
  </>
);

Statistic.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default Statistic;
