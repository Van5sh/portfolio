const AboutPage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <h1 className="text-5xl font-semibold mb-10 items-start ml-10">
        About Me
      </h1>

      <div className="flex flex-row items-center justify-center">
        <p className="text-justify text-sm leading-relaxed max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="ml-20">
          <div className="h-[70vh] w-[42vh] bg-[#FC573B] rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
