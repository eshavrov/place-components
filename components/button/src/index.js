import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Ink from 'react-ink';

import { Container, Wrapper, Title } from './styles';

class Button extends PureComponent {
  render() {
    const { className, onClick, title } = this.props;

    return (
      <Container className={className} onClick={onClick}>
        <Wrapper>
          <Title>{title}</Title>
        </Wrapper>
        <Ink opacity={0.1} />
      </Container>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default Button;
