import { Link } from "react-router-dom"
function Fullstack(){
    return(
        <>
           <div className="container-xxl">
        <div className="navbar">
          <h2 style={{ fontWeight: "bold", marginRight:"16%" }}>GUVI</h2>
         
            <Link to={"/"}><h3>Home </h3></Link>
            <Link to={"/artificial-intelligence"}><h3>Artificial Intelligence </h3></Link>
            <Link to={"/data-science"}><h3>Data Science </h3></Link>
         
        </div>
        <div className="main">
          <div className="row align-items-start">
            <div className="col">
              <h1 style={{ color: "white", fontWeight: "normal" }}>
                Full Stack Development
              </h1>
              <p>
                <h4 style={{ color: "lightgray", fontWeight: "lighter" }}>
                A career in full-stack development combines creativity with analysis. As a full-stack developer, you’ll have plenty of opportunities to learn and implement innovative principles in your work.
                The job outlook for full-stack developers is bright. According to LinkedIn's 2020 Emerging Jobs Report, rapid changes in technology have made full-stack developers valuable assets in companies. The profession has grown 35 percent a year since 2015 and appears to continue on that trend into the near future, LinkedIn reports [2].
                </h4>
              </p>
            </div>
            <div className="col">
              <img
                className="img-fluid"
                src="https://img.freepik.com/premium-photo/business-pro-amidst-tech-multiscreen-data-analysis-office-blue-white-theme_818261-47410.jpg?w=740"
              />
            </div>
          </div>
        </div>
        <div className="main">
          <div className="row align-items-start" style={{    position: "relative", bottom: "145px"}}>
          <div className="col" style={{marginBottom:"20px"}}>
              <img style={{height:"500px"}}
                src="https://img.freepik.com/free-vector/modern-web-design-concept-with-flat-design_23-2147858015.jpg?t=st=1715528844~exp=1715532444~hmac=2fb280caf18627ef5ba289b218c7b71ce453861bdf298520e4433db44ee37ffc&w=740"
              />
            </div>
            <div className="col" style={{ marginRight:"150px"}}>
              <h1 style={{ color: "white", fontWeight: "normal" }}>
                Concepts of web Development
              </h1>
              <p>
                <h4 style={{ color: "lightgray", fontWeight: "lighter" }}>
                Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.
                Full stack web developers have the ability to design complete web applications and websites. They work on the frontend, backend, database and debugging of web applications or websites.
                </h4>
              </p>
            </div>
           
          </div>
        </div>
      </div>
        </>
    )
}
export default Fullstack