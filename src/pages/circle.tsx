import type { NextPage } from "next";
import Link from "next/link";
import CardModal from "~/components/UI/CardModal";
import Layout from "~/components/Layout/Layout";
import circleData from "~/static/circleData";

const Circle: NextPage = () => (
  <Layout PageTitle="Circle - shikosai32">
    <div className="font-roboto_serif relative flex h-full w-full flex-col items-center justify-around pt-10">
      <img src="/image/black/circle.png" className="mx-auto mb-4 h-10 md:h-12 lg:h-20" alt="Circle" />
      <div className="w-[calc(100%_-_5px)] md:w-full">
        <div className="my-6 text-center">
          <h2>JUMP TO</h2>
          <div className="flex flex-wrap">
            {circleData.classify.map((v, i) => (
              <button type="button" key={v} className="w-1/2 md:w-1/6">
                <Link href={`#${circleData.ids[i]}`}>{v}</Link>
              </button>
            ))}
          </div>
        </div>

        {circleData.classify.map((value, i) => (
          <div key={value} className="-mt-24 w-full content-center pt-24" id={circleData.ids[i]}>
            <h3 className="rounded border-2 border-black text-center text-2xl">{value}</h3>
            <div className="flex w-full flex-wrap pb-[5%]">
              {circleData.contents[i].map((v) => (
                <CardModal
                  key={v.organization}
                  org={v.organization}
                  title={v.circleTitle}
                  placement={v.placement}
                  imgPath={v.circleImagePth}
                  description={v.description}
                  about={v.aboutCircle}
                  map={v.mapImagePth}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Circle;
