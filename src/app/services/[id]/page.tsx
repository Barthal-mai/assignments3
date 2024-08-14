import React from 'react'
import Link from 'next/link';
import{services} from "@/constants";
type servicesDetailPageProps={
  params:{
    id:String;
  };
};
const findservicesDetail=(id:number)=>{
  //console.log("services detail:",id);
  return services.find((item)=>{
  return item.id===id;
});
};
function serviceDetail({params}:servicesDetailPageProps) {  
  //console.log("services detail:",params);
  const service=findservicesDetail(Number(params.id)); // type casting
  return (
    <div className='servicesWrapper text-gray'>
       <img src={service?.image} alt="services Hero" />
      <h2 className="servicesTitle font-blod">{service?.title}</h2>
      <p className="servicesTitle font-blod">{service?.content}</p>
      <b className="servicesTitle">Author:{service?.author}</b>
    </div>
  )
}

export default serviceDetail;