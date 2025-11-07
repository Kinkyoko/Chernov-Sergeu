import type { Route } from "./+types/home";
import React, { useState } from 'react';
import { Button, Checkbox, Input , Col, Row, } from 'antd';
import type { GetProp } from 'antd';




export function meta({}: Route.MetaArgs) {
  return [
    { title: "Todo list" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

type FieldType = {
  username?: any;
};







const CheckboxGroup = Checkbox.Group;

// let plainOptions = ['Apple', 'Pear', 'Orange', '1'];
// let todo = ['1']



const App: React.FC = () => {
  
  const [plainOptions, setPlainOptions] = useState(['Почистить зубы'])

  const [username, settodo] = useState<string>('')

  const handleInputChange = 
        (e: React.ChangeEvent<HTMLInputElement>) => {
            settodo(e.target.value);
        };

  const onChange = (list: string[]) => {
    
  };

  function foo () {
    setPlainOptions(plainOptions.concat([username]))
   
}


  return (
    <>
      <Col span = {12} offset={6}>
      <Input style={{ width: '100%' }} value={username}
      onChange={handleInputChange}
      placeholder="Введите вашу задачу" />
      </Col>
      
      <Row/>
      <Col offset={6}>
        <Button  type="primary" onClick={foo}>
            Добавить
        </Button>
      </Col>                  
      <br/>          

      <CheckboxGroup style={{ flexDirection: 'column' }} options={plainOptions}  onChange={onChange}/>
        

      
    </>
    
  );

  
  
};


export default App;

