import React, {useState, useEffect} from 'react'
import './style.css'
import axios from 'axios'

function Mainbody() {
    const [posts, setPosts] = useState({});
    // const [author, setAuthors]= useState({});

    useEffect(()=> {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(res => res.json())

        .then(data => console.log(data));
        
        
    },[])

   
        

    return (
        <div id="quote-box">
            
           
            <ul>
                <li>{posts.title}</li>
                
            </ul>
        
            <button>Change Quote</button>
        </div>
    )
}

export default Mainbody
