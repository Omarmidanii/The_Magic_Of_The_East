import {
    HStack,
    IconButton,
    Image,
    useBreakpointValue,
} from "@chakra-ui/react";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import profile from "../../assets/Profile.jfif";
import logo from "../../assets/logo.png";
import MyColor from "../../constants";
import Drawerr from "../Drawer";
import { SearchInput } from "../SearchInput";
import { Tabs } from "./Tabs";

export const NavBar = () => {
  const showTabs = useBreakpointValue({ base: false, lg: true });

  return (
    <HStack justifyContent="space-between" p={2} bgColor={MyColor}>
      <Link to="/Home">
        <Image src={logo} boxSize={{ lg: "100px", base: "60px" }} />
      </Link>
      {!showTabs && <Drawerr />}
      {showTabs && <Tabs />}
      <SearchInput />
      <Link to="/settings">
        <IconButton
          aria-label=""
          icon={<IoMdSettings size="30px" color="white" />}
          bgColor={MyColor}
          _hover={{ bg: "gray.700" }}
        />
      </Link>
      <Link to="/profile">
        <Image
          src={profile}
          borderRadius="50%"
          boxSize={{ lg: "80px", base: "40px" }}
        />
      </Link>
    </HStack>
  );
};
