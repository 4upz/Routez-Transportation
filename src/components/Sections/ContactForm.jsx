import React from "react"
import {
  Flex,
  Box,
  Link,
  Heading,
  Text,
  VStack,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Button,
} from "@chakra-ui/react"
import backgroundImage from "../../images/art/contact.svg"

const ContactForm = ({ businessNumber }) => (
  <Flex
    justify="flex-end"
    maxW="1200px"
    mx="auto"
    my={6}
    px={6}
    pb={6}
    minH="60vh"
    bg={`url(${backgroundImage})`}
    bgRepeat="no-repeat"
    bgPos="center left"
  >
    <VStack spacing="15px" w={{ base: "full", md: "60%" }}>
      <Heading as="h1">Get in Touch</Heading>
      <Box
        as={Link}
        p={1}
        bg="brand.300"
        borderWidth={1}
        borderColor="black"
        borderRadius="lg"
        href={`tel:${businessNumber}`}
      >
        Call for a ride at: {businessNumber}
      </Box>
      <Text textAlign={{ base: "center", md: "left" }}>
        Contact Routez Transportation, where our passengers and family are one
        and the same.
      </Text>
      <Box
        as="form"
        w={{ base: "100%", md: "unset" }}
        textAlign={{ base: "center", md: "left" }}
        name="Contact Form"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="Contact Form" value="Contact Form" />
        <Flex
          flexDir={{ base: "column", md: "row" }}
          flexWrap={{ base: "nowrap", md: "wrap" }}
          justify="space-between"
          align="center"
          p={{ base: 6, md: 0 }}
          borderRadius="lg"
          bg={{ base: "rgba(255, 213, 34, 0.4)", md: "transparent" }}
        >
          <FormControl
            id="first-name"
            w={{ base: "full", md: "45%" }}
            my={3}
            isRequired
          >
            <FormLabel>First Name</FormLabel>
            <Input
              borderColor="brand.500"
              placeholder="First Name"
              name="First Name"
            />
          </FormControl>
          <FormControl
            id="last-name"
            w={{ base: "full", md: "45%" }}
            my={3}
            isRequired
          >
            <FormLabel>Last Name</FormLabel>
            <Input
              borderColor="brand.500"
              placeholder="Last Name"
              name="Last Name"
            />
          </FormControl>
          <FormControl id="email" my={3} isRequired>
            <FormLabel>Email</FormLabel>
            <Input borderColor="brand.500" placeholder="Email" name="Email" />
          </FormControl>
          <FormControl id="message" my={3} isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              borderColor="brand.500"
              placeholder="The message you want to send"
              name="Message"
            />
          </FormControl>
          <Button
            backgroundColor="black"
            color="white"
            className="secondary-button"
            size="lg"
            mx="auto"
            type="submit"
          >
            Submit
          </Button>
        </Flex>
      </Box>
    </VStack>
  </Flex>
)

export default ContactForm
