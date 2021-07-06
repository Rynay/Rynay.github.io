const Greeting = () => {
  return (
    <article className="greeting">
      <h1 className="greeting__title">
        <span>
          Hey! My name is <span className="greeting__title--pink">Kseniia</span>{' '}
          <br />
          And I'm a{' '}
          <span className="greeting__title--pink">Frontend developer</span>
        </span>
      </h1>
      <video className="greeting__video" width="100%" muted loop autoPlay>
        <source src="/video/video.mp4" type="video/mp4" />
      </video>
    </article>
  );
};

export default Greeting;
