import * as React from "react";

function LandingPage() {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="flex flex-col mt-32 max-w-full w-[759px] max-md:mt-10">
        <div className="text-8xl font-extrabold bg-clip-text text-neutral-900 max-md:max-w-full max-md:text-4xl">
          <span className="text-neutral-900">VisualLearn</span> AI
        </div>
        <div className="items-start px-10 pt-11 pb-44 mt-32 text-4xl font-semibold bg-white border-solid shadow-sm border-[5px] border-neutral-500 text-neutral-400 max-md:px-5 max-md:pb-10 max-md:mt-10 max-md:max-w-full">
          Input text
        </div>
      </div>
    </div>
  );
}

export default LandingPage;