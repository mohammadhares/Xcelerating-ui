import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full pb-10">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
          {title}
        </h1>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
        <p className="font-semibold text-gray-400 mt-4">{feature.featureTitle}</p>
        <ul className="text-sm list-disc text-slate-500 mt-2 w-full pl-14 pr-32">
          {feature?.features?.map((feature, index: number) => (
            <li className="mt-2 text-justify" key={index}>{feature}</li>
          ))}
        </ul>
        <p className="font-semibold text-gray-400 mt-4">{feature.lastFeature}</p>
      </div>
    </div>
  );
};

export default SingleFeature;
