import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
const Delete = ({ id , name}) => {
  const handleDelete = async () => {
    let deleteEmp = await fetch(`http://localhost:3000/api/db-emp/${id}`, {
      method: "DELETE",
    });
    deleteEmp = await deleteEmp.json();
    if (deleteEmp) {
      toast.success(`employee ${name} deleted`);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    if (!deleteEmp) {
      return toast.error("cannot delete employee");
    }
  };
  return (
    <button onClick={handleDelete}>
      <AiFillDelete />
    </button>
  );
};

export default Delete;
