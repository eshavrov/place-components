import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper';

import { Container } from './styles';

class Gallery extends Component {
  componentDidMount() {
    this.swiper = new Swiper(this.swiperNode, {
      speed: 1200,
      spaceBetween: 0,
      touchReleaseOnEdges: true,
      zoom: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });
  }

  componentWillUnmount() {
    if (!this.swiper) {
      return;
    }

    this.swiper.destroy();
    this.swiper = null;
  }

  render() {
    const { data } = this.props;
    const hasPagination = data.length < 11;

    return (
      <Container>
        <div
          className="swiper-container"
          ref={node => {
            this.swiperNode = node;
          }}
        >
          <div className="swiper-wrapper">
            {data.map((slide, index) => (
              <div key={`slide-${index}`} className="swiper-slide">
                <div className="swiper-zoom-container">
                  <img src={slide.src} alt="blah-blah-blah" />
                </div>
              </div>
            ))}
          </div>
          {hasPagination && <div className="swiper-pagination" />}
          <div className="swiper-button-prev swiper-button-white" />
          <div className="swiper-button-next swiper-button-white" />
        </div>
      </Container>
    );
  }
}

Gallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    })
  ),
};

export default Gallery;
