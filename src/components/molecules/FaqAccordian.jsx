import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import plusIcon from '../../assets/Faq/Plus.svg'
import PlusGrey from '../../assets/Faq/Plus-grey.svg'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import { ThemeProvider} from "@emotion/react";
import { createTheme } from '@mui/material';
import faqData from "../../Data/AccordianData";

export default function FaqAccordion() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    console.log(newExpanded);
    setExpanded(newExpanded ? panel : false);
  };


  const theme = createTheme({
    typography: {
      "fontFamily": `"Poppins", sans-serif`,
      "fontSize": 12,
      "fontWeight": 400,
      body1:{
        color:"#687693"
      }
      
     }
  })
  return (
    <div>
    <ThemeProvider theme={theme}>
        {
            faqData.map((e)=><Accordion
            expanded={expanded === e.panel}
            onChange={handleChange(e.panel)}
            disableGutters={true}
            sx={{
              marginBottom: "0.5rem",
              backgroundColor: expanded === e.panel ? "white" : "#F2F2F2",
              border: expanded === e.panel ? "1px solid #84D187" : "none",
            }}
            elevation={0}
          >
            <AccordionSummary
              expandIcon={
                expanded === e.panel ? (
                 <img src={PlusGrey}/>
                ) : (
                    <img src={plusIcon}/>
                )
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                sx={{
                  color: expanded === e.panel ? "green" : "black",
                }}
              >
               {e.summary}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ borderTop: "1px solid #84D187" }} elevation={0}>
              <Typography>
                {e.summaryDetails}
              </Typography>
            </AccordionDetails>
          </Accordion>
         )
        }
         </ThemeProvider>
    

    </div>
  );
}
