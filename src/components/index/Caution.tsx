import { FC } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Card from "../Card";

const Caution: FC = () => (
  <div className="relative font-noto-serif-jp">
    <h2 className="text-center font-montserrat text-3xl font-semibold uppercase md:text-6xl">Cautions</h2>
    <div className="absolute top-12 right-0 left-0 mx-auto h-[2px] w-4/5 bg-black before:absolute before:top-[-3px] before:-left-1 before:h-2 before:w-2 before:rounded-full before:bg-black before:content-[''] after:absolute after:top-[-3px] after:-right-1 after:h-2 after:w-2 after:rounded-full after:bg-black after:content-[''] md:top-20" />
    <div className="mt-4 flex justify-center md:mt-12">
      <Card className="w-5/6 p-4 md:py-12 md:px-8 md:text-xl">
        <p>
          第32回茨香祭にご来場いただく際に、いくつかの注意事項がございます。
          <br />
          ご理解とご協力のほどお願い申し上げます。
        </p>
        <div className="mt-12 space-y-4">
          <div className="flex items-center md:space-x-4">
            <figure>
              <BsFillCheckCircleFill size={25} className="hidden text-success md:block" />
            </figure>
            <li className="list-disc md:list-none">会場ではマスクの着用をお願いします。</li>
          </div>
          <div className="flex items-center md:space-x-4">
            <figure>
              <BsFillCheckCircleFill size={25} className="hidden text-success md:block" />
            </figure>
            <li className="list-disc md:list-none">
              第32回茨香祭は2日間に渡って開催されます。ただし、一般の方(在校生の保護者と県内小中学生及びその保護者)のご入場につきましては、1日目のみとさせて頂いております。
            </li>
          </div>
          <div className="flex items-center md:space-x-4">
            <figure>
              <BsFillCheckCircleFill size={25} className="hidden text-success md:block" />
            </figure>
            <li className="list-disc line-through md:list-none">
              当日ご入場する際には、予め入場予約をして頂く必要があります。また、お申込多数となった場合は申込受付を終了する場合がございます。
            </li>
          </div>
          <div className="flex items-center md:space-x-4">
            <figure>
              <BsFillCheckCircleFill size={25} className="hidden text-success md:block" />
            </figure>
            <li className="list-disc md:list-none">
              当日ご入場する際に必要な入場予約は、お申込多数により終了しました。ありがとうございました。
            </li>
          </div>
          <div className="flex items-center md:space-x-4">
            <figure>
              <BsFillCheckCircleFill size={25} className="hidden text-success md:block" />
            </figure>
            <li className="list-disc md:list-none">
              駐車場の台数に限りがございますので、公共交通機関をご利用の上お越しください。その際、近隣の店舗駐車場への駐車、路上駐車は大変迷惑となりますので、絶対におやめください。
            </li>
          </div>
          <div className="flex items-center md:space-x-4">
            <figure>
              <BsFillCheckCircleFill size={25} className="hidden text-success md:block" />
            </figure>
            <li className="list-disc md:list-none">
              校内で昼食の販売等は行っておりません。校内で昼食を済ませる場合、近隣のコンビニで購入して頂くか、お弁当を持参して頂く必要があります。飲食スペースは、大教室または4C,
              5Cをご利用ください。
            </li>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

export default Caution;
