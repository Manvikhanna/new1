import style from "./style.module.css";
import { useState } from "react";
import FormGenerator from "@/app/component/requirements";

let obj = {
  row: [
    {
      col: 3,
      align: "left",
      control: [
        {
          controlType: "input",
          type: "text",
          title: "Comapny Name",
          placeholder: "Company Name",
          onChange: "handleChange",
          name: "name",
        },
        {
          controlType: "input",
          type: "text",
          title: "Company Website",
          placeholder: "Company Website",
          onChange: "handleChange",
          name: "age",
        },
        {
          controlType: "input",
          type: "text",
          title: "Industry/Sector",
          placeholder: "Finance,HealthCare,E-Commerce",
          onChange: "handleChange",
          name: "email",
        },
      ],
    },
    {
      col: 3,
      align: "left",
      control: [
        {
          controlType: "input",
          type: "text",
          title: "Comapny Size",
          placeholder: "Number Of Employees",
          onChange: "handleChange",
          name: "name",
        },
        {
          controlType: "input",
          type: "location",
          title: "Location- Address",
          placeholder: "Address",
          onChange: "handleChange",
          name: "age",
        },
        {
          controlType: "input",
          type: "location",
          title: "State",
          placeholder: "State",
          onChange: "handleChange",
          name: "email",
        },
      ],
    },
    {
      col: 3,
      align: "left",
      control: [
        {
          controlType: "input",
          type: "number",
          title: "Postal Code",
          placeholder: "Postal Code",
          onChange: "handleChange",
          name: "name",
        },
        {
          controlType: "input",
          type: "location",
          title: "GST Registration Number",
          placeholder: "GST Registration Number",
          onChange: "handleChange",
          name: "age",
        },
      ],
    },
  ],
};
let obj2 = {
  row: [
    {
      col: 3,
      align: "left",
      control: [
        {
          controlType: "input",
          type: "text",
          title: "Primary Contact Name",
          placeholder: "Primary Contact Name",
          onChange: "handleChange",
          name: "name",
        },
        {
          controlType: "input",
          type: "text",
          title: "Position/Designation",
          placeholder: "Position/Designation",
          onChange: "handleChange",
          name: "age",
        },
        {
          controlType: "input",
          type: "email",
          title: "Email Address",
          placeholder: "Email Address",
          onChange: "handleChange",
          name: "email",
        },
      ],
    },
    {
      col: 3,
      align: "left",
      control: [
        {
          controlType: "input",
          type: "text",
          title: "Comapny Size",
          placeholder: "Number Of Employees",
          onChange: "handleChange",
          name: "name",
        },
        {
          controlType: "input",
          type: "location",
          title: "Location- Address",
          placeholder: "Address",
          onChange: "handleChange",
          name: "age",
        },
        {
          controlType: "input",
          type: "location",
          title: "State",
          placeholder: "State",
          onChange: "handleChange",
          name: "email",
        },
      ],
    },
    {
      col: 3,
      align: "left",
      control: [
        {
          controlType: "input",
          type: "number",
          title: "Phone Number",
          placeholder: "Phone Number",
          onChange: "handleChange",
          name: "name",
        },
        {
          controlType: "input",
          type: "location",
          title: "Alternative Contact(Optional)",
          placeholder: "Alternative Contact(Optional)",
          onChange: "handleChange",
          name: "age",
        },
      ],
    },
  ],
};
let obj3 = {
  row: [
    {
      col: 3,
      align: "left",
      control: [
        {
          controlType: "input",
          type: "text",
          title: "Timeline/Deadline",
          placeholder: "Expected Start and Completion Date",
          onChange: "handleChange",
          name: "name",
        },
        {
          controlType: "input",
          type: "text",
          title: "Prefered Communication Method",
          placeholder: "Email/Phone/Video-Call",
          onChange: "handleChange",
          name: "age",
        },
      ],
    },
    {
      col: 1,
      align: "left",
      control: [
        {
          controlType: "textarea",
          type: "text",
          title: "Previous Vendor Exprience",
          placeholder: "Previous Vendor Exprience",
          onChange: "handleChange",
          name: "email",
        },
      ],
    },
  ],
};
let obj4 = {
  row: [
    {
      col: 3,
      align: "left",
      control: [
        {
          controlType: "input",
          type: "text",
          title: "Project Type  ",
          placeholder: "Web/App Development,Data Analytics,IT Consultation",
          onChange: "handleChange",
          name: "name",
          className: "input-field",
        },
        {
          controlType: "input",
          type: "text",
          title: "Service Required",
          placeholder: "Development, Support, Maintainence",
          onChange: "handleChange",
          name: "age",
          className: "input-field",
        },
      ],
    },
    {
      col: 1,
      align: "left",
      control: [
        {
          controlType: "textarea",
          type: "text",
          title: "Project Description",
          placeholder: "Brief Overview of their needs",
          onChange: "handleChange",
          name: "email",
          className: "input-field",
        },
      ],
    },
    {
      col: 3,
      align: "left",
      control: [
        {
          controlType: "input",
          type: "text",
          title: "Technology Preference",
          placeholder: "Technology Preference",
          onChange: "handleChange",
          name: "name",
          className: "input-field",
        },
        {
          controlType: "input",
          type: "text",
          title: "Estimated Budget",
          placeholder: "Estimated Budget",
          onChange: "handleChange",
          name: "age",
          className: "input-field",
        },
        {
          controlType: "button",
          type: "primary",
          title: "Submit",
          onClick: "handleSubmit",
        },
      ],
    },
  ],
};

function RegistrationForm() {
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit() {}
  let functions = {
    handleSubmit,
    handleChange,
  };

  return (
    <>
      <div className={style.forms}>
        <FormGenerator
          data={obj}
          title={"Basic Company Information"}
          functions={functions}
        />
        <FormGenerator
          data={obj2}
          title="Contact Detail"
          functions={functions}
        />
        <FormGenerator
          data={obj3}
          title={"Project Requirements"}
          functions={functions}
        />
        <FormGenerator
          data={obj4}
          title={"Aditional Details"}
          functions={functions}
        />
      </div>
    </>
  );
}
export default RegistrationForm;
