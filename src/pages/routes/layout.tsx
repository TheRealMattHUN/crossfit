import {Group, Box, Image} from "@mantine/core"
import Logo from "../../assets/38464.png"
import {Link, Outlet} from "react-router-dom";

function Layout() {
  return (
    <Box className="root">
      <Group className="navbar" align="center" gap="xl" justify="center" wrap="nowrap">
        <Link to="/crossfit/">Kezdőlap</Link>
        <Link to="/crossfit/about">Rólunk</Link>
        <Image src={Logo} h={80} w="auto"></Image>
        <Link to="/crossfit/prices">Áraink</Link>
        <Link to="/crossfit/contact">Elérhetőségeink</Link>
      </Group>
      <Outlet></Outlet>
    </Box>
  );
}

export default Layout