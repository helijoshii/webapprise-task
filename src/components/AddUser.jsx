import React from "react";
import ClickAwayListener from "react-click-away-listener";

const AddUser = ({ close }) => {
  return (
    <div>
      <div className="h-screen w-screen fixed inset-0 overflow-auto z-50 flex items-center justify-center">
        <ClickAwayListener onClickAway={close}>
          <div className="bg-white w-full max-w-md mx-4 my-16 rounded-lg p-5">
            <div className="text-center text-[#287fb8] text-base font-semibold my-5">
              <p>Add Name</p>
            </div>

            <hr className="text-[#AAA]" />

            <form>
              <input
                type="text"
                placeholder="First Name"
                className="block w-full p-3 border-b-2 border-gray-400 mb-3"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="block w-full p-3 border-b-2 border-gray-400 mb-3"
                required
              />
              <input
                type="number"
                placeholder="Age"
                className="block w-full p-3 border-b-2 border-gray-400 mb-3"
                required
              />

              <div className="flex flex-col items-center justify-center py-7">
                <button
                  type="submit"
                  className="bg-[#287fb8] w-full max-w-xs rounded-full px-7 py-2 text-white text-center font-semibold cursor-pointer"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </ClickAwayListener>
      </div>
    </div>
  );
};

export default AddUser;
