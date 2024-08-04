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
        className="w-full "
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h1 className="mb-4 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-3xl">
          {title}
        </h1>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
