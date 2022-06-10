import React from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { BANDS } from '../static/Bands';
const { width, height } = Dimensions.get('screen');
export const HistorySwiper: React.FC = () => {
    return (
        <View style={styles.container}>
            <SwiperFlatList
                data={BANDS}
                keyExtractor={item => item.key}
                autoplay
                autoplayDelay={2}
                autoplayLoop
                renderItem={({ item }) => (
                    <View style={{ width: width / 2, alignItems: 'center', padding: 20, marginRight: 20 }}>
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
                    </View>
                )}
            />
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
export default HistorySwiper;
