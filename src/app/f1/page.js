import React from "react";
import Link from "next/link";
const F1 = () => {
  return (
    <div>
      <h1>F1</h1>
      <Link href={"/f1/f2"}>go to f2</Link>
    </div>
  );
};

export default F1;
