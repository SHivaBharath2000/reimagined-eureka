import { Link } from "react-router-dom"
function DataScience(){
    return(
        <>
           <div className="container-xxl">
        <div className="navbar">
          <h2 style={{ fontWeight: "bold", marginRight:"6%" }}>GUVI</h2>
         
            <Link to={"/"}><h3>Home </h3></Link>
            <Link to={"/full-stack-development"}><h3>Full stack development </h3></Link>
            <Link to={"/artificial-intelligence"}><h3>Artificial Intelligence </h3></Link>
         
        </div>
        <div className="main">
          <div className="row align-items-start">
            <div className="col">
              <h1 style={{ color: "white", fontWeight: "normal" }}>
                Data Science
              </h1>
              <p>
                <h4 style={{ color: "lightgray", fontWeight: "lighter" }}>
                Data science is the study of data to extract meaningful insights for business. It is a multidisciplinary approach that combines principles and practices from the fields of mathematics, statistics, artificial intelligence, and computer engineering to analyze large amounts of data.
                The data science lifecycle refers to the various stages a data science project generally undergoes, from initial conception and data collection to communicating results and insights.

Despite every data science project being unique—depending on the problem, the industry it's applied in, and the data involved—most projects follow a similar lifecycle.

This lifecycle provides a structured approach for handling complex data, drawing accurate conclusions, and making data-driven decisions.
                </h4>
              </p>
            </div>
            <div className="col">
              <img
                className="img-fluid" style={{width:"900px"}}
                src="https://img.freepik.com/premium-photo/man-sits-bench-with-laptop-number-13-his-lap_967785-62816.jpg?w=740"
              />
            </div>
          </div>
        </div>
        <div className="main">
          <div className="row align-items-start" style={{    position: "relative", bottom: "145px"}}>
          <div className="col" style={{marginBottom:"20px"}}>
              <img style={{height:"500px"}}
                src="https://img.freepik.com/premium-vector/big-data-data-analytics-process-analyzing-large-complex-data-sources-identify-trends-customer-behavior-patterns-market-preferences-make-more-effective-business-decisions_273625-4379.jpg?w=740"
              />
            </div>
            <div className="col" style={{ marginRight:"150px"}}>
              <h1 style={{ color: "white", fontWeight: "normal" }}>
                Concepts of Data Science
              </h1>
              <p>
                <h4 style={{ color: "lightgray", fontWeight: "lighter" }}>
                Data science has emerged as a revolutionary field that is crucial in generating insights from data and transforming businesses. It's not an overstatement to say that data science is the backbone of modern industries. But why has it gained so much significance?

Data volume. Firstly, the rise of digital technologies has led to an explosion of data. Every online transaction, social media interaction, and digital process generates data. However, this data is valuable only if we can extract meaningful insights from it. And that's precisely where data science comes in.
Value-creation. Secondly, data science is not just about analyzing data; it's about interpreting and using this data to make informed business decisions, predict future trends, understand customer behavior, and drive operational efficiency. This ability to drive decision-making based on data is what makes data science so essential to organizations.
Career options. Lastly, the field of data science offers lucrative career opportunities. With the increasing demand for professionals who can work with data, jobs in data science are among the highest paying in the industry. As per Glassdoor, the average salary for a data scientist in the United States is $137,984, making it a rewarding career choice.
                </h4>
              </p>
            </div>
           
          </div>
        </div>
      </div>
        </>
    )
}
export default DataScience