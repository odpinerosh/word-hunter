import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import './Footer.css';



const Footer = () => {


    return (
        <div className="footer">
            <hr />
            <Typography variant="body1" gutterBottom>
                Hecho por <Link href="https://github.com/odpinerosh/" 
                            color="inherit" target="_blank" rel="noopener">
                            <span className="made-by">odpinerosh</span>
                        </Link>
                <p className="credits">Créditos: RoadSide Coder</p>
            </Typography>
        </div>
    )
};



export default Footer;