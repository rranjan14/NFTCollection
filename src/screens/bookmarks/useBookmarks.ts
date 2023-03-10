import {useContext, useEffect, useState} from 'react';
import {ApiContext} from '../../context/api';
import {NftData} from '../../util/types';

export const useBookmarks = (bookmarkedTokenIds: string[]) => {
  const {fetchNFTDetails} = useContext(ApiContext);
  const [bookmarkedNftData, setBookmarkedNftData] = useState<NftData[]>([]);

  const getNftDetails = async () => {
    const promises = [];
    let items: NftData[] = [];
    for (let i = 0; i < bookmarkedTokenIds.length; i++) {
      promises.push(fetchNFTDetails(bookmarkedTokenIds[i]));
    }
    const responses = await Promise.all(promises);
    for (const response of responses) {
      if (response.data) {
        for (const item of response.data.items) {
          if (item.nft_data) {
            items = items.concat(item.nft_data);
          }
        }
      }
    }
    setBookmarkedNftData(items);
  };

  useEffect(() => {
    getNftDetails();
  }, [bookmarkedTokenIds]);

  return {bookmarkedNftData};
};
