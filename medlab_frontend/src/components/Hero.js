import * as React from "react";
import {
  Box,
  Button,
  Container,
  InputLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { styled } from "@mui/material/styles";

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  outline: "1px solid",
  boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
  backgroundImage: `url(${"/static/images/templates/templates-images/hero-light.png"})`,
  outlineColor: "hsla(220, 25%, 80%, 0.5)",
  backgroundSize: "cover",
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
            }}
          >
            Test.&nbsp;Heal&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "inherit",
                color: "primary.main",
              }}
            >
              Thrive.
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Your Health, Our Commitment: Trusted Laboratory Services for
            Accurate Results
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              slotProps={{
                htmlInput: {
                  autoComplete: "off",
                  "aria-label": "Enter your email address",
                },
              }}
            />
            <Button variant="contained" color="primary">
              Start now
            </Button>
          </Stack>
          <Typography variant="caption" sx={{ textAlign: "center" }}>
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
        <StyledBox id="image" />
      </Container>
    </Box>
  );
}

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import InputLabel from '@mui/material/InputLabel';
// import Link from '@mui/material/Link';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';

// import { visuallyHidden } from '@mui/utils';
// import { styled } from '@mui/material/styles';

// const StyledBox = styled('div')(({ theme }) => ({
//   alignSelf: 'center',
//   width: '100%',
//   height: 400,
//   marginTop: theme.spacing(8),
//   borderRadius: theme.shape.borderRadius,
//   outline: '1px solid',
//   boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
//   backgroundImage: `url(${'/static/images/templates/templates-images/hero-light.png'})`,
//   outlineColor: 'hsla(220, 25%, 80%, 0.5)',
//   backgroundSize: 'cover',
//   [theme.breakpoints.up('sm')]: {
//     marginTop: theme.spacing(10),
//     height: 700,
//   },
//   ...theme.applyStyles('dark', {
//     boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
//     backgroundImage: `url(${'/static/images/templates/templates-images/hero-dark.png'})`,
//     outlineColor: 'hsla(210, 100%, 80%, 0.1)',
//   }),
// }));

// export default function Hero() {
//   return (
//     <Box
//       id="hero"
//       sx={(theme) => ({
//         width: '100%',
//         backgroundRepeat: 'no-repeat',
//         backgroundImage:
//           'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
//         ...theme.applyStyles('dark', {
//           backgroundImage:
//             'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
//         }),
//       })}
//     >
//       <Container
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           pt: { xs: 14, sm: 20 },
//           pb: { xs: 8, sm: 12 },
//         }}
//       >
//         <Stack
//           spacing={2}
//           useFlexGap
//           sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
//         >
//           <Typography
//             variant="h1"
//             sx={{
//               display: 'flex',
//               flexDirection: { xs: 'column', sm: 'row' },
//               alignItems: 'center',
//               fontSize: 'clamp(3rem, 10vw, 3.5rem)',
//             }}
//           >
//             Our&nbsp;latest&nbsp;
//             <Typography
//               component="span"
//               variant="h1"
//               sx={(theme) => ({
//                 fontSize: 'inherit',
//                 color: 'primary.main',
//                 ...theme.applyStyles('dark', {
//                   color: 'primary.light',
//                 }),
//               })}
//             >
//               products
//             </Typography>
//           </Typography>
//           <Typography
//             sx={{
//               textAlign: 'center',
//               color: 'text.secondary',
//               width: { sm: '100%', md: '80%' },
//             }}
//           >
//             Explore our cutting-edge dashboard, delivering high-quality solutions
//             tailored to your needs. Elevate your experience with top-tier features
//             and services.
//           </Typography>
//           <Stack
//             direction={{ xs: 'column', sm: 'row' }}
//             spacing={1}
//             useFlexGap
//             sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
//           >
//             <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
//               Email
//             </InputLabel>
//             <TextField
//               id="email-hero"
//               hiddenLabel
//               size="small"
//               variant="outlined"
//               aria-label="Enter your email address"
//               placeholder="Your email address"
//               slotProps={{
//                 htmlInput: {
//                   autoComplete: 'off',
//                   'aria-label': 'Enter your email address',
//                 },
//               }}
//             />
//             <Button variant="contained" color="primary">
//               Start now
//             </Button>
//           </Stack>
//           <Typography variant="caption" sx={{ textAlign: 'center' }}>
//             By clicking &quot;Start now&quot; you agree to our&nbsp;
//             <Link href="#" color="primary">
//               Terms & Conditions
//             </Link>
//             .
//           </Typography>
//         </Stack>
//         <StyledBox id="image" />
//       </Container>
//     </Box>
//   );
// }
