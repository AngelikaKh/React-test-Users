import React from 'react';
import Table from './Table';
import { API_URL } from '../config';
import { handleResponse } from '../helpers';

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
        fetch(`${API_URL}/users?page=${this.state}`)

        .then( handleResponse )

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