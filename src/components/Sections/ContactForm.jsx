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
    py={6}
    minH="70vh"
    bg={`url(${backgroundImage})`}
    bgRepeat="no-repeat"
    bgPos="center left"
  >
    <VStack spacing="15px" w={{ base: "full", md: "60%" }}>
      <Heading as="h1">Get in Touch</Heading>
      <Box
        as={Link}
        p={2}
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
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="Contact Form" />
        <Flex
          flexDir={{ base: "column", md: "row" }}
          flexWrap={{ base: "nowrap", md: "wrap" }}
          justify="space-between"
          align="center"
          p={{ base: 6, md: 0 }}
          borderRadius="lg"
          bg={{ base: "rgba(255, 255, 255, 0.9)", md: "transparent" }}
          shadow={{
            base: "3px 3px 6px 0px rgba(0, 0, 0, 0.15)",
            md: "none",
          }}
        >
          <FormControl id="full-name" my={3}>
            <FormLabel>Full Name</FormLabel>
            <Input
              borderColor="brand.500"
              placeholder="Full Name"
              name="full-name"
            />
          </FormControl>
          <FormControl id="email" my={3}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              borderColor="brand.500"
              placeholder="Email"
              name="email"
            />
          </FormControl>
          <FormControl id="message" my={3}>
            <FormLabel>Message</FormLabel>
            <Textarea
              borderColor="brand.500"
              placeholder="The message you want to send."
              name="message"
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
