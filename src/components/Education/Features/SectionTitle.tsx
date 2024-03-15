const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}>
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
      </div>
      <p  
        style={{ width: '820px', margin: '-80px auto 50px', marginTop: '-80px'}}
        className="text-base !leading-relaxed text-body-color  mb-20 mt-0">
          {paragraph}
        </p>
    </>
  );
};

export default SectionTitle;
