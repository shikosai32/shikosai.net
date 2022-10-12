import type { NextPage } from "next";
import Link from "next/link";
import CardModal from "~/components/UI/CardModal";
import Layout from "~/components/Layout/Layout";
import circleData from "~/static/circleData";

const Circle: NextPage = () => (
  <Layout PageTitle="Circle - shikosai32">
    <div className="font-roboto_serif relative flex h-full w-full flex-col items-center justify-around">
      <div className="w-[calc(100%_-_5px)] md:w-full">
        <div className="text-center">
          <p className="text-center">JUMP TO</p>
          <ul className="flex flex-wrap">
            {circleData.classify.map((v) => (
              <li key={v} className="w-1/2 md:w-1/6">
                <Link href={`#${v}`}>{v}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full content-center" id="1学年">
          <div className="w-full rounded border-2 border-black lg:w-full">
            <p className="text-center text-2xl">1学年</p>
          </div>
          <div className="flex w-full flex-wrap pb-[5%]">
            {circleData.content.firstGrade.map((value) =>
              value.map((v) => (
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
              )),
            )}
          </div>
        </div>
        <div className="w-full content-center" id="2学年">
          <div className="w-full rounded border-2 border-black lg:w-full">
            <p className="text-center text-2xl">2学年</p>
          </div>
          <div className="flex w-full flex-wrap pb-[5%]">
            {circleData.content.secondGrade.map((value) =>
              value.map((v) => (
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
              )),
            )}
          </div>
        </div>
        <div className="w-full content-center" id="3学年">
          <div className="w-full rounded border-2 border-black lg:w-full">
            <p className="text-center text-2xl">3学年</p>
          </div>
          <div className="flex w-full flex-wrap pb-[5%]">
            {circleData.content.thirdGrade.map((value) =>
              value.map((v) => (
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
              )),
            )}
          </div>
        </div>
        <div className="w-full content-center" id="4学年">
          <div className="w-full rounded border-2 border-black lg:w-full">
            <p className="text-center text-2xl">4学年</p>
          </div>
          <div className="flex w-full flex-wrap pb-[5%]">
            {circleData.content.fourthGrade.map((value) =>
              value.map((v) => (
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
              )),
            )}
          </div>
        </div>
        <div className="w-full content-center" id="部活動">
          <div className="w-full rounded border-2 border-black lg:w-full">
            <p className="text-center text-2xl">部活動</p>
          </div>
          <div className="flex w-full flex-wrap pb-[5%]">
            {circleData.content.act.map((value) =>
              value.map((v) => (
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
              )),
            )}
          </div>
        </div>
        <div className="w-full content-center" id="同好会">
          <div className="w-full rounded border-2 border-black lg:w-full">
            <p className="text-center text-2xl">同好会</p>
          </div>
          <div className="flex w-full flex-wrap pb-[5%]">
            {circleData.content.club.map((value) =>
              value.map((v) => (
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
              )),
            )}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Circle;
