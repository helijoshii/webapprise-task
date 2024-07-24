import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { Plus, Search } from 'lucide-react';
import AddUser from './AddUser';
import { useEffect, useState } from "react";

const TABLE_HEAD = ["", "First Name", "Last Name", "Age", "Visits", "Status", "Profile Progress"];

function Tables() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Add search query state

  async function getData() {
    try {
      const { data } = await axios.get("https://dummyjson.com/users");
      setUser(data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function handleSearch(query) {
    if (!query) {
      getData(); // Fetch all data if search query is empty
      return;
    }

    try {
      const { data } = await axios.get(`https://dummyjson.com/users/search?q=${query}`);
      setUser(data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="h-9 items-center flex justify-between px-4 sm:px-8">
        <div className="flex gap-1 items-center" onClick={() => setOpen(true)}>
          <Plus className="w-5 h-5 text-gray-700" />
          <p className="text-base font-medium leading-4">Users</p>
        </div>
        <div className="flex gap-2 items-center">
          <Search className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent leading-5 outline-none border-none focus:outline-none focus:border-none"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch(e.target.value);
            }}
          />
        </div>
        {open && <AddUser close={() => setOpen(false)} />}
      </div>
      <Card className="h-full w-full overflow-auto">
        <table className="w-full min-w-max table-auto text-left ">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 w-[150px]"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {user?.map(({ firstName, lastName, age }, index) => {
              const isLast = index === user.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out" />
                  </td>
                  <td className={`${classes} w-[150px]`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {firstName}
                    </Typography>
                  </td>
                  <td className={`${classes} w-[150px]`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {lastName}
                    </Typography>
                  </td>
                  <td className={`${classes} w-[50px]`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {age}
                    </Typography>
                  </td>
                  <td className={`${classes} w-[100px]`}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      -
                    </Typography>
                  </td>
                  <td className={`${classes} w-[100px]`}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      -
                    </Typography>
                  </td>
                  <td className={`${classes} w-[100px]`}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      -
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </>
  );
}

export default Tables;
