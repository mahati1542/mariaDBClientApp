import React from 'react';

const Details=(props)=>{
    const {data}=props;
    return(
        <div>
            {
                data.data.type==="USER"?
                <div className="App">
                  <h1>Profile</h1>
                  <table>
                      <tbody>
                          <tr>
                              <td>Name</td>
                              <td>{data.data.user.Name}</td>
                          </tr>
                          <tr>
                              <td>EMail</td>
                              <td>{data.data.user.Email}</td>
                          </tr>
                          <tr>
                              <td>Role</td>
                              <td>{data.data.user.role}</td>
                          </tr>
                      </tbody>
                  </table>

                </div>:data.data.type==="ADMIN"?
                <div className="App">
                <h1>User Details</h1>
                <table>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <tbody>
                      {
                          data.data.data.map((item,index)=>{
                              return(
                                  <tr>
                                    <td>{item.Name}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.role}</td>
                                  </tr>
                              )
                          })
                      }
                  </tbody>
                </table>
                   
                </div>:<div></div>
            }
        </div>
    )
}

export default Details;