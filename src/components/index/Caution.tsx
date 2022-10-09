import Link from "next/link";
import { FC } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Card from "../Card";

const Caution: FC = () => (
  <div className="relative font-noto-serif-jp">
    <h2 className="text-center text-6xl font-semibold uppercase">Caution</h2>
    <div className="absolute top-20 right-1/4 h-[2px] w-1/2 bg-black before:absolute before:top-[-3px] before:-left-1 before:h-2 before:w-2 before:rounded-full before:bg-black before:content-[''] after:absolute after:top-[-3px] after:-right-1 after:h-2 after:w-2 after:rounded-full after:bg-black after:content-['']" />
    <div className="mt-12 flex justify-center">
      <Card className="w-5/6 py-12 px-8 text-xl">
        <p>
          第32回茨香祭にご来場いただく際に、いくつかの注意事項がございます。
          <br />
          ご理解とご協力のほどお願い申し上げます。
        </p>
        <div className="mt-12 space-y-4">
          <div className="flex items-center space-x-4">
            <figure>
              <BsFillCheckCircleFill size={25} className="text-success" />
            </figure>
            <p>会場ではマスクの着用をお願いします。</p>
          </div>
          <div className="flex items-center space-x-4">
            <figure>
              <BsFillCheckCircleFill size={25} className="text-success" />
            </figure>
            <p>
              第32回茨香祭は2日間に渡って開催されます。ただし、一般の方(在校生の保護者と県内小中学生及びその保護者)のご入場につきましては、1日目のみとさせて頂いております。
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <figure>
              <BsFillCheckCircleFill size={25} className="text-success" />
            </figure>
            <p>
              当日ご入場なさる際には、予め入場予約をして頂く必要があります。お手数をおかけしますが、
              <Link href="https://forms.gle/7SfzGJCLVANwFXY46">
                <a target="_blank" className="text-secondary underline visited:text-primary">
                  こちらのリンク
                </a>
              </Link>
              よりフォームにご回答願います。 また、お申込多数となった場合、申込受付を終了する場合がございます。
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <figure>
              <BsFillCheckCircleFill size={25} className="text-success" />
            </figure>
            <p>
              駐車場の台数に限りがございますので、公共交通機関をご利用の上お越しください。その際、近隣の店舗駐車場への駐車、路上駐車は大変迷惑となりますので、絶対におやめください。
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <figure>
              <BsFillCheckCircleFill size={25} className="text-success" />
            </figure>
            <p>
              校内で昼食の販売等は行っておりません。校内で昼食を済ませる場合、近隣のコンビニで購入して頂くか、お弁当を持参して頂く必要があります。飲食スペースは、大教室または4C,
              5Cをご利用ください。
            </p>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

export default Caution;
