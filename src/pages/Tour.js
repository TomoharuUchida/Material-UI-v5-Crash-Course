import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';


import { ImageCollage } from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordian";
import BasicModal from "../components/Modal"

export const Tour = () => {
    return (
        <Container sx={{ width: 900 }}>
            <Typography variant="h3" component="h1" marginTop={3}>
                Explore the World in Vegas
            </Typography>
            <Box marginTop={3} sx={{display: "flex"}}>
                <img src="https://media.timeout.com/images/105124791/750/422/image.jpg" height={325} />
                <ImageCollage/>
            </Box>
            <Box>
                <Typography variant="h6" component="h4" marginTop={3}>
                    about this tiket
                </Typography>
                <Typography variant="paragraph" component="p" marginTop={3}>
                    Lorem ipsum dolor sit amet. Quo quos sint aut dolorum fugiat et galisum temporibus et enim iusto et reprehenderit Quis et rerum autem. Ut galisum itaque in similique consequatur sit tenetur laboriosam quo officiis nesciunt aut numquam dolorum.
                </Typography>
            </Box>
            <Box marginBottom={10}>
                <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                    Frequently Asked Questions
                </Typography>
                <CustomizedAccordions/>
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation>
                    <BasicModal/>
                </BottomNavigation>
            </Paper>

        </Container>
    );
};