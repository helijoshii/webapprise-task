import { Plus, Search } from 'lucide-react';
import { useState } from 'react';
import AddUser from './AddUser';

const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (
    <div className=" h-9 items-center flex justify-between px-4 sm:px-8">
      
      <div className="flex gap-1 items-center"  onClick={() => setOpen(true)}>
        <Plus className="w-5 h-5 text-gray-700" />
        <p className="text-base font-medium leading-4">Users</p>
      </div>
      <div className="flex gap-2 items-center">
        <Search className="w-4 h-4" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent leading-5 outline-none border-none focus:outline-none focus:border-none"
        />
      </div>
      {open && <AddUser close={() => setOpen(false)} />}
    </div>

  );
};

export default Navbar;