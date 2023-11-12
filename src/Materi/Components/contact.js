import  { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate ('../about');
    };

    return (
        <>
            <h3>This About</h3>

            <button onClick={handleClick}>Ke About</button>
        </>
    );
};

export default Contact;