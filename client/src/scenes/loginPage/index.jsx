import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const alt = theme.palette.background.alt;
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <div >
      <Box width="100%" backgroundColor={alt} p="1rem 6%" textAlign="center">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
        >
          MunPedia
        </Typography>
      </Box>
      <Box
      width={isNonMobileScreens ? "50%" : "93%"}
      p="2rem"
      m="2rem auto"
      borderRadius="1.5rem"
      backgroundColor={alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{mb:"1.5rem"}}>
            Welcome to MUNPedia, a networking platform for muners!
        </Typography>
        <Form />
      </Box>
    </div>
  );
};

export default LoginPage;
