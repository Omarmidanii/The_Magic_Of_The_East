import { Box, List, ListItem } from "@chakra-ui/react"
import MyColor from "../../constants"
import { Link } from "react-router-dom"

export const SettingList = () => {
 
  return (
    <List bgColor={MyColor} >
        <Link to={"/settings/language"}>
        <Box _hover={{bgColor:"red"}} p={2}>   
        <ListItem>
            Language
        </ListItem>
        </Box>
        </Link>
    </List>
  )
}