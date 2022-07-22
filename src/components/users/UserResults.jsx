import { useContext, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
import { fetchUsers } from "../../context/github/GithubActions";

function UserResults() {
  const { users, isLoading, filtered, dispatch } = useContext(GithubContext);

  useEffect(() => {
    dispatch({ type: "SET_ISLOADING" });

    const getUsers = async () => {
      const userData = await fetchUsers();
      if (userData.message) dispatch({ type: "GET_USERS", payload: [] });
      else dispatch({ type: "GET_USERS", payload: userData });
    };

    getUsers();
  }, [dispatch]);

  if (!isLoading && filtered.length === 0) {
    return (
        <>
        <div className="w-full">
          <div className="card shadow-md compact side w-full bg-base-200 mb-3">
            <div className="flex-row items-center space-x-6 card-body">
              <div>
                <div className="avatar">
                  <div className="rounded-full shadow w-14 h-14">
                    <FaGithub className="text-6xl" />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="card-title">
                  Top Github Users
                </h2>
              </div>
            </div>
          </div>
        </div>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={users.id} user={user} />
        ))}
      </div>
      <div className="w-full">
          <div className="card shadow-md compact side w-full bg-base-200 mt-3">
            <div className="flex-row items-center space-x-6 card-body">
              <div>
                <div className="avatar">
                  <div className="rounded-full shadow w-14 h-14">
                    <FaGithub className="text-6xl" />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="card-title">
                  Showing first 100 results
                </h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (!isLoading && filtered.length > 0) {
    return (
      <>
        <div className="w-full">
          <div className="card shadow-md compact side w-full bg-base-200 mb-3">
            <div className="flex-row items-center space-x-6 card-body">
              <div>
                <div className="avatar">
                  <div className="rounded-full shadow w-14 h-14">
                    <FaGithub className="text-6xl" />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="card-title">
                  About {filtered[1].toLocaleString()} results
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {filtered[0].map((user) => (
            <UserItem key={filtered[0].id} user={user} />
          ))}
        </div>
        <div className="w-full">
          <div className="card shadow-md compact side w-full bg-base-200 mt-3">
            <div className="flex-row items-center space-x-6 card-body">
              <div>
                <div className="avatar">
                  <div className="rounded-full shadow w-14 h-14">
                    <FaGithub className="text-6xl" />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="card-title">
                  Showing  {filtered[1] >= 100 ? 100 : filtered[1]} results
                </h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
