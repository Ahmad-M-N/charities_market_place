import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../App.css';
import health from '../Images/health.png';
import animal from '../Images/animal.jpg';
import education from '../Images/education.jpg';
import humanServices from '../Images/hands.png';

function Categories(){

    const catCard=(catName, catDes, catImg)=>{

        return (
            <div className='catCard' style={{margin:15, width:'80%'}}>
                <Card sx={{ maxWidth: 300}}>
                <CardActionArea href={"http://localhost:3000/charities/"+catName}>
                    <CardMedia
                    component="img"
                    height="200"
                    image={catImg}
                    alt="Category Image"
                    />
                    <CardContent sx={{height: 140}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {catName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {catDes}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </div>
          );   

    }

    return(
        <>
        <h1 id="Cat-Heading">Choose Category</h1> 
        <div className='Categories' style={{height:240, width:'100%'}}>
            {catCard("Health","See our database of charities that deal with health",health)}
            {catCard("Animal","See our database of charities that deal with animal welfare",animal)}
            {catCard("Human Services","See our database of charities that deal with human services",humanServices)}
            {catCard("Education","See our database of charities that deal with education",education)}
        </div>
        </>
    );

}

export default Categories;