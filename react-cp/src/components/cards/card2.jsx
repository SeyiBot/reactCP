import Card from 'react-bootstrap/Card';
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import './card2.css'


function TextExample() {
    return (
        <Card >
        <Card.Body className='card2'>
            <Card.Title className='socials'>SOCIALS</Card.Title>
            <Card.Subtitle className="sub">Lets build together</Card.Subtitle>
            <Card.Text className='text'>
            <p> I can be reached on these platforms. </p>
            </Card.Text>
            <Card.Link className='icon' href="#"><i><BsFacebook /></i></Card.Link>
            <Card.Link className='icon' href="#"><i><BsGithub /></i></Card.Link>
            <Card.Link className='icon' href="#"><i>< BsLinkedin  /></i></Card.Link>
            <Card.Link className='icon' href="#"><i>< BsTwitterX /></i></Card.Link>
            
        </Card.Body>
        </Card>
    );
}

export default TextExample;