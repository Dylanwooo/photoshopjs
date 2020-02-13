import React from 'react';
import {DivideWrap, ItemWrap} from './style';
import {filterList} from './../../constants';
import {connect} from 'react-redux';
import {worker} from './../../worker/worker';

const mapState = state => {};
// const mapDispatch = ({})

const SiderComponent = () => {
  const onTriggerWorker = () => {
    if (window.Worker) {
      let myWorker = new Worker(worker);

      myWorker.postMessage('Hi, this is a message from main.js');

      myWorker.onmessage = e => {
        console.log('Message received from worker', JSON.stringify(e));
      };
    }
  };
  return (
    <React.Fragment>
      <Divide name="FILTER" />
      {filterList.map((ele, idx) => {
        return <Item key={idx} tag={ele} triggerWorker={onTriggerWorker} />;
      })}
      <Divide name="EDIT" />
    </React.Fragment>
  );
};

const Divide = ({name}) => {
  return <DivideWrap>{name}</DivideWrap>;
};
const Item = ({tag, selected, triggerWorker}) => {
  return (
    <ItemWrap selected={selected} onClick={triggerWorker}>
      {tag}
    </ItemWrap>
  );
};

export default SiderComponent;
