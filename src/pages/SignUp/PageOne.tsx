import React from "react";
import "./styles.css";

export function PageOne() : React.ReactElement{
  return(
    <div className="w-full flex flex-col shadow-xl p-4">
        <InputWithLabel label="Firstname" placeHolder="your firstname is mandatory"/>
        <InputWithLabel label="Lastname" placeHolder="your lastname is mandatory"/>
        <label htmlFor="" className="p-2">birthdate</label>
        <div className="for-each-select p-2">
         <label htmlFor="day">day</label>
            <select
              name="day"
              className="text-md flex-1 px-1 py-1.5 ring-1 ring-gray-400 rounded-md outline-none "
            >
                {
                    Array.from({ length: 31 }, (_, index) => index + 1).map((i)=><option>{i}</option>)
                }
            </select>
            <label htmlFor="">mounth</label>
            <select
              name="month"
              className="text-md flex-1 px-1 py-1.5 ring-1 ring-gray-400 rounded-md outline-none"
            >
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            <label htmlFor="">year</label>
            <select
              name="year"
              className="text-md flex-1 px-1 py-1.5 ring-1 ring-gray-400 rounded-md outline-none"
            >
              <option>1990</option>
              <option>1991</option>
              <option>1992</option>
              <option>1993</option>
              <option>1994</option>
              <option>1995</option>
              <option>1996</option>
              <option>1997</option>
              <option>1998</option>
              <option>1999</option>
              <option>2000</option>
              <option>2001</option>
              <option>2002</option>
              <option>2003</option>
              <option>2004</option>
              <option>2005</option>
              <option>2006</option>
              <option>2007</option>
              <option>2008</option>
              <option>2009</option>
              <option>2010</option>
              <option>2011</option>
              <option>2012</option>
              <option>2013</option>
              <option>2014</option>
              <option>2015</option>
              <option>2016</option>
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
            </select>
        </div>
        <div className="py-2 flex flex-col">
            <label htmlFor="" className="p-3">Sex</label>
            <select className="text-md flex-1 px-2 py-1.5 ring-1 ring-gray-400 rounded-md outline-none w-1/6">
                <option value={0}>Homme</option>
                <option value={1}>Femme</option>
                <option value={2}>Autre</option>
            </select>
        </div>
        <InputWithLabel label="Age" placeHolder="your Age"/>
        <InputWithLabel label="CIN" placeHolder="you cin Number"/>
        <div className="py-2 flex flex-col">
            <label htmlFor="" className="p-3">Role</label>
            <select className="text-md flex-1 px-2 py-1.5 ring-1 ring-gray-400 rounded-md outline-none w-1/6">
                <option value={0}>kid</option>
                <option value={1}>Teen</option>
                <option value={2}>Adulte</option>
            </select>
        </div>
        <div className="flex flex-col">
            <label htmlFor="" className="p-2">password</label>
            <input type="password" placeholder={"***********"} className="w-2/6 border-solid p-2 focus:shadow-lg rounded-md border-neutral-800/50 border-2"/>
        </div>
    </div>
  )
}

function InputWithLabel(props:{label:string, placeHolder:string}) : React.ReactElement {
  const { label, placeHolder } = props;
  return(
    <div className="flex flex-col">
        <label htmlFor="" className="p-2">{label}</label>
        <input type="text" placeholder={placeHolder} className="w-2/6 border-solid p-2 focus:shadow-lg rounded-md border-neutral-800/50 border-2"/>
    </div>
  )
}