import './App.css';
import InputBox from './Components/InputBox';
import PdfViewer from './Components/PdfViewer';

const App = () => {
  return (
    <>
      <div className='app'>
        <InputBox />
        <PdfViewer />
      </div>
    </>
  );
}

export default App;
