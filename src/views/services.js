import React, { useEffect } from "react";

const Services = (props) => {

    const {history, match} = props;
    console.log(match.params);
    console.log(history);


    useEffect(() => {
        //history.push("/");
    }, []);


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Services</h1>
                </div>
            </div>
        </div>
    );
}


// class Services extends React.Component {
//     componentDidMount(){
//         const {history, match} = this.props;
//         console.log(match.params);
//         console.log(history);
//         //history.push("/")
//     }
//     render(){
//         return (
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-12">
//                         <h1>Services</h1>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
export default Services;