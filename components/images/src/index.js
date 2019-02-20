import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Image from '../../image';
import { Container, WrapperChunk, ContainerChunk, Tile } from './styles';

class Images extends Component {
  render() {
    const { data = [], reversed = false } = this.props;

    return (
      <Container>
        {data.map((chunk, chunkIndex) => (
          <WrapperChunk key={`images-chunk-${chunkIndex}`}>
            <ContainerChunk>
              {chunk.map((tile, index) => (
                <Tile key={`images-tile-${index}`} grow={`${1 + Math.abs((chunkIndex + reversed - index) % 2)}`}>
                  <Image src={tile.src} />
                </Tile>
              ))}
            </ContainerChunk>
          </WrapperChunk>
        ))}
      </Container>
    );
  }
}

Images.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
      })
    )
  ),
  reversed: PropTypes.bool,
};

export default Images;
