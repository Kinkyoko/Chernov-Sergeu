import React, { useState } from 'react';
import { Button, Flex, Divider } from 'antd';


document.title = "RandomWORD"
 
const App: React.FC = () => {

  const [randomItem, setRandomWord] = useState('Яблоко')
  const petrandomword = ["Яблоко", "Груша", "Банан", "Киви"]  

function Changeword () {
    const randomNumber = Math.floor(Math.random() * 4)
    setRandomWord(petrandomword[randomNumber])
} 

function dontpress () {
    window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0')
} 

function deleteworld () {
    window.close()
} 
   
  return (
    
    <div style={{ height: '100vh', background: 'rgba(51, 51, 51, 1)' }}> 

      <h1 style={{textAlign: 'center', fontSize: '60px', background: 'rgba(129, 125, 125, 1)'}}>Выбор случайного слова</h1>

      <div> 
          <p style={{ fontWeight: "bold", fontSize: '40px', width: '100%', textAlign: 'center', color: 'rgba(172, 5, 194, 1)'}}>{randomItem}</p>

            <Flex vertical gap="small" style={{ width: '100%'}}>

              <Button  style={{fontSize: '40px', background: 'rgba(30, 31, 30, 1)', color: 'rgba(143, 143, 143, 1)', height:  '60px'  }}  onClick={Changeword}>
                  Изменить слово
              </Button>

            </Flex>

            <button onClick={dontpress}>
              <p style={{color: 'rgba(44, 40, 40, 1)',textAlign: 'center'}}>
                  RICKROLL
              </p>
            </button>
            <div style={{paddingTop: '1050px'}}></div>
              <button onClick={deleteworld} style={{ width: '100%'}}>
                <p style={{color: 'rgba(37, 37, 37, 1)',textAlign: 'center'}}>
                    adios
                </p>
              </button>
            </div>
      </div>  

    
  );

  
  
};


export default App;

