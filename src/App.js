import './App.css';

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container">
          <a class="navbar-brand" href="#">SaRa</a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>    
            </ul>
          </div> 

        </div>  
      </nav>  
    </div>
  );
}

export default App;
