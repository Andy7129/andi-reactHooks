import React from "react";
import styled from 'styled-components';
import Counter from '../Counter';

const Imageproduct = 'https://www.suzukicdn.com/uploads/news/Blog-27.webp';

const CardContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
`;

const Image = styled.img`
    width: 100%;
`;

const Heading = styled.h1`
    font-size: 18px;
`;

const Price = styled.p`
    color: grey;    
    font-size: 22px;
`;

const Description = styled.p`
    font-size: small;
`;

export default class Product extends React.Component {

    handleValue = (value) => {
        this.props.receiveValue (value);
    }

    render() {
        return (
            <div>
                <CardContainer>
                    <Image src={Imageproduct} className="App-Logo" alt="img" />
                    <Heading> Suzuki </Heading>
                    <Price>Rp. 20.000.000 </Price>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Description>
                    <Counter receiveValue={this.handleValue} /> 
                </CardContainer>
            </div>
        )
    }
}