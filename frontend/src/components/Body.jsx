import React, { useState } from "react";
import './css/Body.css';
import {Card, Card2 } from "./Card";
import { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
  import { PieChart, Pie, Sector, Cell } from 'recharts';
import { NavLink } from "react-router-dom";

  const data = [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Page B',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'Page C',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: 'Page D',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: 'Page E',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: 'Page F',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];

  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];

const Body = () =>{
    

    const [card] = useState(Card);
    const [card2] = useState(Card2);

    return(
        <>
            <div className="container-fluid pt-4 mb-1 whole">
                <div className="row">
                    <div className="col-12">
                        <div className="top_title">
                            <span><i class="fas fa-tachometer-alt"></i> Dashboard</span><hr></hr>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        card.map((cardelem) =>{
                            const {num,img,name} = cardelem;
                            return(
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="card1">
                                        <div className="card1-left">
                                            <div className="num">
                                                {num}
                                            </div>
                                            <div className="num_title">
                                                {name}
                                            </div>
                                        </div>
                                        <div className="card1-right">
                                            <div className="right-img">
                                                <span><img src={img} alt={img} height={'30px'} width={'30px'}></img></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })        
                    }
                </div>

                <div className="row mt-3">
                    {
                        card2.map((card2elem) =>{
                            const {num,img,name} = card2elem;

                            return(
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="card2">
                                        <div className="card1-left">
                                            <div className="num">
                                                {num}
                                            </div>
                                            <div className="num_title">
                                                {name}
                                            </div>
                                        </div>
                                        <div className="card1-right">
                                            <div className="right-img">
                                                <span><img src={img} alt={img} height={'30px'} width={'30px'}></img></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="row mt-4">
                    <div className="col-12 col-md-8">
                        <div className="left-chart">
                            <span className="pt-3 pl-2">Monthly Improvement</span><hr></hr>
                            <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart
                                width={500}
                                height={100}
                                data={data}
                                margin={{
                                    top: 0,
                                    right: 80,
                                    bottom: 80,
                                    left: 20,
                                }}
                                >
                                <CartesianGrid stroke="#f5f5f5" />
                                <XAxis dataKey="name" label={{ value: 'Pages', position: 'insideBottomRight', offset: 0 }} scale="band" />
                                <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="right-chart">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart width={400} height={400}>
                                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                                <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                
               
               
               
               
               
                </div>
            
        </>
    )
}
export default Body