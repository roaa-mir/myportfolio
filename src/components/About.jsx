import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const About = () => {
  const aboutText = [
    "A Computer Science graduate and Master’s in Artificial Intelligence, I combine a strong academic foundation with practical full-stack development experience.",
    "I have solid expertise in web technologies including React.js, Laravel, and Firebase, and I am passionate about AI, consistently staying up-to-date with its latest advancements and applying innovative solutions to real-world challenges.",
    "Driven by continuous learning, I thrive in collaborative environments and am currently open to professional opportunities."
  ];

  const highlightClass = 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-800';

  const highlightSentence = (sentence) => {
    const phrases = [
      "Computer Science graduate",
      "Master’s in Artificial Intelligence",
      "full-stack development",
      "Firebase",
      "AI",
      "continuous learning",
      "collaborative environments",
      "open to professional opportunities"
    ];

    let highlighted = sentence;
    phrases.forEach((phrase) => {
      const regex = new RegExp(`(${phrase})`, "g");
      highlighted = highlighted.replace(
        regex,
        `<span class="${highlightClass}">$1</span>`
      );
    });

    return highlighted;
  };

  return (
    <Box className="flex items-center justify-center min-h-screen p-4 ">
      <Card
        sx={{
          width: "70%",
          height: "95vh",
          bgcolor: "#0f011eff",
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 4,
          boxShadow: "0 20px 50px rgba(0,0,0,0.7)"
        }}
      >
        {aboutText.map((sentence, index) => (
          <CardContent
            key={index}
            className="flex-1 flex items-center justify-center"
          >
            <Typography
              variant="h4"
              component="div"
              className="text-center text-white"
              sx={{
                width: "100%",
                lineHeight: 1.5,
                fontSize: { xs: '1.2rem', sm: '1.2rem', md: '1.5rem', lg: '1.8rem' }
              }}
              dangerouslySetInnerHTML={{ __html: highlightSentence(sentence) }}
            />
          </CardContent>
        ))}
      </Card>
    </Box>
  );
};

export default About;
