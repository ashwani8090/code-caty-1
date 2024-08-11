import { useEffect, useState } from "react";

interface IUser {
  firstName: string;
  id: number;
}
/**
 *
 *  componentDidMount
 *  componentDidUpdate
 *  componentWillUnmount
 *
 */
const UsersList = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [id, setId] = useState<number | null>(null);
  // const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data?.users));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/users/" + id)
      .then((res) => res.json())
      .then(console.log);
  }, [id]);

  return (
    <div className="t-white">
      <h1>Users</h1>
      {/* <span>{counter}</span> */}
      {/* <button onClick={() => setCounter((c) => c + 1)}>+</button> */}
      {!!users?.length && (
        <>
          {users?.map((u) => (
            <ul>
              <li
                onClick={() => {
                  setId(u.id);
                }}
                key={u.id}
              >
                {u.firstName}
              </li>
            </ul>
          ))}
        </>
      )}
    </div>
  );
};

export default UsersList;
