import React from "react";
import { useState ,useEffect} from "react";
function Student(){
    const [data,setData]=useState({})
   const [studentslist,setStudentslist]=useState([])

    const submithandler =(e)=>{
        e.preventDefault();
        console.log(data)
        fetch('http://localhost:8080/student/add',{
            method : 'POST',
            headers : {
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        .then((data)=>data.json())
         .then((response)=>alert(JSON.stringify(response.message)))
       
    }

    useEffect(()=>{
        fetch('http://localhost:8080/student/all',
            {
                method : "GET",
                headers :{
                    "Accept" : "application/json",
                    "Content-Type" : "application/json"
                }
            }
        )
        .then((data)=>data.json())
        .then((response)=>setStudentslist(response))
        

    },[])

   const deletehandler=(e)=>{
     e.preventDefault();
    //  let tr=e.parentNode.parentNode;
    //  let childnodes=tr.children;
    //  let rollnumber =childnodes[childnodes.length-3].innertext;
    //  console.log(rollnumber)
    //  fetch(`http://localhost:8080/student/delete${rollnumber}`,
    //     {
    //         method : "DELETE",
    //         headers :{
    //             "Accept" : "application/json",
    //             "Content-Type" : "application/json"
    //         }
    //     }
    //  )
    //  .then((data)=>data.json())
    //  .then((response)=>alert(response.message))
   }
   

    return(
        <div>
            <form className="student-data" 
             onSubmit={submithandler}
             action=""
              method="POST" >
                <h2>Student Enrollment Form:-</h2>
                <input name ="name"   placeholder='name' type='text' onChange={(e)=>setData({...data,name :e.target.value})}/>
                <input name ="email" placeholder='email' type='email' onChange={(e)=>setData({...data, email :e.target.value})}/>
                <input name ="age"  placeholder='age' type='number' onChange={(e)=>setData({...data, age:e.target.value})}/>
                <input name ="rollnumber" placeholder='rollnumber' onChange={(e)=>setData({...data, rollnumber :e.target.value})} />
                <input name ="branch"  placeholder='branch' type='text' onChange={(e)=>setData({...data,branch :e.target.value})}/>
                <select type ="text" name='gender'  onChange={(e)=>setData({...data,gender :e.target.value})}>
                    <option value = 'male'>male</option>
                    <option  value = 'female'>female</option>
                    <option  value = 'others'>others</option>
                </select>
                <button type="submit">Add student</button>
            </form>
           
            <table className="student-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Rollnumber</th>
                        <th>Branch</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentslist.map((val,key)=>{
                            return <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.age}</td>
                                <td>{val.rollnumber}</td>
                                <td>{val.branch}</td>
                                <td>{val.gender}</td>
                                <td><button onClick={deletehandler}>delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Student;