import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Modal from 'some-react-modal';

export class CoolModal extends React.Component {
  render() {
    const {title, size, onExit, children} = this.prop;
    const width = size === 'small'
      ? '360px'
      : '600px';
    <Modal onExit={onExit} enableKeys={true} closeOnOutsideClick={true}>
      <div style={{
          width
        }}>
        <h1>{title}</h1>
        {children}
      </div>
    </Modal>
  }
}
