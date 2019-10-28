import React from 'react';
import { API_URL } from '../config';
import { handleResponse } from '../helpers';
import './Detail.css';

class Detail extends React.Component {
    constructor() {
        super();

        this.state = {
            users: { },
            error: null
        }
    }

    componentDidMount() {
        this.setState({
        })

        const userId = this.props.match.params.id;
        fetch(`${API_URL}/users/${userId}`)
        .then(handleResponse)

        .then(users => {
            this.setState({
                users,
                error: ''
            })
        })
        .catch()
    }

    render() {
        const {users, error} = this.state;
        console.log(this.state)
        
        return(
            <div className='Detail'>
                <h1 className='Detail-heading'>
                    User ID: {users.id} 
                </h1>

                <div className="Detail-container">
                    <div className="Detail-item">
                        User Name: <span className="Detail-value">{users.name}</span>
                    </div>

                    <div className="Detail-item">
                        Email: <span className="Detail-value">{users.email}</span>
                    </div>

                    <div className="Detail-item">
                        Phone: <span className="Detail-value">{users.phone}</span>
                    </div>

                    <div className="Detail-item">
                        Website: <span className="Detail-value">{users.website}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;