const AboutPage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <h1 className="text-5xl font-semibold mb-10 items-start ml-10">
        About Me
      </h1>

      <div className="flex flex-row items-center justify-center">
        <p className="text-justify leading-relaxed max-w-xl">
          I am a Full Stack Developer with a passion for creating engaging and
          interactive user interfaces. I have experience in both frontend and
          backend development, and I am always looking for new ways to improve
          my skills. I am also a team player and enjoy working with others to
          create innovative solutions. I am a quick learner and can adapt to new
          technologies and environments. I am also a problem solver and enjoy
          finding creative solutions to complex problems. Currently I am a
          strong
        </p>
        <div className="ml-20">
          <div className="h-[70vh] w-[42vh] bg-[#FC573B] rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
