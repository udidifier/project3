import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import React, { useState } from 'react';

function GameCard({ name, company, description, categories, coverURL }) {
  const Categories = (cat) => {
    return (<Badge
      px={2}
      py={1}
      bg={useColorModeValue('gray.50', 'gray.800')}
      fontWeight={'400'}>
      {cat.category_str}
    </Badge>)
  }
  return (
    <Center py={0}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '75%', md: '540px' }}
        height={{ sm: '476px', md: '22rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={0}>
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={coverURL}
    
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            {company}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            {description}
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Categories />
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Wish List
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Favorites
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}

export default GameCard;