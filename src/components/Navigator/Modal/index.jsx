import {Modal} from 'antd';
import {useState} from 'react';

export default (props) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      footer={null}
      title='Basic Modal'
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>{props.item}</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};
