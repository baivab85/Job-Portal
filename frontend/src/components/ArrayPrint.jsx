import React, { useState } from "react";
import Array from "./Array";

const ArrayPrint = () => {
    const [data] = useState(Array);

    return (
        <div className="container-fluid">
            <h2>Food Items Menu</h2><hr></hr><br></br>
            <div className="row">
                {data.map((elem, index) => {
                    const { name, Description, Price, Button1 } = elem;
                    return (

                        <div key={index} className="col-lg-3" style={{ border: "1px solid black", marginBottom: "10px", padding: "10px",boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;' }}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-4" style={{ textAlign: "left" }}>
                                        <img src={elem.img} alt={name} style={{ height: "100%", width: "100%" }} />
                                    </div>
                                    <div className="col-lg-5" style={{ textAlign: "left" }}>
                                        <p><h4>{name}</h4></p>
                                        <p><h4>{Description}</h4></p>
                                        <p><h4>{Price}</h4></p>
                                        <button style={{backgroundColor:'green',color:'white'}}>{Button1}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ArrayPrint;
