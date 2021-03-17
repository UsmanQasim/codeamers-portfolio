import React, { Component } from "react";
import Header from "../components/Header";
import { Route } from "react-router-dom";

const SomeFrickinHandler = ({ path, component, exact }) => {
  return (
    <>
      <Header />
      <Route path={path} component={component} exact={exact} />
    </>
  );
};

export default SomeFrickinHandler;
