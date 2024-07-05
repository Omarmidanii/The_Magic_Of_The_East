import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  List,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Tab } from "./Layout/Tabs";
import { PiListBulletsLight } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import MyColor from "../constants";
import { useTranslation } from "react-i18next";
import useLanguage from "../stores/LanguageStore";
function Drawerr() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const { t } = useTranslation();
  const lng = useLanguage((s) => s.lng);
  return (
    <>
      <IconButton
        ref={btnRef}
        icon={<PiListBulletsLight />}
        onClick={onOpen}
        aria-label="Open Drawer"
      />
      <Drawer
        isOpen={isOpen}
        placement={lng == 'en' ? "left" : "right"}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bgColor={MyColor} color={"white"}>
            {t("The Magic Of The East")}
          </DrawerHeader>
          <DrawerBody bgColor={MyColor}>
            <Divider />
            <List color={"white"}>
              {Object.entries(Tab).map(([name, icon], index) => (
                <Box
                  key={index}
                  pb={3}
                  _last={{ borderBottom: "none" }}
                  _hover={{
                    bg: "gray.700",
                    ".icon-hover": {
                      transform: "scale(1.5)",
                      transition: "transform 0.3s ease-in-out",
                    },
                  }}
                >
                  <Link to={`/${name}`}>
                    <ListItem textAlign={lng == 'en' ? "left" : "right"} py={4}>
                      <Icon as={icon} mr={2} ml={2} className="icon-hover" />
                      <Button
                        fontSize={"large"}
                        variant={"link"}
                        color={"white"}
                      >
                        {t(name)}
                      </Button>
                    </ListItem>
                  </Link>
                </Box>
              ))}
              <Box
                pb={3}
                _hover={{
                  bg: "gray.700",
                  ".icon-hover": {
                    transform: "scale(1.5)",
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              >
                <ListItem textAlign={lng == 'en' ? "left" : "right"} py={4}>
                  <Icon as={MdLogout} mr={2} ml={2} className="icon-hover" />
                  <Button fontSize={"large"} variant={"link"} color={"white"}>
                    {t('Logout')}
                  </Button>
                </ListItem>
              </Box>
            </List>
          </DrawerBody>
          <DrawerFooter bgColor={MyColor} borderTopWidth="1px">
            <HStack >
              <IconButton
                icon={<FaWhatsapp />}
                bgColor={MyColor}
                aria-label="Open WhatsApp chat"
                onClick={() =>  window.open("https://wa.me/00963938625359", '_blank')}
              />
              <IconButton
                icon={<FaFacebook />}
                bgColor={MyColor}
                aria-label="Open Facebook Page"
                onClick={() =>  window.open("https://wa.me/00963938625359", '_blank')}
              />
              <IconButton
                icon={<FaInstagram />}
                bgColor={MyColor}
                aria-label="Open Instagram Page"
                onClick={() =>  window.open("https://wa.me/00963938625359", '_blank')}
              />
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Drawerr;
