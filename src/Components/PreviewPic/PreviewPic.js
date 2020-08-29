import React, { useContext, lazy, memo } from 'react';
import { FirebaseContext } from '../../state';

const Slider = lazy(() => import('../Slider/Slider'));
const Pic = lazy(() => import('./Pic/Pic'));
const Desc = lazy(() => import('./Desc/Desc'));

const PreviewPic = () => {
    const { state } = useContext(FirebaseContext);
    return (
        <Slider>
            {state.category === 'showGallery'
                ? state.imageList && state.imageList.map((item, index) => <Pic key={index} item={item} />)
                : state.imageList &&
                  state.imageList.map((item, index) => (
                      <Pic key={index} item={item}>
                          <Desc item={item} />
                      </Pic>
                  ))}
        </Slider>
    );
};

export default memo(PreviewPic);
