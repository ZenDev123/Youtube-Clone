import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos, Navbar } from "./";
import { fetchFromAPI } from "../utils/fetchfromapi";

import "./css/index.css";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <>
      <Navbar />
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box>
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Box>

        <div className="videos">
          <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              mb={2}
              sx={{ color: "white" }}
            >
              {selectedCategory}{" "}
              <span style={{ color: "#FC1503" }}>videos</span>
            </Typography>
            <Videos videos={videos} />
          </Box>
        </div>
      </Stack>
    </>
  );
};

export default Feed;
