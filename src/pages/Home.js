import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';



import { TourCard } from "../components/TourCard";
import cities from "../data.json";


export const Home = () => {
    return (
    <div>
      
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              matginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour, index) => (
                  <TourCard tour={tour} key={index}/>
                ))}
            </Grid>
          </>
          
        ))

        }
      </Container>
      
    </div>
    )
}