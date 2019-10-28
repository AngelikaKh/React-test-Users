import React from 'react';
import { withRouter } from 'react-router-dom';
import "./List.css";

const Table = (props) => {
    const { users } = props;
    
    return(
        <div className="Table-container">
            <table className="Table">
            <thead className="Table-head">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody className="Table-body">
                {
                    users.map((user) => {
                        return(
                            <tr key={user.id} onClick={()=>props.history.push(`/users/${user.id}`)}>
                                <td>
                                    <a href="#">
                                        <span>{user.name}</span>
                                    </a>
                                </td>

                                <td>
                                    <span>{user.email}</span>
                                </td>

                                <td>
                                    <span>{`${user.address.city}, ${user.address.street}`}</span>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
            </table>
        </div>
    );
}

export default withRouter (Table);
