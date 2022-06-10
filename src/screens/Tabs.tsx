import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { BANDS } from '../static/Bands';
const { width, height } = Dimensions.get('screen')
const TabContent: React.FC<{ title: string; uri: string, description: string }> = ({
    description,
    uri,
    title
}) => {
    return <View style={{ alignItems: "flex-start", flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', marginBottom: 20 }}>
            <Image
                source={{ uri }}
                style={{
                    width: width / 2.4,
                    height: height / 2.4,
                    resizeMode: 'contain',
                }}
            />
        </View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
        <Text style={{ fontSize: 14, fontWeight: "500" }}>{description}</Text>
    </View >

}

const Tabs: React.FC = () => {
    const thumbRef = useRef<any>();
    const [brandById, setBrandById] = useState<{ [x: number]: any }>({});
    const [selected, setSelected] = useState(0)
    useEffect(() => {
        setBrandById(BANDS.reduce((acc, next, index) => ({ ...acc, [index]: next }), {}))
    }, [])

    const content = useMemo(() => {
        return brandById[selected]
    }, [selected, brandById])


    const scrollToActiveIndex = (index: number) => {
        if (index * (140 + 10) - 140 / 2 > width / 2) {
            thumbRef?.current?.scrollToOffset({
                offset: index * (140 + 10) - width / 2 + 10 / 2,
                animated: true
            })
        } else {
            thumbRef?.current?.scrollToOffset({
                offset: 0,
                animated: true
            })
        }
    }
    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={{
                    padding: 10
                }}
                style={{
                    marginBottom: 20,
                    height: 50
                }}
                keyExtractor={(item) => item.key}
                ref={thumbRef}
                showsHorizontalScrollIndicator={false} horizontal={true} data={BANDS} renderItem={({ item, index }) => {
                    return <Pressable onPress={() => {
                        setSelected(index);
                        scrollToActiveIndex(index)
                    }}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>

                            <Text
                                style={[
                                    styles.title,
                                    selected == index && { color: "#41423f" },
                                ]}>
                                {item.title}
                            </Text>
                            {selected == index && <View style={styles.line} />}
                        </View>
                    </Pressable>
                }} />
            <TabContent description={content?.description} title={content?.title} uri={content?.image} key={content?.key} />

        </View >
    )
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20
    },
    line: {
        width: 140,
        height: 2,
        backgroundColor: "#41423f",
        alignSelf: "center",
        marginTop: 3
    },

    title: {
        fontSize: 18,
        fontWeight: "800",
        color: "#000",
        width: 140,
        justifyContent: "center"
    }
})
export default Tabs