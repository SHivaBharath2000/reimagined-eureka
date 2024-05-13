import { Link } from "react-router-dom"
function Ai(){
    return(
        <>
           <div className="container-xxl">
        <div className="navbar">
          <h2 style={{ fontWeight: "bold", marginRight:"6%" }}>GUVI</h2>
         
          <Link to={"/"}><h3>Home </h3></Link>
           <Link to={"/full-stack-development"}><h3>Full stack development </h3></Link>
            <Link to={"/data-science"}><h3>Data Science </h3></Link>
         
        </div>
        <div className="main">
          <div className="row align-items-start">
            <div className="col">
              <h1 style={{ color: "white", fontWeight: "normal" }}>
                Artificial Intelligence
              </h1>
              <p>
                <h4 style={{ color: "lightgray", fontWeight: "lighter" }}>
                Artificial intelligence (AI), in its broadest sense, is intelligence exhibited by machines, particularly computer systems. It is a field of research in computer science that develops and studies methods and software that enable machines to perceive their environment and uses learning and intelligence to take actions that maximize their chances of achieving defined goals.[1] Such machines may be called AIs.

AI technology is widely used throughout industry, government, and science. Some high-profile applications include advanced web search engines (e.g., Google Search); recommendation systems (used by YouTube, Amazon, and Netflix); interacting via human speech (e.g., Google Assistant, Siri, and Alexa); autonomous vehicles (e.g., Waymo); generative and creative tools (e.g., ChatGPT and AI art); and superhuman play and analysis in strategy games (e.g., chess and Go).[2] However, many AI applications are not perceived as AI: "A lot of cutting edge AI has filtered into general applications, often without being called AI because once something becomes useful enough and common enough it's not labeled AI anymore."[3][4]
                </h4>
              </p>
            </div>
            <div className="col">
              <img
                className="img-fluid"
                src="https://img.freepik.com/premium-vector/illustrations-concept-artificial-intelligence-ai_71983-1745.jpg?w=740"
              />
            </div>
          </div>
        </div>
        <div className="main">
          <div className="row align-items-start" style={{    position: "relative", bottom: "145px"}}>
          <div className="col" style={{marginBottom:"20px"}}>
              <img style={{height:"500px"}}
                src="https://img.freepik.com/free-vector/artificial-intelligence-isometric-composition_1284-24766.jpg?t=st=1715579945~exp=1715583545~hmac=cec403d1b5e1513a91069f51d66e2bf4e80cdd39e29b9a92f1b7b14d9d5239f1&w=740"
              />
            </div>
            <div className="col" style={{ marginRight:"150px"}}>
              <h1 style={{ color: "white", fontWeight: "normal" }}>
                Concepts of Artificial intelligence
              </h1>
              <p>
                <h4 style={{ color: "lightgray", fontWeight: "lighter" }}>
                Knowledge representation and knowledge engineering[20] allow AI programs to answer questions intelligently and make deductions about real-world facts. Formal knowledge representations are used in content-based indexing and retrieval,[21] scene interpretation,[22] clinical decision support,[23] knowledge discovery (mining "interesting" and actionable inferences from large databases),[24] and other areas.[25]
                A knowledge base is a body of knowledge represented in a form that can be used by a program. An ontology is the set of objects, relations, concepts, and properties used by a particular domain of knowledge.[26] Knowledge bases need to represent things such as objects, properties, categories, and relations between objects;[27] situations, events, states, and time;[28] causes and effects;[29] knowledge about knowledge (what we know about what other people know);[30] default reasoning              
                </h4>
              </p>
            </div>
           
          </div>
        </div>
      </div>
        </>
    
    )
}
export default Ai