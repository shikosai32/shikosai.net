import type { NextPage } from "next";
import Layout from "~/components/Layout/Layout";

const AccessPage: NextPage = () => (
  <Layout PageTitle="Access - shikosai32">
    <div className="relative mx-5 border border-black md:mx-20 md:mt-[3.125rem]">
      <div className="absolute top-[-1.25rem] left-0 right-0 m-auto w-[6.25rem] transform bg-white md:top-[-3.125rem] md:w-[12.5rem]">
        <img src="/image/black/access.png" alt="access" />
      </div>
      <div className="mx-5 mt-5 mb-5 flex justify-center md:mt-10">
        <iframe
          className="h-[18.75rem] w-[100%] md:h-[31.25rem]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.3983804889626!2d140.54902026556516!3d36.39955564784817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60222faa16bfeb1b%3A0x8ee69992b50722b8!2z6Iyo5Z-O5bel5qWt6auY562J5bCC6ZaA5a2m5qCh!5e0!3m2!1sja!2sjp!4v1664464362078!5m2!1sja!2sjp"
          title="access"
          loading="lazy"
        />
      </div>
    </div>
    <h2 className="semi-bold mt-10 text-center font-noto-serif-jp text-2xl md:text-3xl">- ADDRESS -</h2>
    <div className="mt-5 text-center font-noto-serif-jp md:mb-10 md:text-3xl">
      <p className="text-xl">〒312-8508</p>
      <p className="mb-2 text-2xl">
        866 Nakane Hitachinaka <br className="md:hidden" />
        Ibaraki, Japan
      </p>
      <p className="text-lg">TEL 029-272-5201</p>
    </div>
  </Layout>
);
export default AccessPage;
