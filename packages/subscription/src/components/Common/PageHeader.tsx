import React from 'react';
import { Box, Typography } from "@mui/material";

const PageHeader = (props: { title: string; breadcrumbs: Array<string> }) => {
  const { title, breadcrumbs } = props;

  return (
    <Box
      sx={{
        zIndex: 0,
        border: "0 solid red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "180px",
        backgroundImage: "url(/assets/images/breadcrumb_bg.png)",
        backgroundPosition: "-20%",
        backgroundSize: "100% 100%",
      }}
    >
      <Box>
        <Typography
          component="h1"
          sx={{
            mb: "12px",
            textAlign: "center",
            fontSize: "30px",
            fontFamily: "NotoSansKRBold",
            color: "#fff",
            letterSpacing: "-0.75px",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            width: "fit-content",
            display: "block",
            margin: "0 auto",
            backgroundColor: "rgb(0,0,0,0.4)",
            px: "15px",
            borderRadius: "30px",
          }}
        >
          {breadcrumbs &&
            breadcrumbs.map((breadcrumb, index) => (
              <>
                {index > 0 && index < breadcrumb.length - 1 && (
                  <Box
                    component="span"
                    sx={{
                      display: "inline-block",
                      width: "3px",
                      height: "3px",
                      mx: "8px",
                      my: "4px",
                      backgroundColor: "#C5D6DD",
                    }}
                  ></Box>
                )}
                <Box
                  component="span"
                  sx={{
                    zIndex: 1,
                    display: "inline-block",
                    color: "#fff",
                    fontSize: "13px",
                    lineHeight: index === 0 ? "30px" : "28px",
                  }}
                >
                  {breadcrumb}
                </Box>
              </>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PageHeader;
