import { useState,useEffect } from "react";

export const useFetchCustomeHook= (url)=>{
    const [loading ,setLoading] = useState(true)          
    const [post,setPost] =useState([])

    const fetchingData =async ()=>{
        const responceData = await fetch(url)
        const data = await responceData.json();
        setPost(data)
        setLoading(false)
    };
    useEffect(()=>{
        fetchingData()
    },[url])

    return {loading,post}
};
