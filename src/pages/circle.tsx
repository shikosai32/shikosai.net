import { NextPage } from "next";
import Layout from "~/components/Layout/Layout";

const Circle: NextPage = () => (
  <Layout PageTitle="Circle - shikosai32">
    <figure className="my-10 flex justify-center">
      <img src="image/black/circle.png" alt="circle" width="200" />
    </figure>
    <p className="text-center text-3xl font-light italic">Coming Soon</p>
  </Layout>
);

export default Circle;
