// import React, { useEffect, useState } from "react";
// import styles from "./style.module.css";
// import Input from "@/app/component/input";
// import Button from "@/app/component/button";
// import Form from "@/app/component/form";
// import Row from "@/app/component/row";

// let obj = {
//   row: [
//     {
//       col: 3,
//       align: "left",
//       control: [
//         {
//           controlType: "input",
//           type: "text",
//           title: "Name",
//           placeholder: "Enter Name",
//           onChange: "handleChange",
//           name: "name",
//         },
//         {
//           controlType: "input",
//           type: "number",
//           title: "Age",
//           placeholder: "Enter Name",
//           onChange: "handleChange",
//           name: "age",
//         },
//         {
//           controlType: "input",
//           type: "email",
//           title: "Email",
//           placeholder: "Enter Name",
//           onChange: "handleChange",
//           name: "email",
//         },
//         {
//           controlType: "button",
//           title: "Submit",
//           type: "primary",
//           onClick: "handleSubmit",
//           name: "email",
//         },
//       ],
//     },
//     {
//       col: 3,
//       align: "left",
//       control: [
//         {
//           controlType: "input",
//           type: "text",
//           title: "Name",
//           placeholder: "Enter Name",
//           onChange: "handleChange",
//           name: "name",
//         },
//         {
//           controlType: "input",
//           type: "number",
//           title: "Age",
//           placeholder: "Enter Name",
//           onChange: "handleChange",
//           name: "age",
//         },
//         {
//           controlType: "input",
//           type: "email",
//           title: "Email",
//           placeholder: "Enter Name",
//           onChange: "handleChange",
//           name: "email",
//         },
//         {
//           controlType: "button",
//           title: "Submit",
//           type: "primary",
//           onClick: "handleSubmit",
//           name: "email",
//         },
//       ],
//     },
//   ],
// };
// function RegistrationForm() {
//   const [formData, setFormData] = useState({});

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData((prev) => {
//       return { ...prev, [name]: value };
//     });
//   }

//   function handleSubmit() {
//     console.log(formData);
//   }

//   let functions = {
//     handleSubmit,
//     handleChange,
//   };

//   //   return obj.row.map((row, rowKey) => {
//   //     return (
//   //       <Row key={rowKey}>
//   //         {row.control.map((control, controlIndex) => {
//   //           if (control.controlType == "input")
//   //             return (
//   //               <Input
//   //                 key={rowKey + controlIndex}
//   //                 {...control}
//   //                 onChange={functions[control.onChange]}
//   //               />
//   //             );
//   //           if (control.controlType == "button")
//   //             return (
//   //               <Button
//   //                 key={rowKey + controlIndex}
//   //                 {...control}
//   //                 onClick={functions[control.onClick]}
//   //               />
//   //             );
//   //         })}{" "}
//   //       </Row>
//   //     );
//   //   });

//   return (
//     <Form onSubmit={handleSubmit} title={"Registration Form"}>
//       {" "}
//       {/* Handle submit function ko define karna padega */}
//       {obj.row.map((row, rowKey) => {
//         return (
//           <Row key={rowKey}>
//             {row.control.map((control, controlIndex) => {
//               if (control.controlType === "input")
//                 return (
//                   <Input
//                     key={rowKey + controlIndex}
//                     {...control}
//                     onChange={functions[control.onChange]}
//                   />
//                 );
//               if (control.controlType === "button")
//                 return (
//                   <Button
//                     key={rowKey + controlIndex}
//                     {...control}
//                     onClick={functions[control.onClick]}
//                   />
//                 );
//             })}
//           </Row>
//         );
//       })}
//     </Form>
//   );
// }

// export default RegistrationForm;

// // <Form title={"Registration Form"}>
// //   <Row col={5} align="left">
// //     <Input
// //       title="Name"
// //       placeholder="Enter Name"
// //       onChange={handleChange}
// //       name="name"
// //     />
// //     <Input
// //       title="Age"
// //       type="number"
// //       placeholder="Enter Name"
// //       onChange={handleChange}
// //       name="age"
// //     />
// //     <Input
// //       title="Email"
// //       type="email"
// //       placeholder="Enter Name"
// //       onChange={handleChange}
// //       name="email"
// //     />
// //   </Row>
// //   <Input
// //     title="phone"
// //     type="phone"
// //     placeholder="Enter Name"
// //     onChange={handleChange}
// //     name="phone"
// //   />
// //   <Button onClick={handleSubmit} title="Submit" type="secondary" />
// // </Form>
