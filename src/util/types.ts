export type NftDataApiResponse = {
  data: {
    updated_at: Date;
    chain_id: number;
    chain_name: string;
    items: NftItem[];
  } | null;
  error: boolean;
  error_message: string | null;
  error_code: string | null;
};

export type NftItem = {
  contract_decimals: number;
  contract_name: string;
  contract_ticker_symbol: string;
  contract_address: string;
  supports_erc: string[];
  logo_url: string;
  type: 'nft'; // as the types are not clear, I am assuming all of them to be `nft` for now,
  nft_data: NftData[];
};

export type NftData = {
  token_id: string;
  token_balance: string;
  token_url: string;
  supports_erc: string[];
  token_price_wei: number | null;
  token_quote_rate_eth: number | null;
  original_owner: string;
  external_data: {
    name: string;
    description: string;
    image: string;
    image_256: string;
    image_512: string;
    image_1024: string;
    animation_url: string | null;
    external_url: string | null;
    attributes: string | null;
    owner: string | null;
  };
  owner: string;
  owner_address: string;
  burned: boolean;
};
