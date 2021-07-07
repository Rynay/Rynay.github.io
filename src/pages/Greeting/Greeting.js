const Greeting = () => {
  return (
    <article className="greeting">
      <h1 className="greeting__title">
        <span>
          Hey! My name is <span className="greeting__title--pink">Kseniia</span>{' '}
          <br />
          And I'm a<br />
          <span className="greeting__title--pink">Frontend Developer</span>
        </span>
      </h1>
    </article>
  );
};

export default Greeting;
