import { View, Text, FlatList } from "react-native"
import { styles } from "./styles"
import { ComponentPageTitulo, ComponentPanelTitulo, ComponentLisImage } from "../../components"
import { IPage } from "../../../App"
import React from "react"
export function Pagina2({setPageI, pageNumber}:IPage){
    const img1 = require("../../assets/img1.png")
    const img2 = require("../../assets/img2.png")
    const pagina2Texto = [
        { id: '1', text: 'As melhores!', img: img1},
        { id: '2', text: 'Para curtir!', img: img2},
    ]
    return (
        <View style={styles.container}>
            <ComponentPageTitulo setPageI={setPageI} pageNumber={pageNumber} />
            <View style={styles.panel}>
                <ComponentPanelTitulo titulo="Crie uma capa e um título para a sua playlist"/>
                <FlatList
                    data= {pagina2Texto}
                    renderItem={({ item }) =>
                    <ComponentLisImage key={item.id} text={item.text} img={item.img} />
                }
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}