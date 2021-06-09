import React from "react";
import CloseHeader from "../";

export default { title: "CloseHeader" };

export const defaultState = () => <CloseHeader onClose={() => {}} />;

export const withTitle = () => <CloseHeader title="Title" onClose={() => {}} />;
