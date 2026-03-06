"use client";
import { Center, Box, VStack, Heading, Text, Button, Fieldset, Field, Input, } from "@chakra-ui/react";
import NextLink from "next/link"

export default function Login() {
  return (<Center minH="100vh"  >
    <Box w="full" maxW="sm" p={10} rounded="xl" shadow="sm" border="1px solid" borderColor="gray.200" >
      <VStack gap={8} align="stretch">
        <VStack gap={1} textAlign="center">
          <Heading size="lg" fontWeight="semibold"> Sign In </Heading>
          <Text fontSize="sm" color="gray.600"> Welcome back </Text>
        </VStack>
        <Fieldset.Root size="md" gap={5}>
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input placeholder="you@example.com" type="email" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Password</Field.Label>
            <Input placeholder="••••••••" type="password" />
          </Field.Root>
        </Fieldset.Root>
        <Button colorScheme="blue" size="md" w="full" rounded="md" fontWeight="medium" > Continue </Button>
      </VStack>
    </Box>
  </Center>



  );
} 
