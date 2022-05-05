import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchPage = () => {
    
    // when anything is entered into form, use state to grab it 
    // THIS IS A CONTROLLED INPUT 
    const [inputValue, setInputValue] = useState("");
    const [submitValue, setSubmitValue] = useState("Hannibal");
    const [showData, setShowData] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {

        async function searchApi(searchString) {
            try {
                const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchString}`);
                setShowData(result.data);
                console.log(result.data);
            } catch (err) {
                console.log(err);
            }
        }

        searchApi(submitValue);

    }, [submitValue]);


    function renderShows() {
        return showData.map((s, i) =>
                            // ----- AFTER THE CLICK, CALL THIS EMPTY FUNCTION 
                            // ----- THIS useNavigate redirects user to the WorkPage (specfic id/ show)
                             <li key={i}
                                className='show-link'
                                onClick={() => { navigate (`/search/${s.show.name}` )}}>
                                 {s.show.name} 
                                 {/* --- when navigated to individual show, bring data with us to avoid another fetch */}
                             </li>)
    }

    function handleInput(e) {
        // e stands for whatever is handling the input
        const newValue = e.target.value;
        setInputValue(newValue);
        console.log(inputValue);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // stop it from refreshing the page on submit
        setSubmitValue(inputValue);
        // write inputValue state INTO --> setSubmitValue
        setInputValue("");
        // then sets setInputValue to empty string as we don't need the value

    }

    return <>
            <h1>Search</h1>
            <form onSubmit={handleSubmit}> 
                <input 
                    type="text" 
                    onChange={handleInput} 
                    value={inputValue}>
                </input>
                <button type="submit">Submit</button>
            </form>


            <ol>{renderShows()}</ol>
            </>
}

export default SearchPage;