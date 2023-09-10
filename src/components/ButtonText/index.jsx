import PropTypes from 'prop-types';
import { Container } from './styles';

export function ButtonText({ title, ...rest }) {
  return(
    <Container 
      {...rest}
      type="button"
    >
      {title}
    </Container>
  )
}

ButtonText.propTypes = {
  title: PropTypes.string.isRequired,
};