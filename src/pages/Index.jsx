import { Container, VStack, Heading, Text, Button, Box, Flex, Input, Textarea } from "@chakra-ui/react";
import { FaFileMedical, FaSave } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">Radiology Structured Report Platform</Heading>
        <Text fontSize="lg" textAlign="center">Streamline your radiology reports with ease and efficiency.</Text>
        
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg" boxShadow="lg">
          <Heading as="h2" size="lg" mb={4}>Create New Report</Heading>
          <VStack spacing={4}>
            <Input placeholder="Patient Name" size="md" />
            <Input placeholder="Patient ID" size="md" />
            <Input placeholder="Study Date" size="md" type="date" />
            <Textarea placeholder="Findings" size="md" />
            <Textarea placeholder="Impression" size="md" />
            <Flex width="100%" justifyContent="space-between">
              <Button leftIcon={<FaFileMedical />} colorScheme="teal" variant="solid">Generate Report</Button>
              <Button leftIcon={<FaSave />} colorScheme="blue" variant="outline">Save Draft</Button>
            </Flex>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;