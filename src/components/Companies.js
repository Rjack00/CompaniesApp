import React from 'react';
import axios from 'axios';

export default class Companies extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        companies: []
    };

    componentDidMount() {
        axios.get(`https://vast-shore-53950.herokuapp.com`)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({ 
                isLoaded: true,
                companies: result.companies
             });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
    render() {
        const { error, isLoaded, companies } = this.state;
        if (error) {
            return <div>Error: {error.messsage}</div>;
        } else if (!isLoaded) {
            return<div>Loading...</div>;
        }else {
            return(
                <ul>
                    {companies.map(companies => (
                        <li key={companies.companyName}>
                        {companies.companyName}
                        </li>
                    ))}
                </ul>
            );
        }
        }
        }
