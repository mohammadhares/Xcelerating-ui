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
        className="w-full ml-0"
        style={{ maxWidth: width, marginBottom: mb }}>
        <h1 className="mb-2 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-3xl">
          {title}
        </h1>
      </div>
      <p  
        style={{ width: '820px', marginLeft: '0px', marginTop: '-80px'}}
        className="text-base !leading-relaxed text-body-color  mb-20 mt-0">
          {paragraph}
        </p>
    </>
  );
};

export default SectionTitle;
