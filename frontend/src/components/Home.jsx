import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import SearchIcon from "@mui/icons-material/Search";
import RateReviewIcon from "@mui/icons-material/RateReview";
import backgroundImage from "../images/background.jpg";

const features = [
  {
    title: "Manage Vehicles",
    description:
      "Admin can create and delete vehicles within various categories of the Vehicle Rental System.",
    icon: <LibraryBooksIcon sx={{ fontSize: 40, color: "#0c174a" }} />,
  },
  {
    title: "User Account Management",
    description:
      "Admin can manage user accounts, roles, and monitor user activity.",
    icon: <ManageAccountsIcon sx={{ fontSize: 40, color: "#0c174a" }} />,
  },
  {
    title: "Grant/Revoke Access",
    description:
      "Admin can handle the granting and returning process of vehicles for users.",
    icon: <ImportContactsIcon sx={{ fontSize: 40, color: "#0c174a" }} />,
  },
  {
    title: "Search Vehicle List",
    description:
      "Users can easily search for vehicles available in the system.",
    icon: <SearchIcon sx={{ fontSize: 40, color: "#0c174a" }} />,
  },
  {
    title: "Request Vehicles",
    description:
      "Users can request access to vehicles and manage their requests.",
    icon: <ImportContactsIcon sx={{ fontSize: 40, color: "#0c174a" }} />,
  },
  {
    title: "Rate and Review Vehicles",
    description: "Users can rate and review vehicles they have rented.",
    icon: <RateReviewIcon sx={{ fontSize: 40, color: "#0c174a" }} />,
  },
];

const BackgroundSection = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  textAlign: "center",
  padding: "0 20px",
}));

const FeaturesSection = styled(Box)({
  padding: "40px 0",
  backgroundColor: "#f4f4f4",
});

const FeatureCard = styled(Card)({
  display: "flex",
  alignItems: "center",
  padding: "20px",
  textAlign: "left",
  borderRadius: "16px",
  backgroundColor: "#a6dcef",
  color: "#0c174a",
  cursor: "pointer",
  transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#0c174a",
    color: "#ffffff",
  },
});

const Home = () => {
  return (
    <div>
      <BackgroundSection>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            background: "linear-gradient(to right, #5868f5, #020a21)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            WebkitTextStroke: "1px white",
          }}
        >
          Welcome to Vehicle Rental System
        </Typography>
      </BackgroundSection>
      <FeaturesSection>
        <Container sx={{ marginBottom: 10 }}>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} key={index}>
                <FeatureCard>
                  <Avatar
                    sx={{ bgcolor: "#ffffff", mr: 2, width: 60, height: 60 }}
                  >
                    {feature.icon}
                  </Avatar>
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </FeaturesSection>
    </div>
  );
};

export default Home;
