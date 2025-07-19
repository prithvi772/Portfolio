export default function Header() {
  return (
    <div className="row  my-5  d-flex justify-content-between  ">

      <div className=" col-6 Header  p-3">
        <h1 className=" d-flex justify-content-start">Hi there!👋🏻 </h1>
        <h1 className=" d-flex justify-content-start ">I'm Disha patani</h1>
        <p className="text-start my-3">
          I'm an Industrial Designer turned UX Designer based in Phoenix, AZ. My
          passion is in creating human-centered designs that can improve our daily lives while creating a cross-cultural impact. 
          </p>
          <p className="text-start">
          My past experience
          lends me the ability to communicate effectively across multiple
          divisions and collaborate efficiently in an agile working environment.
          That's why I would love to work with the next product team to design
          solutions that we are all proud of.
        </p>
      </div>
      <div className="col-4  mx-4  d-flex justify-content-end dishaImage "></div>
    </div>
  );
}
