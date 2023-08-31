import React, {useEffect, useRef} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    Easing,
} from 'react-native';

interface SlideItemProps {
    item: {
        img: any;
        title: string;
        description: string;
        price: string;
    };
}

const {width, height} = Dimensions.get('screen');

const SlideItem: React.FC<SlideItemProps> = ({item}) => {
    const translateYImage = useRef(new Animated.Value(40)).current;

    return (
        <View style={styles.container}>
            <Animated.Image
                source={item.img}
                resizeMode="contain"
                style={[
                    styles.image,
                    {
                        transform: [
                            {
                                translateY: translateYImage,
                            },
                        ],
                    },
                ]}
            />
        </View>
    );
};

export default SlideItem;

const styles = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: 'center',
    },
    image: {
        flex: 0.15,
        width: '100%',
        resizeMode: 'contain',
    },
    content: {
        flex: 0.85,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 18,
        marginVertical: 12,
        color: '#333',
    },
    price: {
        fontSize: 32,
        fontWeight: 'bold',
    },
});
