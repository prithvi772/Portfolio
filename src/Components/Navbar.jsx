export default function Navbar(){
    return (
        <div className="d-flex justify-content-between"  > 
        <h3 className="name">Disha Patani</h3>
        <div className=" Nav d-flex justify-content-end ">
        
        <button className="btn fs-6 fw-bold">Home</button>
        <button className="btn fs-6 fw-bold">About</button>
        <button className="btn fs-6 btn-primary border-2 ">Contact</button>
        </div>
        </div>

    )
}