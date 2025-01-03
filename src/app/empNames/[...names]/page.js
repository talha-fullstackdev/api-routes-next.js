"use client"
import React from 'react'
import { useParams } from 'next/navigation'
const EmpName = () => {
    const {names} = useParams()
  return (
    <div>
        <h1>This Is Employess names list get from urls </h1>
        {names.map((empName,index)=>(
          <h3 key={index}>The name of employee is : {empName}</h3>
        ))}
    </div>
  )
}

export default EmpName
////////////////////////////////////////////////////////////////////////////////
// if at least one name talha if found in the url 
// "use client";
// import React from 'react';
// import { useParams } from 'next/navigation';

// const EmpName = () => {
//   const { names } = useParams(); // Assuming `names` is an array of strings extracted from the URL

//   // Filter the names to find "Talha"
//   const talhaName = names.find((name) => name.toLowerCase() === "talha");

//   return (
//     <div>
//       <h1>This Is Employees' Names List from URL</h1>
//       {talhaName ? (
//         <h3>The name of the employee is: {talhaName}</h3>
//       ) : (
//         <h3>No employee with the name Talha found.</h3>
//       )}
//     </div>
//   );
// };

// export default EmpName;


//////////////////////////////////////////////////////////////////////////
////// get talha names in url if we have multiples talha in the url
// "use client";
// import React from 'react';
// import { useParams } from 'next/navigation';

// const EmpName = () => {
//   const { names } = useParams(); // Assuming `names` is an array of strings extracted from the URL

//   // Filter all occurrences of "Talha" (case-insensitive)
//   const talhaNames = names.filter((name) => name.toLowerCase() === "talha");

//   return (
//     <div>
//       <h1>This Is Employees' Names List from URL</h1>
//       {talhaNames.length > 0 ? (
//         talhaNames.map((talhaName, index) => (
//           <h3 key={index}>The name of the employee is: {talhaName}</h3>
//         ))
//       ) : (
//         <h3>No employee with the name Talha found.</h3>
//       )}
//     </div>
//   );
// };

// export default EmpName;
