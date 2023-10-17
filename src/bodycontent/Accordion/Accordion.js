import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys)

const custom = definePartsStyle({
  container:{
    border: "none",
    borderBottom: "2px solid gray"
  },
  button:{
    fontWeight: "bold",
    fontSize: "20px",
    margin: "4% auto",
    padding: "0",
    _hover:"none"
  },
  panel: {
    margin: "4% auto",
    padding: "0",
  },
  icon: {
    color: 'green.500',
    fontSize: "30px"

  },
})

export const accordionTheme = defineMultiStyleConfig({
  variants: { custom },
})