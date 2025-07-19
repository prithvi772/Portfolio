export default function Certification() {
  return (
    <div className="">
      <h5 className="text-start my-2">Certifications</h5>
      <div className="d-flex ">
      {/* first card starts  */}

      <div className="myborder skills text-center w-50 p-2">
        <div className="tools my-2  mx-auto">
          
          <img className="cer my-2  " src="/images/google.svg " alt="" />
        </div>
        <h4 className=" my-2 w-100 ">UI/UX Design Specilization</h4>
        <p className=" my-2 w-100">
           March 2018- Present
        </p>
      </div>
      {/* first card ends  */}
      {/* second card starts  */}
      <div className="myborder skills text-center w-50 p-2 mx-4">
        <div className="tools my-2 mx-auto">
          
          <img className="cer my-2 " src="/images/Micro.webp " alt="" />
        </div>
        <h4 className=" my-2  w-100">User Interface Design Specilization</h4>
        <p className=" my-2 w-100">
          Dec 2018- Present
        </p>
      </div>
      {/* second card ends  */}
     
      </div>
    </div>
  );
}
