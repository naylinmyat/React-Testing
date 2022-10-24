import React from "react";
import Input from "./input"

export default {
    title: "Form/Input",
    component: Input
}

export const Small = () => <Input size="small" placeHolder="Small" />
export const Medium = () => <Input size="medium" placeHolder="Medium" />
export const Large = () => <Input size="large" placeHolder="Large" />

Small.storyName = "Small Input";