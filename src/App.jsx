import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AnimatedBackground from './components/AnimatedBackground'
import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import { Box } from "@mui/material";
import { styled, keyframes } from "@mui/system";



  // --- Keyframes ---
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const reverseSpin = keyframes`
  0% { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
`;

// --- Double Spinner Loader ---
const DoubleSpinner = styled(Box)({
  width: 60,
  height: 60,
  border: "4px solid transparent",
  borderRadius: "50%",
  borderTopColor: "#7c3aed", // Outer ring color
  position: "relative",
  animation: `${spin} 1.5s linear infinite`,
  "&::after": {
    content: '""',
    position: "absolute",
    top: "10px",
    left: "10px",
    width: "40px",
    height: "40px",
    border: "4px solid transparent",
    borderRadius: "50%",
    borderBottomColor: "#c4b5fd", // Inner ring color
    animation: `${reverseSpin} 1.5s linear infinite`,
  },
});

// --- App Component with Loader ---
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          bgcolor: "#0f011eff",
        }}
      >
        <DoubleSpinner />
      </Box>
    );
  }

  return (
    <div className="min-h-screen relative">
      
      <AnimatedBackground />

      
      <div className="relative z-10">
        <Navbar />
        <div id="home">
          <Home />
        </div>
  
        <div id="about">
          <About />
        </div>

        <div id="contact">
          <Contact />
        </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
    </div>
  );
}

export default App
