import { StyledButton } from './styles';
import PropTypes from 'prop-types';

export default function CustomButton({ label, onClick, color, wide }) {
  return (
    <StyledButton onClick={onClick} color={color}>
      {label}
    </StyledButton>
  );
}

CustomButton.defaultProps = {
  color: null,
  // wide: null
};

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  // wide: PropTypes.bool,
};
