import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';

const Phones = () => {
    const [phone,setPhone]=useState([])
    useEffect(()=>{
        // fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=>res.json())
        // .then(data=>setPhone(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            // const phoneData=data.data.data
            // const phoneWithFakeData= phoneData.map(phone=>{
            //     const obj={
            //         name:phone.phone_name,
            //         price:parseInt(phone.slug.split('-')[1])
            //     }
            //     return obj
            // })
            // console.log(phoneWithFakeData)
            // setPhone(phoneWithFakeData)
            const phoneData=data.data.data
            const fakeData=phoneData.map(phone=>{
                const obj={
                    name:phone.phone_name,
                    price:parseInt(phone.slug.split('-')[1])
                }
                return obj
            })
            setPhone(fakeData)
        })
    },[])
    return (
        <div>
            <h2 className="text-3xl">Phone:{phone.length}</h2>

            <BarChart width={1000} height={600} data={phone}>
                
            <Bar dataKey="price" fill="blue"></Bar>
            
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;