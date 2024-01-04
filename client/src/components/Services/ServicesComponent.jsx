import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  ListItem,
  ListItemText,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./services.css";
import Iframe from "react-iframe";
import CheckIcon from "@mui/icons-material/Check";

import right from "../../assets/icons/right.png";
import DialogBox from "./DialogBox";


function ServicesComponent({serviceData,setUserSelectedData}) {

  return (
    <div>
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ borderBottom: "5px solid #1e0c60", width: "150px" }}></Box>
      <Typography variant="h5" sx={{ marginLeft: { lg: "5", sm: "2" } }}>
        <span className="first">{serviceData.title.first}</span>
        <span className="second"> {serviceData.title.last}</span>
      </Typography>
      <Typography
        sx={{
          marginTop: "1",
          marginLeft: { lg: "5", sm: "2" },
          color: "#1e0c60",
          whiteSpace: "pre-line",
        }}
      >
        {serviceData.description.first}
      </Typography>
      <Typography sx={{ color: "#1e0c60" }}>
        {serviceData.description.last}
      </Typography>
    </Box>

   { 
   serviceData.services.map(service=> (<Card className="card">
      <CardContent>
        <Typography
          variant="h5"
          sx={{ color: "#1e0c60", fontWeight: "bolder" }}
        >
          {service.title}
        </Typography>

        <div className="list-container">
          <Grid container>
            {service.list.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ListItem>
                  <span style={{ marginRight: "10px" }}>
                    <img src={right} width={20} />
                  </span>
                  <ListItemText primary={service} />
                </ListItem>
              </Grid>
            ))}
          </Grid>
          <div>
            <img
              alt="Standard Service"
              src={service.url}
              style={{ width: "100%", marginTop: "1rem" }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <Typography variant="h3">999</Typography>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <DialogBox setUserSelectedData={setUserSelectedData}/>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>))
    }


    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          marginTop: "2rem",
        }}
      >
        <Typography variant="h2" sx={{ mb: 4, ms: { lg: 5, sm: 2 } }}>
          <span className="first">How Does it Work</span>
          <span className="second"> - Video</span>
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "left", mb: 2 }}>
        <Iframe
          url={serviceData.videoUrl}
          width="70%"
          height="615px"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="video"
        />
      </Box>
    </div>

    {serviceData.servicesDescription.map(data=><div key={data.title.first}>
      <Box sx={{ borderBottom: "5px solid #1e0c60", width: "150px" }}></Box>
      <Typography variant="h5" sx={{ marginLeft: { lg: "5", sm: "2" } }}>
        <span className="first">{data.title.first}</span>
        <span className="second"> {data.title.second}</span>
      </Typography>
      <Typography variant="h6" sx={{ marginLeft: { lg: "5", sm: "2" } }}>
        {data.description}
      </Typography>
      <List className="list">
       {data.subPoints.length>0 && data.subPoints.map(pointsData=><ListItem className="list-item" key={pointsData.title}>
          <Typography variant="h6" className="list-header">
            {pointsData.title}
          </Typography>
          <List className="list">
        
            {pointsData.points.map( (point,index)=><ListItem key={index}>
              <CheckIcon className="check-icon" />
              <ListItemText
                primary={point}
                className="check-icon"
              />
            </ListItem>)}
   
          </List>
        </ListItem>)}
        {
          data.points.map((point,index)=><ListItem key={index}>
          <CheckIcon className="check-icon" />
          <ListItemText
            primary={point}
            className="check-icon"
          />
        </ListItem>)  
        }
      </List>
    </div>)}

    <div>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <div className="brand-line mb-1 mt-5 ms-lg-5 ms-sm-2"></div>
        <Typography variant="h2" className="ms-lg-5 ms-sm-2">
          <span className="first">Frequently Asked Questions</span>
          <span className="second"> (FAQs)</span>
        </Typography>
      </Box>
      <div id="accordionExample" className="accordion ms-lg-5 ms-sm-2">
        {serviceData.faqs.map((faq, index) => (
          <Accordion key={index} className="auto-acc">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}a-content`}
              id={`panel${index + 1}a-header`}
            >
              <Typography variant="strong">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ServicesComponent