import React from "react";
import Button from "./button"
// import Center from "../center/center";

export default{
    title: "Form/Button",
    component: Button,
    args: {
        children: "Button"
    },
    // decorators: [story => <Center>{story()}</Center>]
}

export const SmallBlack = () => <Button size="small" color="black" children="small" />
export const SmallSkyblue = () => <Button size="small" color="skyblue" children="small" />
export const SmallRed = () => <Button size="small" color="red" children="small" />
export const MediumBlack = () => <Button size="medium" color="black" children="medium" />
export const MediumSkyblue = () => <Button size="medium" color="skyblue" children="medium" />
export const MediumRed = () => <Button size="medium" color="red" children="medium" />
export const LargeBlack = () => <Button size="large" color="black" children="large" />
export const LargeSkyblue = () => <Button size="large" color="skyblue" children="large" />
export const LargeRed = () => <Button size="large" color="red" children="large" />

const Template = args => <Button {...args} />

export const SmallBlackA = Template.bind({})
SmallBlackA.args = {
    size: "small",
    color: "black",
    // children: "smallA"
}

export const LargeRedA = Template.bind({})
LargeRedA.args = {
    size: "large",
    color: "red",
    // children: "LargeA"
}

export const LargeSkyblueA = Template.bind({})
LargeSkyblueA.args = {
    ...LargeRedA.args,
    color: "skyblue"
}