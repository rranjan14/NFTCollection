import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, View, ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {styles as importedStyles} from './style';

type NftListItemProps = {
  height: number;
  width: number;
  tokenId: string;
  ownerAddress: string;
  animationUrl: string | null;
  imageUrl: string | null;
  name: string;
  bookmarked: boolean;
  updateBookmark: (token_id: string) => void;
};

const NftListItem: React.FC<NftListItemProps> = React.memo(props => {
  const styles = importedStyles(props.height, props.width);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: props.imageUrl!}}
        style={{flex: 1, flexDirection: 'row', width: '100%'}}
        resizeMode="cover">
        <View style={styles.utilityContainer}>
          <View style={styles.detailsContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{props.name}</Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.ownerAddress}>({props.ownerAddress})</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.bookmarkButtonContainer}
            onPress={() => props.updateBookmark(props.tokenId)}>
            <Ionicons
              name={props.bookmarked ? 'bookmark' : 'bookmark-outline'}
              color={'white'}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
});

export default NftListItem;
