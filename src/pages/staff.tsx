import { NextPage } from "next";
import Layout from "~/components/Layout/Layout";
import Chairman from "~/components/staff/Chairman";
import Departments from "~/components/staff/Departments";

const Staff: NextPage = () => (
  <Layout PageTitle="Staff - shikosai32">
    <figure className="mb-10 flex justify-center">
      <img src="image/black/staff.png" alt="staff" width="200" />
    </figure>
    <div className="m-5 mb-10 space-y-14 md:m-0">
      <Chairman />
      <Departments />
    </div>
  </Layout>
);

export default Staff;
