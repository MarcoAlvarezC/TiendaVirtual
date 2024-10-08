import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { SiGodotengine } from "react-icons/si";
import { CartWidget } from '../CartWidget';

export const NavBar =() =>{
  const { colorMode, toggleColorMode } = useColorMode()
  return(
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          
          <Flex>
            <SiGodotengine size={"30"} />
            <Box>Ingeniería A La Medida</Box>
          </Flex>
            

          
          <Flex alignItems={'center'}>
          <CartWidget/>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://www.flaticon.com/free-icon/bionic-eye_9164364?term=engeneer+electronic&page=1&position=4&origin=search'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Supervisor Mantenimiento</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Equipos</MenuItem>
                  <MenuItem>Inventario</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}