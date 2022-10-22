import Image from "next/image";
import Link from "next/link";
import { Grid, Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

interface IProps {
  type: string;
  title: string;
  description: string;
  buttonText: string;
  link: string;
  imgSrc: string;
}

const CtaComponent = ({
  imgSrc = "",
  type = "",
  title = "",
  description = "",
  buttonText = "",
  link = "",
}: IProps) => {
  return (
    <Grid
      bg="#f6f5f7"
      borderRadius="md"
      minH="400px"
      marginX={{ base: 2, md: 20 }}
      marginY='6'
      columnGap="8"
      gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
    >
      <Box pos="relative" borderTopLeftRadius="md" height={{base: '200px', md: 'auto'}}>
        <Image
          style={imageStyle}
          src={imgSrc}
          alt="cta image"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Flex alignItems="center">
        <Box p={{ base: "2", md: "0" }}>
          <Text fontSize="2xl" mb="5">
            {type || ""}
          </Text>
          <Heading as="h2" mb="5">
            {title || ""}
          </Heading>
          <Text mb="5" fontSize='lg'>{description || ""}</Text>
          <Button bg="#FF6884" color="white" _hover={{ bg: "#444" }}>
            <Link href={link || "/"}>{buttonText || ""}</Link>
          </Button>
        </Box>
      </Flex>
    </Grid>
  );
};

const imageStyle = {
  borderTopLeftRadius: "4px",
  borderBottomLeftRadius: "4px",
};

export default CtaComponent;
