import "./App.css";

function App() {
  return (
      <div className="web-view">
  
        <iframe
        title="inIT-user"
        className="first-view"
        src="http://localhost:3000/"
        />
  
       

        <iframe
        title="inIT-recruiter"
          className="second-view"
          src="https://init-first-build.netlify.app/"
        />
      </div>
  );
}

export default App;
