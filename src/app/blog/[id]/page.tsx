import React from 'react'
import Link from 'next/link';
import{blog} from "@/constants";
type blogDetailPageProps={
  params:{
    id:String;
  };
};
const findBlogDetail=(id:number)=>{
  //console.log("blog detail:",id);
  return blog.find((item)=>{
  return item.id===id;
});
};
function blogDetail({params}:blogDetailPageProps) {  
  //console.log("blog detail:",params);
  const blog=findBlogDetail(Number(params.id)); // type casting
  return (
    <div className='blogWrapper text-gray'>
       <img src={blog?.image} alt="Blog Hero" />
      <h2 className="blogTitle font-blod">{blog?.title}</h2>
      <p className="blogTitle font-blod">{blog?.content}</p>
      <b className="blogTitle">Author:{blog?.author}</b>
    </div>
  )
}

export default blogDetail;