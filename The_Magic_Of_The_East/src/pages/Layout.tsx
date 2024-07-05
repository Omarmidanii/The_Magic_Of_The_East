import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/Layout/NavBar";


export const Layout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav"
               "main"`,
      }}
      templateRows={{ lg: 'auto 1fr' }}
      templateColumns={{ lg: 'auto 1fr' }} 
    >
      <GridItem
        area={"nav"}
      >
        <NavBar />
      </GridItem>
     
      <GridItem  area={"main"} >
        <Outlet />
      </GridItem>
    </Grid>
  );
};
