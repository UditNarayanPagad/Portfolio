import React from "react";
import { Modal } from "./ui/TextOpenButt";
import { ModalTrigger } from "./ui/TextOpenButt";
const StyleButt = () => {
  return (
    <div>
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Let's Work
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20 text-xl object-cover">
          <img height="100%" src="https://www.mapl.co.uk/wp-content/uploads/2015/10/Shutterstock-image-Architects-and-engineers.jpg" alt="" />
          </div>
        </ModalTrigger>  
      </Modal>
    </div>
  );
};

export default StyleButt;
