const Contact = ({dataUser}) => {
  return (
    <>
      {dataUser.map((el) => {
        return (
          <>
            <p>el.name</p>
            <p>el.number</p>
          </>
        );
      })}
    </>
  );
};

export default Contact;
