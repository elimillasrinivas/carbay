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

const standardListData = [
  "Engine Oil Replaced",
  "Oil Filter Replaced",
  "Air Filter Cleaning",
  "Coolant - Top up",
  "Brake Oil - Top up",
  "Battery Water Top up",
  "Wiper Fluid Top Up",
  "Front Brake Pad Service",
  "Rear Brake Shoes Service",
  "Caliper Greasing",
  "AC Cooling Check-Up",
  "Heater/Spark Plugs-Check up",
  "Interior Vacuuming",
  "Water Washing",
  "Complete Electrical Check up",
  "All Labour Included",
];

const comprehensiveListData = [
  "Engine Oil Replaced",
  "Oil Filter Replaced",
  "Air Filter Replaced",
  "Wiper Fluid Replacement",
  "Coolant - Top up",
  "Brake Oil - Top up",
  "Gear Oil- Top up",
  "Battery Water-Top up",
  "Front Brake Pad Service",
  "Rear Brake Shoes Service",
  "Caliper Greasing",
  "AC Filter Cleaning",
  "Heater/Spark Plugs-Check up",
  "Suspension Lubrication",
  "AC Cooling Check up",
  "Fuel Filter Check up",
  "Complete Electrical Check up",
  "Tyre Rotation",
  "All Labour Included",
];

const faqs = [
  {
    question:
      "Which Engine oil do you use for Standard Service and Comprehensive Service?",
    answer:
      "We generally use Total engine oil with the grades 10W30 for mineral and 5W40/5W30 for synthetic. However, for specific needs, we do change oil brands as well. Automovill has a pan-India tie-up with all major oil brands.",
  },
  {
    question: "How much time does it take to get my General Service done?",
    answer:
      "Including pick up and drop, it takes 6 hours to get the general service of a car done. It also includes a high-quality car-wash with interior vacuuming and dashboard polishing.",
  },
  {
    question:
      "Any extra charges apart from the mentioned charges in the Services Page?",
    answer:
      "There is no change in the prices that are mentioned in the Services Page. The prices are GST-inclusive. For any additional work or cost that we may come across while inspecting your car, we shall notify you for your consent before proceeding with that work.",
  },
  {
    question: "Do I get any warranty for the Service that’s done?",
    answer:
      "You get 6 months or 5000 KMs (whichever is earlier) warranty for any part which is replaced.",
  },
  {
    question: "What if there are issues after servicing i.e. ‘post-service’?",
    answer:
      "Automovill attends to and solves any issue which is found ‘post-service’. You are eligible for a free inspection post-service-completion or if any issue is found ‘post-service’.",
  },
];

