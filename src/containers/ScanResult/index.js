import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image, Group } from 'react-konva';
import useImage from 'use-image';

import './index.css';

const scanImages = [
  {
    url: '/images/set-1/opg_demo_02.jpg',
    id: 1,
    visible: true,
    title: 'Main Image',
  },
  { url: '/images/set-1/layer01.png', id: 2, visible: true, title: 'Layer 1' },
  { url: '/images/set-1/layer02.png', id: 3, visible: false, title: 'Layer 2' },
  { url: '/images/set-1/layer03.png', id: 4, visible: true, title: 'Layer 3' },
];

const ImageRender = ({ imageUrl, visible }) => {
  const [image] = useImage(imageUrl);
  return <Image visible={visible} image={image} />;
};

const RenderImageLayers = ({ imageList }) =>
  imageList.map(({ url, id, visible }) => (
    <ImageRender key={id} visible={visible} id={id} imageUrl={url} />
  ));

const ScanResult = () => {
  const [stageScale, setStageScale] = useState(0.4);
  const [stageX, setStageX] = useState(1);
  const [stageY, setStageY] = useState(1);
  const [imageList, setImageList] = useState(scanImages);

  useEffect(() => {
    console.log(imageList);
  }, [imageList]);

  const imageToggle = (e) => {
    let imageCopy = [...imageList];
    imageCopy.map((imageMeta, index) => {
      if (imageMeta.id === Number(e.target.id)) {
        imageCopy[index] = { ...imageMeta, visible: !imageMeta.visible };
      }
    });
    setImageList([...imageCopy]);
  };

  const handleWheel = (e) => {
    e.evt.preventDefault();

    const scaleBy = 1.02;
    const stage = e.target.getStage();
    const oldScale = stage.scaleX();

    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
    };

    const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
    setStageScale(newScale);
    setStageX(
      -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale
    );
    setStageY(
      -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
    );
  };

  return (
    <>
      <div className="container">
        <div className="scan-result">
          <Stage
            width={950}
            height={500}
            onWheel={handleWheel}
            draggable={true}
            scaleX={stageScale}
            scaleY={stageScale}
            x={stageX}
            y={stageY}
          >
            <Layer>
              <Group>
                <RenderImageLayers imageList={imageList} />
              </Group>
            </Layer>
          </Stage>
        </div>
        <div className="controls" onClick={imageToggle}>
          {imageList.map(({ visible, id, title, url }) => (
            <div key={id}>
              <input id={id} type="checkbox" checked={visible} />
              {title}
              <img
                src={url}
                width="60"
                height="40"
                border="1"
                alt="text"
                style={{ 'background-color': '#fff' }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScanResult;
