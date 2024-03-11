import PropTypes from 'prop-types';

const InputCheckbox = ({ fieldDetails, handleChange }) => (
  <div className={fieldDetails.className}>
    <input
      className="thisApp-checkbox__input"
      id={`${fieldDetails.fieldName}-input`}
      name={fieldDetails.fieldName}
      type="checkbox"
      onChange={handleChange}
      defaultChecked={fieldDetails.value}
    />
    <label
      className="thisApp-label thisApp-checkbox__label"
      htmlFor={`${fieldDetails.fieldName}-input`}
    >
      {fieldDetails.label}
    </label>
  </div>
);

InputCheckbox.propTypes = {
  fieldDetails: PropTypes.shape({
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.bool,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputCheckbox;
