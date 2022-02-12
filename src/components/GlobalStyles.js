import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html{
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: black;
    }
    
}
body{
font-family: 'Ubuntu', sans-serif;
}
h2{
    font-size: 3rem;
    color:darkblue;
    font-family: 'Montserrat', sans-serif;
}
h3{
    font-size:1.1rem;
    font-family: 'Poppins', sans-serif;
    color: #362c6e;
    padding:0.6rem 0;

}
p{
    font-size:1rem;
    line-height:200%;
    padding:0.2rem 0;
    color: grey;
}
a{
    text-decoration:none;
    color:#362c6e;
}

@media screen and (max-width:500px) {
    font-size: 12px;
}
`;
export default GlobalStyles