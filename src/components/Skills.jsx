import React from "react";
import HTML from "../assets/HTML.jpeg";
import CSS from "../assets/CSS.jpeg";
import ReactImg from "../assets/ReactImg.jpeg";
import Python from "../assets/Python.jpeg";
import Pytorch from "../assets/Pytorch_logo.png";
import Tensorflow from "../assets/TensorFlow.jpeg";
import Java from "../assets/Java.jpeg";
import C from "../assets/C.jpeg";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-gray-300">Skills</p>
          <p className="py-4">
            {" "}
            These are the technologies that I have experiences with.{" "}
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm: grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 h-20 object-contain mx-auto"
              src={HTML}
              alt="HTML Icon"
            />
            <p> HTML </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 h-20 object-contain mx-auto"
              src={CSS}
              alt="CSS Icon"
            />
            <p> CSS </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 h-20 object-contain mx-auto"
              src={ReactImg}
              alt="React.js Icon"
            />
            <p> React </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 h-20 object-contain mx-auto"
              src={Python}
              alt="Python Icon"
            />
            <p> Python </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 h-20 object-contain mx-auto"
              src={Pytorch}
              alt="Pytorch Icon"
            />
            <p> Pytorch </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 h-20 object-contain mx-auto"
              src={Tensorflow}
              alt="Tensorflow Icon"
            />
            <p> Tensorflow </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 h-20 object-contain mx-auto"
              src={Java}
              alt="Java Icon"
            />
            <p> Java </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 h-20 object-contain mx-auto"
              src={C}
              alt="C Icon"
            />
            <p> C </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
