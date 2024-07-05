import {
    Box,
    Button,
    HStack,
    Icon
} from "@chakra-ui/react";
import { FaBoxOpen, FaChartLine, FaHome, FaUsers } from "react-icons/fa";
import { GiExpense } from "react-icons/gi";
import { IconType } from "react-icons/lib";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import MyColor from "../../constants";
import { useTranslation } from "react-i18next";

export  const Tab: Record<string, IconType> = {
    Home: FaHome,
    Users: FaUsers,
    Customers: RiCustomerService2Fill,
    Products: FaBoxOpen,
    Expenses: GiExpense,
    Reports: FaChartLine,
  };
export const Tabs = () => {
  const { t } = useTranslation();
  return (
    <HStack   color={"white"}>
      {Object.entries(Tab).map(([name, icon], index) => (
        <Box
          key={index}
          borderBottom={20}
          borderColor="gray.200"
          p={3}
          m={1}
          _last={{ borderBottom: "none" }}
          _hover={{
            bg: MyColor,
            ".icon-hover": {
              transform: "scale(1.5)",
              transition: "transform 0.3s ease-in-out",
            },
          }}
        >
          <Link to={`/${name}`}>
            <Icon as={icon} mr={2}  className="icon-hover" />
            <Button fontSize={"large"} variant={"link"} color={"white"}>
              {t(name)}
            </Button>
          </Link>
        </Box>
      ))}
    </HStack>
  );
};