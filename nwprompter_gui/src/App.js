import './App.css';
import InputBox from './Components/InputBox';
import PdfViewer from './Components/PdfViewer';

const App = () => {
  return (
    <>
      <head>
        <title>Premove.ai</title>
      </head>
      <nav className="bg-light border-dark navbar navbar-expand-sm navbar-light">
        <div className='container-fluid'>
          <a class="navbar-brand" href="/"><span style={{color: "black"}}>Premove</span><span style={{color: "purple"}}>.ai</span></a>
        </div>
      </nav>
      <main className="container-fluid py-5">
        <div className='app'>
          <InputBox />
          <br />
          <PdfViewer />
        </div>
      </main>
    </>
  );
}

export default App;
