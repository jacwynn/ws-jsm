import React from "react";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      I will lift you up!
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
