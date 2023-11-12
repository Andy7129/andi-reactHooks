import  { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate ('../home');
    };

    return (
        <>
            <h3>This About</h3>

            <button onClick={handleClick}>Ke Home</button>
        </>
    );
};

export default About;