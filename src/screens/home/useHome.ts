import {useCallback, useContext, useEffect, useState} from 'react';
import {ApiContext} from '../../context/api';
import {BATCH_SIZE} from '../../util/constants';
import {NftData} from '../../util/types';

export const useHome = () => {
  const {fetchNFTDetails} = useContext(ApiContext);
  const [nftData, setNftData] = useState<NftData[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);

  const getNftDetails = useCallback(async () => {
    const promises = [];
    let items: NftData[] = [];
    for (
      let i = pageNumber * BATCH_SIZE + 1;
      i <= pageNumber * BATCH_SIZE + BATCH_SIZE;
      i++
    ) {
      promises.push(fetchNFTDetails(String(i)));
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
    setNftData(prev => [...prev, ...items]);
  }, [pageNumber]);

  const onPageChange = () => {
    if (pageNumber < BATCH_SIZE - 1) {
      // currently do not have knowledge of paging, so putting a hardcoded value currently
      setPageNumber(prev => prev + 1);
    }
  };

  useEffect(() => {
    getNftDetails();
  }, [pageNumber]);

  return {nftData, pageNumber, setPageNumber, onPageChange};
};
