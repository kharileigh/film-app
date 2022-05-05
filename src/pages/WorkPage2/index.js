import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const WorkPage2 = () => {

    // using params destructure down to the name
    const { name } = useParams();
    console.log(useParams())
    const [showData, setShowData] = useState({});

    useEffect(() => {

        async function getShowData(name) {
            try {
                const result = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${name}`);
                setShowData(result.data);
            } catch (err) {
                console.error(err)
            }
        }
        getShowData(name);

    }, [name])
   

    return <>
             <h1>{showData.name}</h1>
            <div>{showData.summary}</div>
            </>
}

export default WorkPage2;