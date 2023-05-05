import D3View1 from './D3View1';
import D3View2 from './D3View2';
import Zoom from 'react-reveal/Zoom';
import { useState } from 'react';

export default function D3ViewFrame1 ({langData}) {
    const [viewIDX, setViewIDX] = useState('D3View1');
    function CLICKchart (e) { setViewIDX(e.target.innerText); }

    const dataX = [
        { label: 'Apples', value: 20 },
        { label: 'Oranges', value: 14 },
        { label: 'Bananas', value: 10 },
        { label: 'Grapes', value: 8 },
        { label: 'Pears', value: 6 }
      ];
      

    return (
        <>
            <h1 style={{display:'flex',justifyContent:'center'}}>
            <Zoom>{viewIDX}</Zoom></h1>
            <gameframe style={{display:'flex',alignItems:'flex-start',
                borderTop:'2px solid purple',borderRadius:'13px',margin:'1em 3% 0px',padding:'2%'}}>
                <aside style={{width:'25%',paddingTop:'1em'}}>
                    <h2 style={{marginRight:'1em'}}>
                        choices:</h2>
                <section style={{border:'1px solid skyblue',borderRadius:'8px',marginRight:'2%',
                        padding:'0.8em',overflowX:'hidden',overflowY:'auto',height:'355px'}}>
                   asdf
                </section>
                </aside>
                <aside style={{height:'370px',width:'75%',paddingTop:'1em'}}>
                    <h2>common phrase:</h2>
                    <section style={{border:'1px solid steelblue',borderRadius:'8px',display:'flex',flexDirection:'column',height:'100%',padding:'0.444em'}}>
                        <gameboard style={{borderBottom:'1px solid darkslategray',borderRadius:'8px',
                            display:'flex',flexDirection:'row',alignContent:'center',minHeight:'300px',
                            justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
                          

    {         
        (() => { //SIMPLE-DYNAMIC-VIEW-DISPLAY: (design~innovation) // Routing - nah...
          if (viewIDX === "D3View1") {
            return <D3View1 data={dataX}/>;
          } else if (viewIDX === "D3View2") {
            return <D3View2 data={dataX}/>;
          }
        })()
    }

                        </gameboard>
                        <article style={{padding:'0.666em',color:'darkslategray'}}>
                            <aside style={{display:'flex',justifyContent:'space-around',color:'steelblue'
                                ,fontFamily:'sans-serif'}}>
                                <div style={{ color:'#197c19'}}>right: </div>
                                <div style={{ color:'#a62626'}}>wrong: </div>
                                <div style={{ color:'steelblue'}}>score: </div>
                            </aside>
                         </article>
                    </section>
                </aside>
            </gameframe>
            <footer style={{color:'darkcyan',fontSize:'small',paddingBottom:'1em',fontFamily:'sans-serif'}}>
                <button style={{cursor:'pointer',borderRadius:'8px',margin:'0px 10px',boxShadow:'1px 1px 5px orange'}}
                onClick={CLICKchart}>D3View1</button>
                <button style={{cursor:'pointer',borderRadius:'8px',margin:'0px 10px',boxShadow:'1px 1px 5px orange'}}
                onClick={CLICKchart}>D3View2</button>
            </footer>
        </>
    )
    
};