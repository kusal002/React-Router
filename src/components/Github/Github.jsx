import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/kusal002")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-400 text-white rounded-3xl text-2xl p-4 ">
      <p className="mt-5"> Github Followers: {data.followers} </p>
      <img
        className="rounded-full p-2"
        src={data.avatar_url}
        alt="Git Picture"
        width={280}
      />
    </div>
  );
}

export default Github;
