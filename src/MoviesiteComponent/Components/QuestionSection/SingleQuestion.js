import React, { useState, useEffect } from "react";
import "./SingleQuestion.css";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

const SingleQuestion = ({ title, answer }) => {
  // console.log(title);

  const [showinfo, setShowinfo] = useState(false);

  return (
    <div className="single-question-container">
      <div className="title-container">
        <p className="question-title">{title}</p>
        <button className="question-btn" onClick={() => setShowinfo(!showinfo)}>
          {showinfo ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}
        </button>
      </div>
      <div className={`answer ${showinfo && "active-btn"}`}>
        {showinfo && <p>{answer}</p>}
      </div>
    </div>
  );
};

export default SingleQuestion;

// import React, { useRef, useState, useEffect } from "react";
// import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
// import "./SingleQuestion.css";
// import { useGlobalContext } from "../../context";

// const SingleQuestion = (data) => {
//   const { english, spanish } = data;
//   // console.log(english);
//   const [showinfo, setShowinfo] = useState(false);
//   const [dataForQuestion, setDataForQuestion] = useState("");
//   const [openSwitch, setOpenSwitch] = useGlobalContext();
//   // const [height, setHeight] = useState(0);
//   const forDetail = (item) => {
//     item.map((those, index) => {
//       return setDataForQuestion(those);
//     });
//   };

//   useEffect(() => {
//     if (openSwitch) {
//       forDetail(english);
//       console.log(dataForQuestion);
//     }
//     // if (!openSwitch) {
//     //   forDetail(spanish);
//     //   console.log(dataForQuestion);
//     // }
//   }, openSwitch);

//   return (
//     <div className="single-question-container">
//       <div className="title-container">
//         <p className="question-title"></p>
//         <button className="question-btn" onClick={() => setShowinfo(!showinfo)}>
//           {showinfo ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}
//         </button>
//       </div>
//       <div className={`answer ${showinfo && "active-btn"}`}>
//         {showinfo && <p></p>}
//       </div>
//     </div>
//   );
// };

// export default SingleQuestion;

// import React, { useRef, useState } from "react";
// import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
// import "./SingleQuestion.css";
// import { useGlobalContext } from "../../context";

// const SingleQuestion = ({ title, answer, id }) => {
//   const [showinfo, setShowinfo] = useState(false);
//   const [dataForQuestion, setDataForQuestion] = useState("");
//   const [openSwitch, setOpenSwitch] = useGlobalContext();
//   // const [height, setHeight] = useState(0);

//   return (
//     <div className="single-question-container">
//       <div className="title-container">
//         <p className="question-title">{title}</p>
//         <button className="question-btn" onClick={() => setShowinfo(!showinfo)}>
//           {showinfo ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}
//         </button>
//       </div>
//       <div className={`answer ${showinfo && "active-btn"}`}>
//         {showinfo && <p>{answer}</p>}
//       </div>
//     </div>
//   );
// };

// export default SingleQuestion;

// import React, { useRef, useState, useEffect } from "react";
// import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
// import "./SingleQuestion.css";
// import fordetail from "./fordetail";
// import { useGlobalContext } from "../../context";
// import { getByTitle } from "@testing-library/react";

// const SingleQuestion = ({ english, spanish }) => {
//   const { openSwitch, setOpenSwitch, setdata, fetchExactData } =
//     useGlobalContext();
//   const [showinfo, setShowinfo] = useState(false);
//   // const one = (items) => {
//   //   items.map((item) => {
//   //     const { title } = item;
//   //     return { title };
//   //   });
//   // };
//   // if (openSwitch === false) {
//   //   english.map((items) => {
//   //     const { title, answer } = items;
//   //     console.log(title);
//   //   });
//   // } else {
//   //   spanish.map((items) => {
//   //     const { title, answer } = items;
//   //   });
//   // }

//   // const onefunction = () => {
//   //   if (openSwitch === false) {
//   //     english.map((items) => {
//   //       const { title, answer } = items;
//   //       console.log(title);
//   //     });
//   //   }
//   //   if (openSwitch === true) {
//   //     spanish.map((items) => {
//   //       const { title, answer } = items;
//   //     });
//   //   }
//   // };
//   // useEffect(() => {
//   //   onefunction();
//   // }, [onefunction]);
//   return (
//     <div className="single-question-container">
//       <div className="title-container">
//         {openSwitch ? (
//           <p className="question-title">
//             {english.map((item) => {
//               return item.title;
//             })}
//           </p>
//         ) : (
//           <p className="question-title">teurui</p>
//         )}
//         <button
//           className="question-btn"
//           onClick={(english) => setShowinfo(!showinfo)}
//         >
//           {showinfo ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}
//         </button>
//       </div>
//       <div className={`answer ${showinfo && "active-btn"}`}>
//         {showinfo && <p></p>}
//       </div>
//     </div>
//   );
// };

// export default SingleQuestion;

// // import React, { useRef, useState } from "react";
// // import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
// // import "./SingleQuestion.css";

// // const SingleQuestion = ({ title, answer, id }) => {
// //   const [showinfo, setShowinfo] = useState(false);
// //   // const [height, setHeight] = useState(0);

// //   return (
// //     <div className="single-question-container">
// //       <div className="title-container">
// //         <p className="question-title">{title}</p>
// //         <button className="question-btn" onClick={() => setShowinfo(!showinfo)}>
// //           {showinfo ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}
// //         </button>
// //       </div>
// //       <div className={`answer ${showinfo && "active-btn"}`}>
// //         {showinfo && <p>{answer}</p>}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SingleQuestion;
