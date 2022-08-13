import React from 'react';
import PropTypes from 'prop-types';

function IngredientDetailsProperty({ title, value }) {
  return (
    <>
      <p className="text text_type_main-default text_color_inactive mb-2">{title}</p>
      <p className="text text_type_digits-default text_color_inactive">{value}</p>
    </>
  );
}

IngredientDetailsProperty.propTypes = {
  title: PropTypes.string,
};

export default IngredientDetailsProperty;
