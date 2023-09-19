import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';
import { Audio, Grid} from  'react-loader-spinner'


const Phones = () => {
    const [phone,setPhone]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        // fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=>res.json())
        // .then(data=>setPhone(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            
            const phoneData=data.data.data
            const fakeData=phoneData.map(phone=>{
                const obj={
                    name:phone.phone_name,
                    price:parseInt(phone.slug.split('-')[1])
                }
                return obj
            })
            setPhone(fakeData)
            setLoading(false)
        })
    },[])
    return (
        <div>
            {loading && <Audio
    height = "80"
    width = "80"
    radius = "9"
    color = 'green'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  />
 
  
  }
 { loading && <Grid
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>}
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