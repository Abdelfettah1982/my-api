import React, {useState, useEffect} from 'react'

import axios from 'axios'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

function UserList() {
  const [listOfUSer, setlistOfUSer] = useState( [] );
 
  useEffect(() => {
    const user = async () => {
      const response = await axios('https://jsonplaceholder.typicode.com/users');
      setlistOfUSer(response.data);
    };
    user();
  }, []);

const userlistaxios = listOfUSer.map((users)=>{
  return <div>
  <Card className="w-97 grid grid-cols-1 items-center gap-1" >
      <CardHeader floated={false} className="h-40">
      <div className="flex items-center space-x-6 font-semibold text-gray-9 leading-8">
      <span className="text-green-500"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CCCDFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
      </span>
     
    
 
      <span className="tracking-wide"> <h6 style={{ fontSize: 17 }}>{users.name}</h6></span> </div>

   

      <div class="flex items-center space-x-6 font-semibold text-gray-900 leading-8">
      <span className="text-green-500"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CCCDFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      </span>
      <span className="tracking-wide"><h6 style={{ fontSize: 17 }}>{users.website}</h6></span> </div>

      <div class="flex items-center space-x-6 font-semibold text-gray-900 leading-8">
      <span className="text-green-500"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CCCDFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </span>
      <span className="tracking-wide"><h6 style={{ fontSize: 17 }}>{users.phone}</h6></span> </div>

      <div class="flex items-center space-x-6 font-semibold text-gray-900 leading-8">
      <span className="text-green-500"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CCCDFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      </span>
      <span className="tracking-wide"> <h6 style={{ fontSize: 17 }}>User name : {users.username} </h6></span> </div>
    
      <div class="flex items-center space-x-6 font-semibold text-gray-900 leading-8">
      <span className="text-green-500"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CCCDFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
      </span>
   
      <span className="tracking-wide"><h6 style={{ fontSize: 17 }}> website : {users.website}  </h6></span> </div>
      
     
      </CardHeader>
      
      <CardBody className="text-center">
     
      
      <div class="flex items-center space-x-6 font-semibold text-gray-900 leading-8">
      <span className="text-green-500"> 
      
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCCDFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg>
      </span>
      <span className="tracking-wide"><h6 style={{ fontSize: 15 }}> Street {users.address.street} {users.address.suite}   </h6></span> </div>
 
      <div class="flex items-center space-x-6 font-semibold text-gray-900 leading-8">
      <span className="text-green-500"> 
      
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCCDFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg>
      </span>
      <span className="tracking-wide"><h6 style={{ fontSize: 15 }}> zipcode : {users.address.zipcode} | City : {users.address.city}   </h6></span> </div>

      <div class="flex items-center space-x-6 font-semibold text-gray-900 leading-8">
      <span className="text-green-500"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CCCDFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>
      
      </span>
     
      <span className="tracking-wide"><h6 style={{ fontSize: 15 }}>Latitude : {users.address.geo.lat} 
       , Longitude : {users.address.geo.lng} </h6></span> </div>

       <div class="flex items-center space-x-6 font-semibold text-gray-900 leading-8">
       <span className="text-green-500"> 
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CCCDFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>  
       </span>
       <span className="tracking-wide">  <h6 style={{ fontSize: 15 }}> Company : {users.company.name}   </h6>  </span> </div>
      
       
       <div class="flex items-center space-x-6 font-semibold text-gray-900 leading-8">
      <span className="text-green-500"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CCCDFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>  
      </span>
      <span className="tracking-wide">  <h6 style={{ fontSize: 15 }}> {users.company.catchPhrase}   </h6>  </span> </div>

      <div class="flex items-center space-x-6 font-semibold text-gray-900 leading-8">
      <span className="text-green-500"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CCCDFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>  
      </span>
      <span className="tracking-wide">  <h6 style={{ fontSize: 15 }}> {users.company.bs}  </h6>  </span> </div>


      
     
    
  </CardBody>   
             
         
              
              </Card> <br/>
            </div> 
}) 

  return (
    <>
      
      
      <div className="axioscontainer">
          {listOfUSer && userlistaxios}
      </div>
    </>
  );
}
export  {UserList}