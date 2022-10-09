import React from "react";
import { Box } from "@chakra-ui/react";
import Carousel from "react-gallery-carousel";
import 'react-gallery-carousel/dist/index.css';

interface IProps {
  photos: Array<string>;
  mt?: string;
  mb?: string;
}

const ImageCarousel = ({ photos, mt = '0px', mb = '0px' }: IProps) => {
  return (
    <Box
      // width={{ base: "full", md: "760px", lg: "900px" }}
      width='auto'
      height={{ base: "300px", md: "500px" }}
      margin="auto"
      mt={mt}
      mb={mb}
    >
      <Carousel
        images={photos.map((photo) => ({ src: photo }))}
        style={{ height: "100%", width: "100%" }}
        hasSizeButton={false}
        hasIndexBoard={false}
        hasMediaButton={false}
      />
    </Box>
  );
};

export default ImageCarousel;
