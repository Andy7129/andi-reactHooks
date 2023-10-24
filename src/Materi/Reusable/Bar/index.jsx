import {Component} from "react";
import styled from "styled-components";

const Nav = styled.div`
    width: 300px;
    background-color: lightblue;
    overflow : auto;
    margin : 0 auto;   
    `;

const Link = styled.a`
float: right;
padding: 12px;
color: white;
text-decoration: none;
font-size: 20px;
`;

        
        class Bar extends Component{
            render(){
                return(
                    <Nav>
                        <Link href="#">Jumlah yang akan di beli&nbsp;
                         {this.props.value}
                        </Link>
                    </Nav>
                )
            }
        }

        export default Bar;