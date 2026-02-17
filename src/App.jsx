import React, { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <div
        className={`m-6 p-6 transition-all duration-300 ${isActive ? "blur-[2px] pointer-events-none select-none" : ""}`}
      >
        <button
          onClick={() => {
            setActive(true);
          }}
          className="mb-4 px-6 py-2.5 bg-indigo-600 text-white font-semibold text-base rounded-lg shadow-md shadow-indigo-500/40 hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/50 active:bg-indigo-800 active:translate-y-0 active:shadow-sm transition-all duration-200 cursor-pointer"
        >
          Create
        </button>
        <p className="gap-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eveniet
          ipsum possimus aspernatur repellendus expedita dolores laborum fugit,
          eum labore blanditiis quam laudantium magnam nostrum eius! Labore id
          voluptatibus nulla.
        </p>

        <p className="gap-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugiat
          consequatur, quia, at itaque numquam dolorum ab labore ipsa officiis
          aliquam veniam, asperiores blanditiis corrupti dolore nam beatae fuga
          ducimus.
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque amet
          laudantium similique cumque vel omnis praesentium repudiandae error
          porro, sint sit? Doloribus nihil maxime temporibus pariatur
          necessitatibus aliquam molestiae error.
        </p>
      </div>
      {isActive && <Modal isActive={isActive} setActive={setActive} />}
    </>
  );
};

export default App;
