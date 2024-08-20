/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

import Button from "@/components/atoms/button";

// Define the types for User and the UserTable props
interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  role: string;
  selected?: boolean;
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [usersTable, setUsersTable] = useState<any[]>(users);
  const isSelectedAll = usersTable.every((user) => user.selected);
  const isEnabled = usersTable.some((user) => user.selected);

  const handleSelectAll = () => {
    const data = usersTable.map((u) => ({ ...u, selected: !u.selected }));
    setUsersTable(data);
  };

  const handleSelectUser = (id: number) => {
    const data = usersTable.map((user) => {
      if (user.id === id) {
        user.selected = !user.selected;
      }
      return user;
    });
    setUsersTable(data);
  };

  return (
    <div className="t-white user">
      <h2>User Table</h2>
      <table cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                name="select all"
                onChange={handleSelectAll}
                checked={isSelectedAll}
              />
            </th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {usersTable.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={user.selected ?? false}
                    onChange={() => handleSelectUser(user.id)}
                  />
                </td>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="p-2">
        <Button disabled={!isEnabled}>Submit Data</Button>
      </div>
    </div>
  );
};

// Sample users data
const users: User[] = [
  {
    id: 1,
    firstName: "Emily",
    lastName: "Johnson",
    age: 28,
    gender: "female",
    email: "emily.johnson@x.dummyjson.com",
    role: "admin",
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    age: 32,
    gender: "male",
    email: "john.doe@x.dummyjson.com",
    role: "user",
  },
  // More users...
];

export default function Users() {
  return (
    <div>
      <UserTable users={users} />
    </div>
  );
}
