import React from "react";
import { useState, useEffect } from "react";

const GitHubUser = () => {
  const [users, setUser] = useState([]);
  const [isloading, setLoading] = useState(true);
  const [iseError, setError] = useState(false);

  const apiLink = "https://api.github.com/users";
  const userFetching = async () => {
    const fetchingData = await fetch(apiLink);
    // error handling
    if (fetchingData.status > 300) {
        setError(true);
        setLoading(false);
    }
    const resData = await fetchingData.json();
    setUser(resData);
    // loading page cancle
    setLoading(false);
  };

  useEffect(() => {
    userFetching();
  }, []);


//   conditional return
  if (isloading) {
    return <h2 className="text-center p-3 bg-danger">LOADING . . .</h2>;
  }
  if (iseError){
    return <h2 className="text-center p-3 bg-danger">Opps something wrong!</h2>
  }
    return (
      <div className="githubUser bg-dark-subtle min-vh-100 ">
        <h1 className="text-center p-2 bg-danger fs-2 text-white">
          Github Users
        </h1>
        <div className="githubUser d-flex p-2 shadow-sm justify-content-around align-items-center bg-danger-subtle rounded mx-4">
          <table className=" text-start m-3 shadow" style={{ width: "900px" }}>
            <tr className="bg-white text-center  " >
              <th className="p-3 border-2">ID</th>
              <th className="p-3 border-2">Avator</th>
              <th className="p-3 border-2">Name</th>
            </tr>

            <tbody>
              {users.map((item) => {
                return (
                  
                  <tr className=" bg-info text-center my-2 " key={item.id}>
                    <td className="p-2 bg-info border-1 my-2">{item.id}</td>
                    <td className="p-2 bg-info border-1 my-2">
                      <img
                        style={{ width: "150px" }}
                        className=" img-thumbnail rounded-circle "
                        src={item.avatar_url}
                        alt=""
                      />
                    </td>
                    <td className="p-2 bg-info border-1 my-2">{item.login}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default GitHubUser;
