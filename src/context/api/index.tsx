import {createContext} from 'react';
import {BASE_URL, KEY, NFT_CONTRACT} from '../../util/constants';
import {NftDataApiResponse} from '../../util/types';

export interface IApiService {
  fetchNFTDetails(tokenId: string): Promise<NftDataApiResponse>;
}

export class ApiService implements IApiService {
  async fetchNFTDetails(tokenId: string): Promise<NftDataApiResponse> {
    const res = await fetch(
      `${BASE_URL}/${NFT_CONTRACT}/nft_metadata/${tokenId}/?key=${KEY}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const json = await res.json();
    return json as NftDataApiResponse;
  }
}

export const standardApiClient = new ApiService();
export const ApiContext = createContext<IApiService>(null as never);
