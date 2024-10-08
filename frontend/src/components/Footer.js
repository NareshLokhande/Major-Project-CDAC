import * as React from "react";
import {
  Container,
  Typography,
  IconButton,
  InputLabel,
  Link,
  Stack,
  TextField,
  Button,
  Box,
} from "@mui/material";

import { visuallyHidden } from "@mui/utils";

import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";

import MedLabIcon from "./MedLabIcon";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      <Link href="">MedLab&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <MedLabIcon />
            <Typography
              variant="body2"
              gutterBottom
              sx={{ fontWeight: 600, mt: 2 }}
            >
              Join the newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              Subscribe for weekly updates. No spams ever!
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <InputLabel htmlFor="email-newsletter" sx={visuallyHidden}>
                Email
              </InputLabel>
              <TextField
                id="email-newsletter"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                slotProps={{
                  htmlInput: {
                    autoComplete: "off",
                    "aria-label": "Enter your email address",
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ flexShrink: 0 }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: "medium" }}>
            Product
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            Features
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Testimonials
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Highlights
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Pricing
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: "medium" }}>
            Company
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            About us
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Careers
          </Link>
        </Box>

        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Link color="text.secondary" variant="body2" href="#">
            Privacy Policy
          </Link>
          <Typography sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: "left", color: "text.secondary" }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/Nareshlokhande"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://x.com/Nareshlokhande_"
            aria-label="X"
            sx={{ alignSelf: "center" }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/Nareshlokhande/"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}


// import * as React from "react";
// import {
//   Container,
//   Typography,
//   IconButton,
//   InputLabel,
//   Link,
//   Stack,
//   TextField,
//   Button,
//   Box,
// } from "@mui/material";

// import { visuallyHidden } from "@mui/utils";

// import FacebookIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from "@mui/icons-material/X";

// import { visuallyHidden } from "@mui/utils";
// import "./../assets/css/footer.css";
// import MedLabIcon from "./MedLabIcon";

// function Copyright() {
//   return (
//     <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
//       {"Copyright © "}
//       <Link href="">MedLab&nbsp;</Link>
//       {new Date().getFullYear()}
//     </Typography>
//   );
// }

// export default function Footer() {
//   return (
//     <Container className="footer-container">
//       <Box className="footer-top">
//         <Box className="footer-section">
//           <MedLabIcon className="medlab-icon" />
//           <Typography variant="body2" gutterBottom className="newsletter-title">
//             Join the newsletter
//           </Typography>
//           <Typography variant="body2" className="newsletter-description">
//             Subscribe for weekly updates. No spams ever!
//           </Typography>
//           <Stack direction="row" className="newsletter-form">
//             <InputLabel htmlFor="email-newsletter" sx={visuallyHidden}>
//               Email
//             </InputLabel>
//             <TextField
//               id="email-newsletter"
//               hiddenLabel
//               size="small"
//               variant="outlined"
//               fullWidth
//               aria-label="Enter your email address"
//               placeholder="Your email address"
//             />
//             <Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
//               Subscribe
//             </Button>
//           </Stack>
//         </Box>

//         <Box className="footer-links">
//           <Typography variant="body2" className="footer-links-title">
//             Product
//           </Typography>
//           <Link color="text.secondary" variant="body2" href="#">
//             Features
//           </Link>
//           <Link color="text.secondary" variant="body2" href="#">
//             Testimonials
//           </Link>
//           <Link color="text.secondary" variant="body2" href="#">
//             Highlights
//           </Link>
//           <Link color="text.secondary" variant="body2" href="#">
//             Pricing
//           </Link>
//           <Link color="text.secondary" variant="body2" href="#">
//             FAQs
//           </Link>
//         </Box>

//         <Box className="footer-links">
//           <Typography variant="body2" className="footer-links-title">
//             Company
//           </Typography>
//           <Link color="text.secondary" variant="body2" href="#">
//             About us
//           </Link>
//           <Link color="text.secondary" variant="body2" href="#">
//             Careers
//           </Link>
//         </Box>
//         <Box className="footer-links">
//           <Typography variant="body2" className="footer-links-title">
//             Legal
//           </Typography>
//           <Link color="text.secondary" variant="body2" href="#">
//             Terms
//           </Link>
//           <Link color="text.secondary" variant="body2" href="#">
//             Privacy
//           </Link>
//           <Link color="text.secondary" variant="body2" href="#">
//             Contact
//           </Link>
//         </Box>
//       </Box>

//       <Box className="footer-bottom">
//         <div>
//           <Link color="text.secondary" variant="body2" href="#">
//             Privacy Policy
//           </Link>
//           <Typography className="footer-bottom-links">&nbsp;•&nbsp;</Typography>
//           <Link color="text.secondary" variant="body2" href="#">
//             Terms of Service
//           </Link>
//           <Copyright />
//         </div>

//         <Stack direction="row" className="social-links">
//           <IconButton
//             color="inherit"
//             href="https://github.com/Nareshlokhande"
//             aria-label="GitHub"
//             sx={{ alignSelf: "center" }}
//           >
//             <FacebookIcon />
//           </IconButton>
//           <IconButton
//             color="inherit"
//             href="https://x.com/Nareshlokhande_"
//             aria-label="X"
//             sx={{ alignSelf: "center" }}
//           >
//             <TwitterIcon />
//           </IconButton>
//           <IconButton
//             color="inherit"
//             href="https://www.linkedin.com/in/Nareshlokhande/"
//             aria-label="LinkedIn"
//             sx={{ alignSelf: "center" }}
//           >
//             <LinkedInIcon />
//           </IconButton>
//         </Stack>
//       </Box>
//     </Container>
//   );
// }
