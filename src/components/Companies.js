import React from 'react';
/////// Needed for DaveCeddia Tutorial //////////////
//import ReactDOM from 'react-dom';
import axios from 'axios';


export default class Companies extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        companies: []
    };

    componentDidMount() {

///////// DaveCeddia AJAX/REACT tutorial couldn't make work ///////////////

      // axios.get(`https://vast-shore-53950.herokuapp.com./companies.json`)
      //   .then(res => {
      //     const companies = res.data.data.children.map(obj => obj.data);
      //     this.setState({companies});
      //   });
      // }

//////////  KIM'S CODE works in console but not sure how to setState & render ////////////////

        axios.get(`https://vast-shore-53950.herokuapp.com`)
        // .then(function (response) {
        //     this.setState({
        //         isLoaded: true,
        //         companies: response.companies
        //     })
        // })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
////////////// REACT TUTORIAL CODE-1 couldn't make work //////////////
     
        // axios.get(`https://vast-shore-53950.herokuapp.com`)
        // .then(
        //   (result) => {
        //     this.setState({
        //       isLoaded: true,
        //       companies: result.companies
        //     });
        //   },
        //   // Note: it's important to handle errors here
        //   // instead of a catch() block so that we don't swallow
        //   // exceptions from actual bugs in components.
        //   (error) => {
        //     this.setState({
        //       isLoaded: true,
        //       error
        //     });
        //   }
        // )
    // }
    render() {

      /////// DaveCeddia AJAX/REACT tutorial /////////////////

      // return (
      //   <div>
      //     <h1>{`/${this.props.companies}`}</h1>
      //     <ul>
      //       {this.state.companies.map(companies =>
      //         <li Key={companies.id}>{companies.companyName}</li>
      //         )}
      //     </ul>
      //  </div>
      //       );
      //     }
      //   }

      //////// REACT TUTORIAL CODE-1 only able to render Error: & Loading...////
    
          const { error, isLoaded, companies } = this.state;
        if (error) {
            return <div>Error: {error.messsage}</div>;
        } else if (!isLoaded) {
            return<div>Loading...</div>;
        }else {
            return(
                <ul>
                    {companies.map(item => (
                        <li key={item.companyName}>
                        {companies.companyName}
                        </li>
                    ))}
                </ul>
            );
        }
      }
    }

////////// My attempt but only rendered <h1> /////////////
       
// const renderedCompanies = this.state.companies;
//         return ( 
//           <div>
//             <h1>Rendered Companies:</h1>
//             <ul>
//               {renderedCompanies}
//             </ul>
//           </div>
//         );
//     }
//   }

  ////////// DaveCeddia AJAX/REACT tutorial couldn't make work ///////

    // ReactDOM.render(
    //   <Companies />,
    //   document.getElementById('root')
    // );


