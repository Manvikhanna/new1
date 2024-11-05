import React from "react";
import { useState } from "react";
import Form from "../form";
import Input from "../input";
import Row from "../row";
import style from "./style.module.css";
import TextArea from "../TextArea";
import Button from "../button";

const FormGenerator = ({ data, title, functions }) => {
  return (
    <div className={style.formsContainer}>
      <Form title={title}>
        {data.row.map((row, rowKey) => {
          return (
            <Row key={rowKey} {...row}>
              {row.control.map((control, controlIndex) => {
                if (control.controlType === "input") {
                  return (
                    <Input
                      key={rowKey + controlIndex}
                      {...control}
                      onChange={functions[control.onChange]}
                      className={control.className}
                    />
                  );
                }

                if (control.controlType == "textarea") {
                  return (
                    <TextArea
                      key={rowKey + controlIndex}
                      {...control}
                      onChange={functions[control.onChange]}
                    />
                  );
                }
                if (control.controlType == "button") {
                  return (
                    <Button
                      key={rowKey + controlIndex}
                      {...control}
                      onClick={functions[control.onClick]}
                    />
                  );
                }
              })}
            </Row>
          );
        })}
      </Form>
    </div>
  );
};

export default FormGenerator;
