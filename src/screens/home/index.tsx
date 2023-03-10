import React, { useCallback, useContext } from 'react';
import { FlatList, useWindowDimensions, View } from 'react-native';
import NftListItem from '../../components/NftListItem';
import { BookmarkContext } from '../../context/bookmarks';

import { NftData } from '../../util/types';

import { styles as importedStyles } from './style';
import { useHome } from './useHome';

const Home = () => {
  const { nftData, onPageChange } = useHome();
  const { bookmarkedTokenIds, removeBookmark, addBookmark } =
    useContext(BookmarkContext);
  const { height, width } = useWindowDimensions();
  const style = importedStyles(height, width);

  const updateBookmark = async (token_id: string) => {
    if (bookmarkedTokenIds.includes(token_id)) {
      await removeBookmark(token_id);
    } else {
      await addBookmark(token_id);
    }
  };

  const renderItem = useCallback(({ item }: { item: NftData }) => (
    <NftListItem
      animationUrl={item.external_data.animation_url}
      bookmarked={bookmarkedTokenIds.includes(item.token_id)}
      height={height}
      imageUrl={item.external_data.image}
      name={item.external_data.name}
      ownerAddress={item.owner_address}
      tokenId={item.token_id}
      updateBookmark={updateBookmark}
      width={width}
    />
  ), [bookmarkedTokenIds]);

  //render
  return (
    <View style={style.parent}>
      <FlatList
        style={{ width: '100%' }}
        data={nftData}
        renderItem={renderItem}
        onEndReached={onPageChange}
        keyExtractor={item => item.token_id}
        removeClippedSubviews={true}
        onEndReachedThreshold={0.6}
      />
    </View>
  );
};

export default Home;
