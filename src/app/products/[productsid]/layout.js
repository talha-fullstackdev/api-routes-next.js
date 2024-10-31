import React from "react";
const ProductDetailsLayout = ({ children }) => {

  return (
    <div>
      <p className="text-xl text-black bg-slate-500 inline-block p-2 mt-2 rounded-md ml-4">
        This is product details layout header
      </p>
      {children}
      <p className="text-xl text-black bg-slate-500 inline-block p-2 mt-2 mb-2 rounded-md ml-4">
        This is products details layout footer
      </p>
    </div>
  );
};
export const metadata ={

  title:"products details page"

}
export default ProductDetailsLayout;
