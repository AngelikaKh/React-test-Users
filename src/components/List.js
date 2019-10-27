import React from 'react';
import { API_URL } from '../config';
import Table from './Table';

class List extends React.Component {
    constructor() {
        super();

        this.state = {
            users: [],
            error: null
        }
    }

    componentDidMount() {
        this.fetchUsers()
    }

    fetchUsers() {
        fetch(`${API_URL}/users`)
        .then((response) => {
            return response.json().then(data => {
                return response.ok ? data : Promise.reject(data);
            });
        })

        .then((result) => {
            this.setState({
                users: result
            })
        })
        
        .catch(() => {
        })
    }

    render() {
        const {users, error} = this.state
        
        return (
            <div>
                <Table users={ users } />
            </div>
        );
    }

};


export default List;