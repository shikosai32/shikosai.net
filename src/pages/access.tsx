import type { NextPage } from "next";
import Layout from "~/components/Layout";

const AccessPage: NextPage = () => (
  <Layout PageTitle="Access">
    <div className="relative mx-5 mt-[150px] border border-black md:mx-20 md:mt-[100px] ">
      <div className="absolute  top-[-20px] left-0 right-0 m-auto w-[100px] transform bg-white md:top-[-50px] md:w-[200px]">
        <img src="/image/black/access.png" alt="access" />
      </div>
      <div className="mx-5 mt-5 mb-5 flex justify-center md:mt-10">
        <iframe
          className="h-[300px] w-[100%] md:h-[500px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.3983804889626!2d140.54902026556516!3d36.39955564784817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60222faa16bfeb1b%3A0x8ee69992b50722b8!2z6Iyo5Z-O5bel5qWt6auY562J5bCC6ZaA5a2m5qCh!5e0!3m2!1sja!2sjp!4v1664464362078!5m2!1sja!2sjp"
          title="access"
          loading="lazy"
        />
      </div>
    </div>
    <div className="mt-10 text-center font-montserrat">
      <div className="text-4xl md:text-6xl">- ADDRESS -</div>
      <div className="mt-5 text-2xl md:text-3xl">〒312-8508</div>
      <div className="text-2xl md:text-3xl">866 Nakane Hitachinaka Ibaraki, Japan</div>
      <div className="text-2xl md:text-3xl">TEL 029-272-5201</div>
      <div className="mt-5 text-4xl md:text-6xl">- BUS -</div>
    </div>
  </Layout>
);
export default AccessPage;
