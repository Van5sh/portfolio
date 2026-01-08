const AboutPage = () => {
  return (
    <div className="min-h-screen px-20 py-10 flex flex-col items-start justify-center">
      <h1 className="text-3xl font-bold mb-10">About Me</h1>

      <div className="flex flex-row items-center">
        
        <p className="text-justify text-sm leading-relaxed max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
          type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className="ml-16">
          <div className="w-56 h-56 bg-gray-300 rounded-xl" />
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
