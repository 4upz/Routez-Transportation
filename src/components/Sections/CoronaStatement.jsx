import React from "react"
import {
  Box,
  Heading,
  Image,
  VStack,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react"
import illustration from "../../images/art/corona.svg"

const CoronaStatement = () => (
  <Box maxW={1200} mx="auto" my={6}>
    <Heading as="h1" textAlign="center">
      Statement to Customers and Partners Regarding COVID-19
    </Heading>
    <VStack spacing={6} my={6} p={6}>
      <Image src={illustration} mx="auto" my={6} w="50%" />
      <Text fontSize={18}>
        With the rapid spread of the new Coronavirus (COVID-19), our number one
        priority is the health and safety of our employees, partners, and
        riders. Our vans are 100 percent operational and we are prepared to
        ensure we can maintain a high service level while ensuring the health
        and safety of all that interact with our transport vehicles and staff.
      </Text>
      <Text fontSize={18}>
        We are closely monitoring the spread of COVID-19 and are following the
        recommendations of global and local public health authorities in all
        areas in which we operate. We will continue to provide updates as the
        situation develops.
      </Text>
      <Text fontSize={18}>
        An overview of the safety precautions we are implementing to protect
        employees, customers and partners and ensure business continuity can be
        found below.
      </Text>
    </VStack>
    <VStack spacing={6} my={6} p={6}>
      <Text fontSize={18} fontWeight="bold" w="100%">
        Customer, partner and employee health and safety
      </Text>
      <UnorderedList spacing={3} fontSize={18} listStylePos="inside">
        <ListItem>
          We are significantly boosting safety protocols within our transport
          vehicles including implementing critical sanitary measures and
          additional specialized training to prepare for a possible pandemic.
        </ListItem>
        <ListItem>
          We are increasing the communications with and screening of customers,
          partners and employees to ensure they have not traveled to at risk
          areas or been exposed to at risk areas.
        </ListItem>
        <ListItem>
          We are leveraging our capital to supply our staff and transportation
          vehicles with the best circumstances to enable our riders, partners
          and team members to work safely and remotely, if feasible, in a fully
          productive way.
        </ListItem>
      </UnorderedList>
    </VStack>
    <VStack spacing={6} my={6} p={6}>
      <Text fontSize={18} fontWeight="bold" w="100%">
        Business Continuity
      </Text>
      <UnorderedList spacing={3} fontSize={18} listStylePos="inside">
        <ListItem>
          All of our transport vehicles are equipped with the supplies to ensure
          they remain fully operational if crisis emerge.
        </ListItem>
        <ListItem>
          We regularly engage our partners to confirm their Pandemic Response
          plans and have reviewed their capacity to provide service continuity.
        </ListItem>
      </UnorderedList>
    </VStack>
  </Box>
)

export default CoronaStatement
