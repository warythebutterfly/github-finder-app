import { useContext, useEffect } from "react";
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
      if(userData.message)
      dispatch({ type: "GET_USERS", payload: [] });
      else dispatch({ type: "GET_USERS", payload: userData });
      console.log(userData, "from user results")
    };

    getUsers();
  }, [dispatch]);

  if (!isLoading && !filtered.length) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={users.id} user={user} />
        ))}
      </div>
    );
  } else if (!isLoading && filtered.length) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {filtered.map((user) => (
          <UserItem key={filtered.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
