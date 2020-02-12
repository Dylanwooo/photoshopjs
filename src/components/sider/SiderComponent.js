import React from 'react';
import {DivideWrap, ItemWrap} from './style';
import {filterList} from './../../constants';

const Divide = ({name}) => {
  return <DivideWrap>{name}</DivideWrap>;
};
const Item = ({tag, selected}) => {
  return <ItemWrap selected={selected}>{tag}</ItemWrap>;
};

const SiderComponent = () => {
  return (
    <React.Fragment>
      <Divide name="FILTER" />
      {filterList.map((ele, idx) => {
        return <Item key={idx} tag={ele} />;
      })}
    </React.Fragment>
  );
};

export default SiderComponent;