const General = () => {
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ borderBottom: "5px solid #1e0c60", width: "150px" }}></Box>
        <Typography variant="h5" sx={{ marginLeft: { lg: "5", sm: "2" } }}>
          <span className="first">Car Service</span>
          <span className="second"> in Hyderabad</span>
        </Typography>
        <Typography
          sx={{
            marginTop: "1",
            marginLeft: { lg: "5", sm: "2" },
            color: "#1e0c60",
            whiteSpace: "pre-line",
          }}
        >
          Now hassle-free and reliable car service in Bangalore right at your
          doorstep.
        </Typography>
        <Typography sx={{ color: "#1e0c60" }}>
          Carbay care for your car the way you do. And we provide the best car
          service with skilled technicians, auto-experts, and use automated
          tools and machinery.
        </Typography>
      </Box>

      <Card className="card">
        <CardContent>
          <Typography
            variant="h5"
            sx={{ color: "#1e0c60", fontWeight: "bolder" }}
          >
            Standard Service
          </Typography>

          <div className="list-container">
            <Grid container>
              {standardListData.map((service, index) => (
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
                src="https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/services/Standard_service.webp"
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
                <Button variant="contained" color="warning" size="large">
                  SELECT CAR
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="card">
        <CardContent>
          <Typography
            variant="h5"
            sx={{ color: "#1e0c60", fontWeight: "bolder" }}
          >
            Comprehensive Service
          </Typography>

          <div className="list-container">
            <Grid container>
              {comprehensiveListData.map((service, index) => (
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
                alt="Comprehensive Service"
                src="https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/services/Standard_service.webp"
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
                <Button variant="contained" color="warning" size="large">
                  SELECT CAR
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

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
            url="https://www.youtube.com/embed/748R1A46RwU?controls=1"
            width="70%"
            height="615px"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="video"
          />
        </Box>
      </div>

      <div>
        <Box sx={{ borderBottom: "5px solid #1e0c60", width: "150px" }}></Box>
        <Typography variant="h5" sx={{ marginLeft: { lg: "5", sm: "2" } }}>
          <span className="first">Benefit OF Car Service with</span>
          <span className="second"> Carbay</span>
        </Typography>

        <List className="list">
          <ListItem className="list-item">
            <Typography variant="h6" className="list-header">
              Convenience & Relief
            </Typography>
            <List className="list">
              <ListItem>
                <CheckIcon className="check-icon" />
                <ListItemText
                  primary="No need to step out. Car service right at your doorstep"
                  className="check-icon"
                />
              </ListItem>
              <ListItem>
                <CheckIcon className="check-icon" />
                <ListItemText
                  primary="Multiple easy online payment options"
                  className="check-icon"
                />
              </ListItem>
              <ListItem>
                <CheckIcon className="check-icon" />
                <ListItemText
                  primary="Quick Delivery as we understand your busy schedule and value of time"
                  className="check-icon"
                />
              </ListItem>
            </List>
          </ListItem>

          <ListItem className="list-item">
            <Typography variant="h6" className="list-header">
              Absolute Honesty
            </Typography>
            <List className="list">
              <ListItem>
                <CheckIcon className="check-icon" />
                <ListItemText
                  primary="With our open procedures and real-time information"
                  className="check-icon"
                />
              </ListItem>
              <ListItem>
                <CheckIcon className="check-icon" />
                <ListItemText
                  primary="Transparent pricing. So, no worries"
                  className="check-icon"
                />
              </ListItem>
              <ListItem>
                <CheckIcon className="check-icon" />
                <ListItemText
                  primary="Complete analysis and genuine spare parts"
                  className="check-icon"
                />
              </ListItem>
            </List>
          </ListItem>

          <ListItem className="list-item">
            <Typography variant="h6" className="list-header">
              Quality Control
            </Typography>
            <List className="list">
              <ListItem>
                <CheckIcon className="check-icon" />
                <ListItemText
                  primary="High-quality services with highly-trained technicians."
                  className="check-icon"
                />
              </ListItem>
              <ListItem>
                <CheckIcon className="check-icon" />

                <ListItemText
                  primary="Greatest auto servicing experience by using authentic spare parts"
                  className="check-icon"
                />
              </ListItem>
              <ListItem>
                <CheckIcon className="check-icon" />

                <ListItemText
                  primary="Latest and Automated Tools & Equipments"
                  className="check-icon"
                />
              </ListItem>
              <ListItem>
              <CheckIcon className="check-icon" />
                <ListItemText
                  primary="Best Engine Oil"
                  className="check-icon"
                />
              </ListItem>
              <ListItem>
                <CheckIcon className="check-icon" />

                <ListItemText
                  primary="Ensured Service Warranty"
                  className="check-icon"
                />
              </ListItem>
            </List>
          </ListItem>
        </List>
      </div>

      <div>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <div className="brand-line mb-1 mt-5 ms-lg-5 ms-sm-2"></div>
          <Typography variant="h2" className="ms-lg-5 ms-sm-2">
            <span className="first">Frequently Asked Questions</span>
            <span className="second"> (FAQs)</span>
          </Typography>
        </Box>
        <div id="accordionExample" className="accordion ms-lg-5 ms-sm-2">
          {faqs.map((faq, index) => (
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
  );
};

export default General;
