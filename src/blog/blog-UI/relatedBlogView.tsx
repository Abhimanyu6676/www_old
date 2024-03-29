import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Link } from 'gatsby'
import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import UNIVERSALS from '../../@universals'
import { TransformOnHover } from "../../components/common/webDivWrapper/TransformOnHover"
//@ts-ignore
import styles from "./relatedBlogView.module.scss"

interface Props {
    data: any
}
export default (props: Props) => {

    console.log("data length is -- " + props.data.length)



    return (
        <View>
            <Text style={[UNIVERSALS.STYLES.centerText, UNIVERSALS.STYLES.H1, { color: "#555" }]}>Ralated Topics</Text>
            <Text style={[
                UNIVERSALS.STYLES.centerText,
                UNIVERSALS.STYLES.H5, {
                    color: "#555",
                    fontWeight: "normal",
                    maxWidth: 450,
                    alignSelf: "center",
                    marginTop: 10
                }]}
            >Find more on Ralated & trending Topics on <a href={"/blog"}><Text style={[UNIVERSALS.STYLES.H5]}>HUElite Blog</Text></a></Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                    //backgroundColor: "red",
                    paddingVertical: 50
                }}
                contentContainerStyle={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-evenly",
                }}>
                {props.data.map((item, index) => {
                    console.log("()()()--" + JSON.stringify(item))
                    return (
                        <Link
                            to={(() => {
                                let link = "/"
                                switch (item.frontmatter.uuid) {
                                    case "linkAlexa":
                                        link = "/support/linkAlexa"
                                        break

                                    case "how_to_pair":
                                        link = "/support/how_to_pair"
                                        break

                                    case "how_to_install":
                                        link = "/support/how_to_install"
                                        break

                                    default:
                                        break
                                }
                                return link
                            })()}
                            key={"_" + index}>
                            <div className={styles.relativeBlogContainer}>
                                <div className={styles.relativeBlogImgContainer}>
                                    {item?.frontmatter?.main_img && <img style={{ width: '100%', height: "100%" }} src={require("../" + item.frontmatter.main_img)} />}
                                </div>
                                <View style={{ padding: 10 }}>
                                    <Text style={[UNIVERSALS.STYLES.H6, {}]}>{item.frontmatter.date}</Text>
                                    <Text style={[UNIVERSALS.STYLES.H4, { marginTop: 15, marginBottom: 8, }]}>{item.frontmatter.title}</Text>
                                    <Text style={[UNIVERSALS.STYLES.H5, { fontWeight: "normal" }]}>{item.excerpt}</Text>
                                </View>
                                <div style={{
                                    //backgroundColor: "red",
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    padding: "5px 10px",
                                    alignItems: "center"
                                }}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        <FontAwesome name="heart" size={18} color="#555" style={{ paddingHorizontal: 5 }} />
                                        <Text style={[UNIVERSALS.STYLES.H4, { fontWeight: "normal" }]}>0</Text>
                                        <Ionicons name="ios-share-alt" size={22} color="#555" style={{ paddingHorizontal: 5, paddingLeft: 10 }} />
                                    </div>
                                    <Text style={[UNIVERSALS.STYLES.H6, { fontWeight: "normal" }]}>{item.frontmatter.auther}</Text>

                                </div>
                            </div>
                        </Link>)
                })}
            </ScrollView>
        </View>
    )
}