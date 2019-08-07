import React from "react"
import { Link } from 'react-router-dom'

export default () => 
    <div>
        <h1>Welcome to TF-Quiz!</h1>
        <p>Select a <Link to = '/categories'>category</Link> and test your knowledge!</p>
        <img src="http://conaldi.edu.co/wp_ES/wordpress/wp-content/uploads/sites/15/2018/04/Quiz-Animation-Gif-Slower.gif" alt="Quiz Gif"></img>
    </div>