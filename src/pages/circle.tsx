import type { NextPage } from "next";
import { useState } from "react";
import CardModal from "~/components/circle/CircleItem";
import Layout from "~/components/Layout/Layout";
import circleData from "~/static/circleData";

const Circle: NextPage = () => {
  const [circleIndex, setCircleIndex] = useState<number>(0);

  return (
    <Layout PageTitle="Circle - shikosai32">
      <div className="font-roboto_serif relative flex h-full w-full flex-col items-center justify-around pt-10">
        <img src="/image/black/circle.png" className="mx-auto mb-4 h-10 md:h-12 lg:h-20" alt="Circle" />
        <div className="w-[calc(100%_-_5px)] md:w-full">
          <div className="text-center">
            <p className="font-montserrat">Select ▼</p>
            <select
              className="rounded-2xl bg-black p-2 pl-3 font-noto-serif-jp text-white md:text-lg"
              onChange={(e) => setCircleIndex(parseInt(e.target.value, 10))}
              defaultValue="0"
            >
              {circleData.classify.map((v, i) => (
                <option key={v} value={i.toString()} label={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          <h2 className="my-6 border-y-2 border-black	py-2 text-center font-noto-serif-jp text-3xl font-semibold">
            {circleData.classify[circleIndex]}
          </h2>
          <div className="flex w-full flex-wrap pb-[5%]">
            {circleData.contents[circleIndex].map((v) => (
              <CardModal
                key={v.organization}
                organization={v.organization}
                circleTitle={v.circleTitle}
                placement={v.placement}
                circleImagePth={v.circleImagePth}
                description={v.description}
                aboutCircle={v.aboutCircle}
                mapImagePth={v.mapImagePth}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Circle;
