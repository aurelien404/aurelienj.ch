import React, { useEffect, useState } from "react";
import axios from "axios";
import AddContactForm from "./addContactForm";

function AppContact() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(users);
  return (
    <div className="p-4">
      <h2>User List</h2>
      <div className="w-4/6 bg-orange-500 mx-auto">
        <ul className="flex flex-col gap-3 items-center">
          {users.map((user) => (
            <li
              key={user.id}
              className=" flex flex-row gap-4 justify-around w-full border-2 p-4"
            >
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <p>{user.tel}</p>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6">
        <AddContactForm />
      </div>
    </div>
  );
}

export default AppContact;
