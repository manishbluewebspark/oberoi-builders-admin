import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UsersTable from "@/components/User/usertable";
const Page = () => {
  return (
    <div>
      <DefaultLayout>
        <UsersTable></UsersTable>
      </DefaultLayout>
    </div>
  );
};

export default Page;
