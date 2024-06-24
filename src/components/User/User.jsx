import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="text-2xl bg-slate-400 p-4 text-white rounded-full">
      User: {userid}{" "}
    </div>
  );
}

export default User;
