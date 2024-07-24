import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";

import axios from "axios";
const AddUser = ({ close }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  async function handleAdd(e) {
    e.preventDefault();
    try {
      const response = await axios.post('https://dummyjson.com/users/add', {
         firstName,
         lastName,
         age
      });
      console.log('Add successful:', response.data);
      alert('User added successfully');
      // Handle successful login response here
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error here
    }
  }

  return (
    <div>
      <div className="h-screen w-screen fixed inset-0 overflow-auto z-50 flex items-center justify-center ">
        <ClickAwayListener onClickAway={close}>
          <div className="bg-gray-200 w-full max-w-md mx-4 my-16 rounded-lg p-5">
            <div className="text-center text-[#287fb8] text-base font-semibold my-5">
              <p>Add Name</p>
            </div>

            <hr className="text-[#AAA]" />

            <form>
              <input
                type="text"
                placeholder="First Name"
                className="block w-full p-3 border-b-2 border-gray-400 mb-3"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="block w-full p-3 border-b-2 border-gray-400 mb-3"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Age"
                className="block w-full p-3 border-b-2 border-gray-400 mb-3"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />

              <div className="flex flex-col items-center justify-center py-7">
                <button
                  type="submit"
                  className="bg-[#287fb8] w-full max-w-xs rounded-full px-7 py-2 text-white text-center font-semibold cursor-pointer"
                  onClick={handleAdd}
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
