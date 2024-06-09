import {BackgroundImage, Center, Image} from "@mantine/core";
import Gym from "../../../assets/Gym-structure-1080x675.png"
import Photo from "../../../assets/Bodybuilding-PNG-Photo-169695154.png"
function Intro() {

  return (
    <Center>
      <BackgroundImage src={Gym} w="75vw" h="auto" radius={"xl"}>
        <Image src={Photo} h="75vh" w={"auto"}></Image>
      </BackgroundImage>
    </Center>
  )
}
export default Intro