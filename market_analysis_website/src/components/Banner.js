
import {useState, useEffect} from "react"
import {Container, Row, Col} from "react-bootstrap";
import logoImg from "../assets/img/classifier_logo.png"
import React from "react";

export const Banner = () => {   
    const [loopNum, setLoopNum] = useState(0) /*loopNum keeps track of index of current text in toRotate array*/
    const [isDeleting, setIsDeleting] = useState(false) 
    const toRotate = ["Enter your prompt..."];
    const [text, setText] = useState(''); 
    const [delta, setDelta] = useState(200 - Math.random() * 100); /*time interval between each letter being typed or deleted*/ 
    const period = 100; /*time interval  between each word being typed*/

    /**Set up timer to call tick function at intervals determined by delta */
    useEffect(() => {
        let ticker = setInterval(() => {
            tick(); 
            
        }, delta)

        /**Clear timer when component unmounts or text changes  */
        return () => {clearInterval(ticker)}

    }, [text]); 

 
    const tick = () => {
        let i = loopNum % toRotate.length; /**Calculates index i of current text in toRotate arr*/
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText); 

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2
            ); /**if deleting, reduce typing speed by half */
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true); 
            setDelta(period); 
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false); 
            setLoopNum(loopNum + 1);
            setDelta(500); 
        }
    
    }

    return (
        
        <section className = "banner" id = "home"> 
            <Container> 
                <Row className = "align-items-center">
                    <Col xs = {12} md = {12} xl = {12}>
                        <span className = "tagline">AMD Innovation Showcase 2024</span>
                        <p>Shathurshika Chandrakumar | Lucky Im</p>
                        <h1>{"Market Sentiment Analysis"}</h1>
                        {/* <h2><span className = "wrap">{text}</span></h2> */}
                        
                    </Col>
                    
                    
                    
                </Row>
        
            </Container>
        </section>
    )
}