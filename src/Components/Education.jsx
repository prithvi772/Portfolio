export default function Education() {
  return (
    <>
      <h5 className="text-start my-2">Education</h5>
      <div className="d-flex ">
      {/* first card starts  */}

      <div className="edubord skills text-start education p-2">
        <div className="tools my-2">
          
          <img className="tools" src="/images/edu1.png " alt="" />
        </div>
        <h4 className=" my-2 w-100">User Experience Design Masters's</h4>
        <p className=" my-2 w-75">
          Technische Hochschule Inglostat March 2020- Present
        </p>
      </div>
      {/* first card ends  */}
      {/* second card starts  */}
      <div className="edubord skills text-start education p-2 mx-4">
        <div className="tools my-2">
          
          <img className="tools" src="/images/edu2.jpg " alt="" />
        </div>
        <h4 className=" my-2  w-100">User Interface Design Bachlors</h4>
        <p className=" my-2 w-75">
          Technische Hochschule Inglostat January 2018- Present
        </p>
      </div>
      {/* second card ends  */}
      {/* Third card starts  */}
      <div className="edubord skills text-start education p-2">
        <div className="tools my-2">
          {" "}
          <img className="tools" src="/images/edu3.png " alt="" />
        </div>
        <h4 className=" my-2  w-100">User Design Masters's</h4>
        <p className=" my-2 w-75">
          Technische Hochschule Inglostat March 2020- Present
        </p>
      </div>
      {/* Third card ends  */}
      </div>
    </>
  );
}
