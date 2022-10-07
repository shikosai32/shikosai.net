import { NextPage } from "next";
import Layout from "~/components/Layout/Layout";

const Staff: NextPage = () => (
  <Layout PageTitle="Staff - shikosai32">
    <figure className="my-10 flex justify-center">
      <img src="image/black/staff.png" alt="staff" width="200" />
    </figure>
    <p className="text-center text-3xl font-light italic">Coming Soon</p>
  </Layout>
);

export default Staff;