import { NextPage } from "next";
import Layout from "~/components/Layout/Layout";
import Chairman from "~/components/staff/Chairman";
import Departments from "~/components/staff/Departments";

const Staff: NextPage = () => (
  <Layout PageTitle="Staff - shikosai32">
    <figure className="my-10 flex justify-center">
      <img src="image/black/staff.png" alt="staff" width="200" />
    </figure>
    <div className="mb-10 space-y-14">
      <Chairman />
      <Departments />
    </div>
  </Layout>
);

export default Staff;
