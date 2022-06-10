import React, { useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    Animated,
    StatusBar,

} from 'react-native';
import { BANDS } from '../static/Bands';
const { width, height } = Dimensions.get('screen');
const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', "black", '#B98EFF'];


const Indicator = ({ scrollX }: any) => {
    return (
        <View style={{ position: 'absolute', bottom: 100, flexDirection: 'row' }}>
            {BANDS.map((_, index) => {
                const inputRange = [(index - 1 * width), index * width, (index + 1) * width];
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.8, 1.4, 0.8],
                    extrapolate: 'clamp'
                })
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.6, 0.9, 0.6],
                    extrapolate: 'clamp'
                })
                return (
                    <Animated.View
                        key={`indicator_${index}`}
                        style={{
                            height: 10,
                            width: 10,
                            borderRadius: 5,
                            backgroundColor: '#fff',
                            margin: 10,
                            opacity,
                            transform: [{
                                scale,
                            }]
                        }}

                    />
                );
            })}
        </View>
    );
};
const Backdrop = ({ scrollX }: any) => {
    const backgroundColor = scrollX.interpolate({
        inputRange: bgs.map((_, index) => index * width),
        outputRange: bgs.map((bg) => bg)
    })
    return < Animated.View style={
        [StyleSheet.absoluteFillObject, {
            backgroundColor: backgroundColor
        }]} />
}

const Square = ({ scrollX }: any) => {
    const YOLO = Animated.modulo(Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)), 1);
    const rotate = YOLO.interpolate({
        inputRange: [0, .5, 1],
        outputRange: ["35deg", '0deg', '35deg']
    })
    const translateX = YOLO.interpolate({
        inputRange: [0, .5, 1],
        outputRange: [0, -height, 0]
    })
    return < Animated.View style={{
        width: height,
        height,
        left: -height * 0.3,
        top: -height * 0.8,
        backgroundColor: "#fff",
        borderRadius: 86,
        position: "absolute",
        transform: [{
            rotate
        }, {
            translateX
        }]
    }} />
}
export const History: React.FC = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Backdrop scrollX={scrollX} />
            <Square scrollX={scrollX} />
            <Animated.FlatList
                data={BANDS}
                keyExtractor={item => item.key}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
                scrollEventThrottle={32}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false },
                )}
                pagingEnabled
                renderItem={({ item }) => (
                    <View style={{ width, alignItems: 'center', padding: 20 }}>
                        <View style={{ flex: 0.7, justifyContent: 'center' }}>
                            <Image
                                source={{ uri: item.image }}
                                style={{
                                    width: width / 2,
                                    height: height / 2,
                                    resizeMode: 'contain',
                                }}
                            />
                        </View>
                        <View style={{ flex: 0.4 }}>
                            <Text style={{ color: "#fff", fontWeight: '800', fontSize: 28, marginBottom: 10 }}>
                                {item.title}
                            </Text>
                            <Text style={{ color: "#fff", fontWeight: '300' }}>{item.description}</Text>
                        </View>
                    </View>
                )}
            />
            <Indicator scrollX={scrollX} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default History;
