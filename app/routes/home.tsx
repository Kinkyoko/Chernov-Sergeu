import type { Route } from "./+types/home";
import React, { useState } from 'react';
import { Button, theme, Checkbox, Input , Col, Row, Divider, } from 'antd';




export function meta({}: Route.MetaArgs) {
  return [
    { title: "Todo list" },
    
  ];
}







const CheckboxGroup = Checkbox.Group;



const App: React.FC = () => {
  
  const {
    token: { borderRadiusLG },
  } = theme.useToken();



  const [plainOptions, setPlainOptions] = useState(['Почистить зубы']);
  const [username, settodo] = useState<string>('');

  const handleInputChange = 
        (e: React.ChangeEvent<HTMLInputElement>) => {
            settodo(e.target.value);
        };

function removeTask (task:string) {
          const index = plainOptions.indexOf(task, 0);
            if (index > -1) {
              plainOptions.splice(index, 1);
}
        }

  // const onChange = (list: string[]) => {
    
  // };
      
  function addTask () {
    setPlainOptions([...plainOptions, username]);
    // setPlainOptions(plainOptions.concat([username]))
   
}


  return (
    <div style={{ height: '100vh', background: 'rgba(32, 179, 236, 1)' }}> 
      <>
        
       <div style={{height: 100,padding: 24, borderRadius: borderRadiusLG,  width: '100%', background: 'rgba(255, 255, 255, 1)'}}> 
        <Col  offset={1} style={{ width: '100%'}} >
          
            <Input style={{ width: '70%' }} value={username}
            onChange={handleInputChange}
            placeholder="Введите вашу задачу" />

            <Button  type="primary" onClick={addTask}>
                Добавить
            </Button>
          
          
          </Col> 
          </div>                 
          <br/> 
          <br/> 

          {plainOptions.map((task, index) => {
            return <div style={{ height: 30, width: '100%',borderRadius: borderRadiusLG, background: 'rgba(255, 255, 255, 1)' }}>
              <div>
                <Col offset={1}>{task}
              <Button style={{height: 15, width:30 }} onClick={( ) => {
                removeTask(task)
              }}>-</Button>
                </Col>
              </div>
            </div>
          })}
       

      
    </>
   </div> 
    
  );

  
  
};


export default App;

