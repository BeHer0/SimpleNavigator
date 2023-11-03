import { Modal, message } from 'antd';
import { useState } from 'react';

function Navigator({ item }) {
  const { title, smallTitle, iconSvg, children } = item;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const showModal = () => {
    if (!children.length) {
      return messageApi.warning('该链接已经失效');
    }

    if (children.length > 1) {
      return setIsModalOpen(true);
    }

    window.open(children[0], '_blank');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="box">
      {contextHolder}
      <div className="content border" onClick={showModal}>
        <div className="icon">{iconSvg}</div>
        <div className="desc">
          <div className="title">{title}</div>
          <div className="small">{smallTitle}</div>
        </div>
      </div>

      {children.length > 1 && (
        <Modal
          wrapClassName="modal-wrap"
          footer={null}
          title={'关于' + title + '的全部链接'}
          open={isModalOpen}
          onCancel={handleCancel}
        >
          <div className="modal-container">
            {children.map((item) => {
              return (
                <a
                  href={item.link}
                  target="_blank"
                  className="modal-item"
                  key={item.id}
                >
                  <div className="icon">{item.icon}</div>
                  <div className="title">{item.title}</div>
                </a>
              );
            })}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Navigator;
