import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const ImageRender = ({ imageUrl, visible }) => {
  const [image] = useImage(imageUrl);
  return <Image visible={visible} image={image} />;
};

const RenderImageLayers = ({ imageList }) =>
  imageList.map(({ url, id, visible }) => (
    <ImageRender key={id} visible={visible} id={id} imageUrl={url} />
  ));

export default RenderImageLayers;
