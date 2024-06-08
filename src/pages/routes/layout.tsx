import {Group, Box, Button, Image} from "@mantine/core"
import Logo from "../../assets/38464.png"
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <Box className="root" h={"100vh"}>
      <Group className="navbar" align="center" gap="xl" justify="center" wrap="nowrap">
        <Button component="a" href="/">Kezdőlap</Button>
        <Button component="a" href="/about">Rólunk</Button>
        <Image src={Logo} h={80} w="auto"></Image>
        <Button component="a" href="/prices">Áraink</Button>
        <Button component="a" href="/contact">Elérhetőségeink</Button>
      </Group>
      <Outlet></Outlet>
    </Box>
  );
}

export default Layout