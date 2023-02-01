import React, { useEffect, useState } from "react";
import "./data.css"
export const Data = () => {
    const [user, setUser] = useState([]);
    const [click, setClick] = useState(false);
     const fetchData = () => {
       return fetch("https://jsonplaceholder.typicode.com/users")
         .then((response) => response.json())
         .then((data) => setUser(data));
     };
   useEffect(() => {
     fetchData();
   }, []);
    
    function clickHandle(){
        setClick(!click);
   }
    return (
      <div className="main-container">
        {user &&
          user.length > 0 &&
          user.map((userObj) => (
            <>
              <div className="card">
                <div>{userObj.name}</div>
                <div>
                  <b>Email</b>
                  <br></br>
                  {userObj.email}
                </div>
                <div>
                  <b>Phone</b>
                  <br></br>
                  {userObj.phone}
                </div>
                <div>
                  <b>City</b>
                  <br></br>
                  {userObj.address.city}
                </div>
                <div>
                  <button onClick={clickHandle}>Click Here</button>
                </div>
                  </div>
                  {click &&
                      <div className="description">
                          <div className="address">
                              <h5>Street:</h5>
                              {userObj.address.street}
                              <br />
                              <h5>Suite:-</h5>
                              {userObj.address.suite}
                              <br />
                              <h5>ZipCode</h5>
                              {userObj.address.zipcode};<br />
                              <h5>Geo</h5>
                              {userObj.address.geo.lat}<br />
                              {userObj.address.geo.lng}
                          </div>
                          <div className="company-details">
                              <h5>Phone Number</h5>
                              {userObj.phone}
                              <br />
                              <h5>Website</h5>
                              <a href={userObj.website}>{userObj.website}</a> <br />
                              <h5>Company Name:-</h5>
                              {userObj.company.name}
                              <br />
                              <h5>Company CatchPhrase:-</h5>
                              {userObj.company.catchPhrase}
                          </div>
                      </div>
                  }
            </>
          ))}
            
      </div>
    );
};
//  <li key={userObj.id}>{userObj.name}</li>;