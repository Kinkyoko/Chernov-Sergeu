import type { Route } from "./+types/home";
import React, { useState } from 'react';
import { Button, theme, Input , Col, Divider, Flex } from 'antd';
import {DeleteOutlined, FormOutlined, CheckOutlined} from '@ant-design/icons';
import { supabase } from './supabaseClient.js';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Todo list" },
    
  ];
}





const App: React.FC = () => {
  
  const {
    token: { borderRadiusLG },
  } = theme.useToken();



  const [plainOptions, setPlainOptions] = useState<{id: number; name: string}[]>([]);
  const [username, settodo] = useState<string>('');
  const [editableTaskId, setEditableTaskId] = useState<number>(0)
  const [editvalue, seteditvalue] = useState<string>('');
  

  const handleInputChange = 
        (e: React.ChangeEvent<HTMLInputElement>) => {
            settodo(e.target.value);
        };

  const editInputChange = 
        (e: React.ChangeEvent<HTMLInputElement>) => {
            seteditvalue(e.target.value);
        };

function removeTask (taskId: number) {
  setPlainOptions(plainOptions.filter(task => task.id !== taskId))
  }

function EditTask (taskId: number,taskName: string) {
  setEditableTaskId(taskId)
  seteditvalue(taskName)
  }

function CheckTask (Index: number, taskId: number,editTask: string) {
  plainOptions.splice(Index, 1, {id: taskId, name: editTask})
  setPlainOptions
  setEditableTaskId(0)
  }

function addTask () {
    setPlainOptions([...plainOptions, { id: Math.random(), name: username}]);
    
   
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

<div>
          {plainOptions.map((task,index) => {
            return <div key={task.id} style={{ height: 80, width: '100%',borderRadius: borderRadiusLG, background: 'rgba(255, 255, 255, 1)' }}>
              <div>
                <br/> 
                <Col offset={1} span={22}>
                {editableTaskId === task.id ?  
                <div>
                  <Input style={{ width: '50%' }} value={editvalue}
                    onChange={editInputChange} />

                  <Button icon = {<DeleteOutlined/>} style={{ background: 'rgba(255, 0, 0, 1)'}} onClick={( ) => {
                      removeTask(task.id)
                  }}></Button>

                  <Button icon = {<CheckOutlined />} style={{background: 'rgba(0, 255, 64, 1)' }} onClick={( ) => {
                      CheckTask(index,task.id,editvalue)
                  }}></Button>
                
                
                
                </div> : 
                  
                  <Flex gap='small' align="center">
                    <h3>{task.name}</h3>
                    <Button icon = {<DeleteOutlined/>} style={{ background: 'rgba(255, 0, 0, 1)'}} onClick={( ) => {
                      removeTask(task.id)
                    }}></Button>
                    <Button icon = {<FormOutlined/>} type="primary" style={{background: 'rgba(0, 8, 255, 1)' }} onClick={( ) => {
                      EditTask(task.id,task.name)
                    }}></Button>
                  
                  
                  </Flex>
                  
                
                }
                <Divider size = 'small' style={{ borderWidth: 1, borderColor: '#000000ff' }}></Divider>
              
                </Col>
              </div>
            </div>
          })}
       </div>

      
    </>
   </div> 
    
  );

  
  
};


export default App;

