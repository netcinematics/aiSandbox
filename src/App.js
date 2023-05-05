import './App.css';
import MainView from './views/MainView';
import StoryGrid2 from './views/StoryGrid2';
import StoryGrid3 from './views/StoryGrid3';
import SongPhrases from './views/SongPhrases';
import D3ViewFrame1 from './views/D3ViewFrame1';
// import D3View1 from './views/D3View1';
// import TicTacToe from './views/TicTacToeView';
import AWordaGami1 from './views/aWordaGami1';
// import Zoom from 'react-reveal/Zoom';
import { useState } from 'react';

function App() {
  const [viewIDX, setViewIDX] = useState(''); 
  function CLICKview (e) { setViewIDX(e.target.innerText); }


  const dataX = [
    { label: 'Apples', value: 20 },
    { label: 'Oranges', value: 14 },
    { label: 'Bananas', value: 10 },
    { label: 'Grapes', value: 8 },
    { label: 'Pears', value: 6 }
  ];
  

  return (
    <div className="App" style={{display:'flex',flexDirection:'column',backgroundColor: 'black',
      minHeight: '80vh',maxWidth:'55em',margin:'0 auto',padding:'0.444em'}}>
      {/* <header className="App-header" style={{borderRadius:'13px'}}>
      <Zoom>{viewIDX}</Zoom>
      </header> */}
      <main style={{color:'skyblue',color:'skyblue', paddingTop:'1.5em',
        borderRadius:'13px',margin:'1em',height:'48em',
        display:'flex',flexDirection:'column'}}>

      {         
        (() => { //SIMPLE-DYNAMIC-VIEW-DISPLAY: (design~innovation) // Routing - nah...
          if (viewIDX === "aWORDaGAMi") {
            return <AWordaGami1/>;
          // } else if (viewIDX === "TicTacToe") {
          } else if (viewIDX === "D3View1") {
            return <D3ViewFrame1/>;
            // return <D3View1 data={dataX}/>;
            // return <TicTacToe/>;
          } else if (viewIDX === "StoryGrid") {
            return <StoryGrid3/>;
          } else if (viewIDX === "SongPhrases") {
            return <SongPhrases/>;
          } else {
            return <MainView/>;
          }
        })()
      }
      </main>
      <nav style={{marginTop:'1em'}}>
        <button style={{cursor:'pointer',borderRadius:'8px',margin:'0px 10px',boxShadow:'1px 1px 5px purple'}}
           onClick={CLICKview}>MAIN</button>
        <button style={{cursor:'pointer',borderRadius:'8px',margin:'0px 10px',boxShadow:'1px 1px 5px lime'}}
           onClick={CLICKview}>aWORDaGAMi</button>
        <button style={{cursor:'pointer',borderRadius:'8px',margin:'0px 10px',boxShadow:'1px 1px 5px yellow'}}
           onClick={CLICKview}>D3View1</button>
           {/* onClick={CLICKview}>TicTacToe</button> */}
        <button style={{cursor:'pointer',borderRadius:'8px',margin:'0px 10px',boxShadow:'1px 1px 5px orange'}}
           onClick={CLICKview}>StoryGrid</button>
        <button style={{cursor:'pointer',borderRadius:'8px',margin:'0px 10px',boxShadow:'1px 1px 5px orange'}}
           onClick={CLICKview}>SongPhrases</button>
      </nav>
      <section style={{color:'steelblue',fontSize:'0.666em',marginTop:'2em'}}>
        MIT - work in progress by spazefalcon  - &copy; 2023
      </section>      
    </div>
  );
}

export default App;
