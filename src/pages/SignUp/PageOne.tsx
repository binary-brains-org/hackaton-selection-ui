import React, { ChangeEvent, useState } from "react";
import "./styles.css";
import { Input } from "@mui/material";
import { CreateUser, createUser } from "../../api";

export function PageOne() : React.ReactElement{
  const [Firstname, setFirstName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState(undefined);
  const [cin, setCin] = useState("");
  const [ageCategory, setAgeCategory] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  
  const handleClick = () => {
    const toCreate: CreateUser={
      age:age,
      age_category:ageCategory,
      birthdate:birthdate,
      cin:cin,
      firstname:Firstname,
      lastname:Lastname,
      image:null,
      password:password,
      role:role,
      sex:sex
    }
    createUser(toCreate).then((value:any)=>{console.log(value)})
  }

  return(
    <div className="w-full flex flex-col shadow-xl p-4">
        <InputWithLabel label="Firstname" handleClick={setFirstName} placeHolder="your firstname is mandatory"/>
        <InputWithLabel label="Lastname" handleClick={setLastName} placeHolder="your lastname is mandatory"/>
        <label htmlFor="" className="p-2">birthdate</label>
        <Input type="date" onChange={(e)=>{setBirthdate(e.target.value)}}/>
        <div className="py-2 flex flex-col">
            <label htmlFor="" className="p-3">Sex</label>
            <select defaultValue={"M"} onChange={(e)=>{setSex(e.target.value)}} className="text-md flex-1 px-2 py-1.5 ring-1 ring-gray-400 rounded-md outline-none w-1/6">
                <option value={"M"}>Homme</option>
                <option value={"F"}>Femme</option>
            </select>
        </div>
        <label htmlFor="" className="p-2">age</label>
        <Input type="number" onChange={(e)=>{setAge(e.target.value)}}/>
        <InputWithLabel handleClick={setCin} label="CIN" placeHolder="you cin Number"/>
        <div className="py-2 flex flex-col">
            <label htmlFor="" className="p-3">Role</label>
            <select defaultValue="CHILD" onChange={(e)=>{setRole(e.target.value)}} className="text-md flex-1 px-2 py-1.5 ring-1 ring-gray-400 rounded-md outline-none w-1/6">
                <option value={"CHILD"}>CHild</option>
                <option value={"PARENT"}>parent</option>
            </select>
        </div>
        <div className="py-2 flex flex-col">
            <label htmlFor="" className="p-3">age category</label>
            <select defaultValue={"KIDS"} onChange={(e)=>{setAgeCategory(e.target.value)}} className="text-md flex-1 px-2 py-1.5 ring-1 ring-gray-400 rounded-md outline-none w-1/6">
                <option value={"KIDS"}>kid</option>
                <option value={"TEEN"}>Teen</option>
                <option value={"ADULT"}>Adult</option>
            </select>
        </div>
        <div className="flex flex-col">
            <label htmlFor="" className="p-2">password</label>
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder={"***********"} className="w-2/6 border-solid p-2 focus:shadow-lg rounded-md border-neutral-800/50 border-2"/>
        </div>
        <button onClick={handleClick}>create</button>
    </div>
  )
}

function InputWithLabel(props:{label:string, placeHolder:string, handleClick: React.ChangeEventHandler<HTMLInputElement>}) : React.ReactElement {
  const { label, placeHolder , handleClick} = props;
  return(
    <div className="flex flex-col">
        <label htmlFor="" className="p-2">{label}</label>
        <input type="text" placeholder={placeHolder} onChange={(e:ChangeEvent<HTMLInputElement>)=>{handleClick(e.target.value)}} className="w-2/6 border-solid p-2 focus:shadow-lg rounded-md border-neutral-800/50 border-2"/>
    </div>
  )
}