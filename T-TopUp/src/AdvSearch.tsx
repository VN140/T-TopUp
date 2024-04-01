import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import back from "./assets/Misc/back.png";
import "./AdvSearch.css";

function AdvSearch() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <body>
        <div className="search-container">
          <h1>Advanced Search</h1>
          <img src={back}></img>

          <div className="search-content">
            <div className="platform">
                <p>Platform</p>
                <input type="text"></input>
            </div>

            <div className="genre">
                <p>Genre</p>
                <input type="text"></input>
            </div>

            <div className="publish">
                <p>Publisher</p>
                <input type="text"></input>
            </div>

            <div className="promotion">
                <p>Promotion</p>
                <input type="checkbox"></input>
                <label>Promotion ONLY</label>
            </div>

            <div className="resultperpage">
                <p>Result per page</p>
                <input type="text"></input>
            </div>
            <br></br>
            <br></br>
            <div className="button-container">
                <button type="submit" className="searchbutton">SEARCH</button>
                <button className="clearbutton">CLEAR</button>
            </div>
          </div>

          
        </div>
      </body>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default AdvSearch;