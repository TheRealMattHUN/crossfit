import {Group, Box, Image, Text} from "@mantine/core"
import Logo from "../../assets/38464.png"
import {Link, Outlet} from "react-router-dom";
import {Suspense} from "react";

function Layout() {
  return (
    <Suspense fallback="loading!!">
      <Box className="root">
        <Group className="navbar" align="center" gap="xl" justify="center" wrap="nowrap">
          <Text component={Link} to="/crossfit/">Kezdőlap</Text>
          <Text component={Link} to="/crossfit/about">Rólunk</Text>
          <Image src={Logo} h={80} w="auto"></Image>
          <Text component={Link} to="/crossfit/prices">Áraink</Text>
          <Text component={Link} to="/crossfit/contact">Elérhetőségeink</Text>
        </Group>
        <Outlet></Outlet>
      </Box>
    </Suspense>
  );
}

export default Layout