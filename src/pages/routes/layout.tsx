import {Group, Box, Button, Image} from "@mantine/core"
import Logo from "../../assets/38464.png"
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <Box className="root">
      <Group className="navbar" align="center" gap="xl" justify="center" wrap="nowrap">
        <Button component="a" href="/crossfit/">Kezdőlap</Button>
        <Button component="a" href="/crossfit/about">Rólunk</Button>
        <Image src={Logo} h={80} w="auto"></Image>
        <Button component="a" href="/crossfit/prices">Áraink</Button>
        <Button component="a" href="/crossfit/contact">Elérhetőségeink</Button>
      </Group>
      <Outlet></Outlet>
    </Box>
  );
}

export default Layout