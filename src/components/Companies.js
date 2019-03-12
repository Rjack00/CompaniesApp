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
        
            .then(response => 
                this.setState({
                    companies: response.data.companies, 
                    isLoaded: true 
                })) 
            .catch(function (error) {
                console.log(error);
            });
        }
 

    render() {

        const {isLoaded, error, companies} = this.state;

        if (error) {
            return <div>Error: {error.messsage}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            console.log(companies);
            return (
                <div className="container1" style={{width:"90%", textAlign:"center"}}>
                    <h1>
                        Companies:
                    </h1>
                    <hr style={{margin:"50px 0"}} />
                    {companies.map(company => 
                    <div className="container2" key={company.id}>
                        <img style={{width:"20%"}} src={company.imageURL} alt=""/>
                        <p style={{fontSize:"2em"}} >
                            {company.companyName}
                        </p>
                        <p style={{marginBottom:"50px"}}>
                            Number of Employees: {company.numberOfEmployees}
                        </p>
                        <hr style={{marginBottom:"50px"}} />
                    </div>
                    )}
                </div>
            );
        }
    }
 }