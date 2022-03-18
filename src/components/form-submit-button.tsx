import React from "react";

type Props = {
  userInput: any;
};

function SubmitButton({ userInput }: Props) {
  return (
    <div className="justify-center flex-col items-center mt-2 sm:mt-8 flex">
      <button
        className="
            bg-blue-600
            text-gray-100
            rounded-md
            h-8
                        sm:h-auto
                        sm:rounded-lg
                        w-20
                        sm:w-52
                        p-1
                        text-xs
                        sm:text-md
                        sm:p-3
                    "
        onClick={() => console.log(userInput)}
      >
        Get Started
      </button>
    </div>
  );
}

export default SubmitButton;
