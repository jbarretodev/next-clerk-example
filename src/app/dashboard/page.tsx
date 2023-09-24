"use client";

import { UserButton, useUser } from "@clerk/nextjs";

const DashboardPage = () => {
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
