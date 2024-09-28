import { Button } from "@/components/atoms/button";

const UsersList = () => {
  const users: any[] = [];
  const addUser = () => {};
  return (
    <div className="container mx-auto h-full min-h-screen bg-black bg-gradient-to-t text-white">
      <header className="flex justify-between p-5">
        <h1 className="mb-6 flex items-start text-center text-3xl font-bold">
          Users List
        </h1>
        <Button onClick={addUser}>Add User</Button>
      </header>

      <div className="grid h-full grid-cols-4 gap-4">
        {(users ?? []).map((user: any) => (
          <div
            key={user.id}
            className={`transform rounded-lg border border-none bg-slate-900 p-1 text-sm shadow-md transition-transform hover:scale-105 hover:shadow-lg`}
          >
            <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

            <div className="mx-auto flex w-full items-center justify-center px-0">
              <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
                <div className="absolute inset-0 h-full w-full animate-rotate rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>
                <div className="relative z-20 flex w-full rounded-[0.60rem] bg-slate-900 p-2">
                  <div className="mb-2 flex items-center">
                    <img
                      src={`https://picsum.photos/id/${user.id}/80/80`} // Smaller random image
                      alt={`${user.firstName} ${user.lastName}`}
                      className="mr-2 h-12 w-12 rounded-full border-2 border-gray-300 shadow-sm"
                    />
                    <div>
                      <h2 className="font-semibold text-white">
                        {user.firstName} {user.lastName}
                      </h2>
                      <p className="text-xs text-white">{user.username}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return <UsersList />;
}
