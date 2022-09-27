import React from 'react';
import PropTypes from 'prop-types';
import Statistic from '../Statistic/Statistic';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <Statistic label="Good" value={good} />
    <Statistic label="Netural" value={neutral} />
    <Statistic label="Bad" value={bad} />
    <Statistic label="Total" value={total} />
    <Statistic label="Positive feedback" value={positivePercentage} />
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
