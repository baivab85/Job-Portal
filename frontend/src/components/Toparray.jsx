import React, { useState } from "react";
import Arrayy1 from "./Array";

const ArrayPrint = () => {
    const [data] = useState(Array);

    return (
        <>
            {data.map((elem, index) => {
                const { name } = elem;
                return (
                    <div key={index} style={{ border: "1px solid black", marginBottom: "10px", padding: "10px"}}>
                        All Food
                    </div>
                );
            })}
        </>
    );
};

export default ArrayPrint;
