import React, { useState, useEffect } from 'react';
import { Stage, Layer, Group } from 'react-konva';
import { fetchImageResponse } from '../../service';
import RenderImageLayers from '../../components/RenderImageLayers';
import LayerControls from '../../components/LayerControls';

import './index.css';

const ScanResult = () => {
  const [stageScale, setStageScale] = useState(0.4);
  const [stageX, setStageX] = useState(1);
  const [stageY, setStageY] = useState(1);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    initFetchImageResponse();
  }, []);

  const initFetchImageResponse = async () => {
    const response = await fetchImageResponse();
    setImageList(response);
  };

  const imageToggle = (e) => {
    let imageCopy = [...imageList];
    imageCopy.forEach((imageMeta, index) => {
      if (imageMeta.id === Number(e.target.id)) {
        imageCopy[index] = { ...imageMeta, visible: !imageMeta.visible };
      }
    });
    setImageList([...imageCopy]);
  };

  const handleWheel = (e) => {
    e.evt.preventDefault();

    const scaleBy = 1.1;
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
          <div className="info">Info: You can drag and zoom the image</div>
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
        <div>
          <LayerControls imageToggle={imageToggle} imageList={imageList} />
        </div>
      </div>
    </>
  );
};

export default ScanResult;
