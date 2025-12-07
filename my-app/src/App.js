import './App.css';

function App() {
  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
    
    <div>
      <header className="App-header">
        <div className="top">
          <h1 className="title">
            Kevin Hernandez-Ramos
          </h1>
        </div>
        <div className="intro">
        </div>
        <div>
          <h2 className="section">Experience</h2>
          <p className="text">Work in Progress!</p>
        </div>
        <div>
          <h2 className="section">Projects</h2>
          <p className="text">Work in Progress!</p>
        </div>
        <div>
          <h2 className="section">Contact</h2>
          <p className="text">Work in Progress!</p>
        </div>
        <div>
          <h2 className="section">About</h2>
          <p className="text">
            I'm a Computer Engineering major at the University of Washington. 
            I love focusing on building scalable systems with thoughtful design. <br></br><br></br>
            Outside of school, I enjoy playing board games with my friends and family, spending time playing with my cats, and love trying new foods.
          </p>
        </div>
      </header>
    </div>
    </>
  );
}

function openMenu() {
  return true
}

export default App;
