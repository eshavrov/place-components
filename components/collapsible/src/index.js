import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';

import { Container, Head, Body, InnerBody, Title, StateIcon, ANIMATION_TIME } from './styles';

class Collapsible extends Component {
  state = {
    collapsed: this.props.initialCollapsed,
    processing: false,
    contentHeight: undefined,
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { collapsed, contentHeight } = this.state;
    const { collapsed: nextCollapsed, contentHeight: nextContentHeight } = nextState;

    const propsWillChange = !isEqual(this.props, nextProps);
    const collapsedWillChange = collapsed !== nextCollapsed;
    const contentHeightWillChange = contentHeight !== nextContentHeight;

    return propsWillChange || collapsedWillChange || (contentHeightWillChange && !nextCollapsed);
  }

  componentDidUpdate(prevProps, prevState) {
    const { collapsed } = this.state;
    const { collapsed: prevCollapsed } = prevState;

    if (collapsed !== prevCollapsed) {
      this._onToggleStart(collapsed);
      setTimeout(() => {
        this.setState({ processing: false });
        this._onToggleFinish(collapsed);
      }, ANIMATION_TIME);
    }
  }

  _onToggleStart = collapsed => {
    const { onToggleStart } = this.props;
    if (!onToggleStart) {
      return;
    }

    onToggleStart(collapsed);
  };

  _onToggleFinish = collapsed => {
    const { onToggleFinish } = this.props;
    if (!onToggleFinish) {
      return;
    }

    onToggleFinish(collapsed);
  };

  _onKeyPress = ({ key }) => {
    if (key === ' ' || key === 'Enter') {
      this._onTriggerClick();
    }
  };

  _onTriggerClick = () => {
    const { processing } = this.state;
    if (processing) {
      return;
    }

    this.setState(({ collapsed }) => {
      return { collapsed: !collapsed, processing: true };
    });
  };

  _onRefBody = component => {
    if (!component) {
      return;
    }

    this.setState({
      contentHeight: component.clientHeight,
    });
  };

  render() {
    const { title, children, className, borderStyle, tabIndex } = this.props;
    const { collapsed, contentHeight } = this.state;

    return (
      <Container className={className} collapsed={collapsed} borderStyle={borderStyle}>
        <Head onClick={this._onTriggerClick} onKeyPress={this._onKeyPress} tabIndex={tabIndex && tabIndex}>
          <Title>{title}</Title>
          <StateIcon />
        </Head>
        <Body height={contentHeight}>
          <InnerBody ref={this._onRefBody}>{children}</InnerBody>
        </Body>
      </Container>
    );
  }
}

Collapsible.propTypes = {
  className: PropTypes.string,
  borderStyle: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  initialCollapsed: PropTypes.bool,
  onToggleStart: PropTypes.func,
  onToggleFinish: PropTypes.func,
  tabIndex: PropTypes.number,
};

Collapsible.defaultProps = {
  initialCollapsed: false,
  borderStyle: 'solid rgba(33, 33, 33, 0.3)',
  tabIndex: null,
};

export default Collapsible;
