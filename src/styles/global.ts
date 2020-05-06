import { StyleSheet } from 'react-native'

const COLORS = {
    GREEN:'#28A745',
    ORANGE:'#FFBD4F',
    GRAY:"#505050",

    BORDER:"#201600",

    PL1:"#F7931E",
    PL1_second:"#FFB666",
    PL2:"#8B58BF",
    PL2_second:"#A284BD",
    PL3:"#5996D8",
    PL3_second:"#87B9D8",
    PL4:"#50CC79",
    PL4_second:"#6BCDA1"
}

export const GS = StyleSheet.create({
    border:{
        borderColor: COLORS.BORDER,
        borderWidth:2,
        borderRadius:4
    }
})