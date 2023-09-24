"use client";

import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
type Props = {};

const DashboardPage = (props: Props) => {
  const user = useUser();
  console.log(user);
  return (
    <>
      <UserButton afterSignOutUrl='/' />
      <div>DashboardPage</div>
    </>
  );
};

export default DashboardPage;
