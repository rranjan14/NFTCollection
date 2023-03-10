Question Id - 1:

**Description:**

The challenge is to build a mobile that displays and showcases the Rocstart of EPNS V2 NFT collections. Read more about the Rockstar NFTs [HERE](https://opensea.io/collection/rockstars-of-epns-v2).

This NFT collection includes around 100 different items(NFTs). A specific individual item in the collection looks like [this](https://opensea.io/assets/ethereum/0xa2b885e7065ea59a3251489715ca80de5ff642f8/1).

<img width="585" alt="ScreenShot 2023-03-10 at 15 56 00" src="https://user-images.githubusercontent.com/47914095/224292562-7b7d8b9d-f002-4f34-b80e-98caa4a7b57e.png">

**What do you need to DO?**

In a nutshell, your task is to initiate an API call to fetch these data. The Token IDs that represent each NFT can range from 1 to 100.

The imperative details required to fetch these data are given below:

```
# In case you face issues with this key, you can always get a new one
# here -> https://www.covalenthq.com/
KEY="ckey_0681175326d4475896c44abb894"

# The contract details shall remain constant
NFT_CONTRACT="0xa2b885e7065ea59a3251489715ca80de5ff642f8"
BASE_URL="https://api.covalenthq.com/v1/1/tokens"

# Token ID Ranges from 1 to 100
TOKEN_ID="1"

# Example api call
curl "$BASE_URL/$NFT_CONTRACT/nft_metadata/$TOKEN_ID/?key=$KEY"
```

**Intended Behavior of the Mobile App:**
- Display the NFT collection as a list with at least the following attributes:
  - Name of that NFT token
  - Owner address of that specific NFT
- The image or animation associated with the NFT
- User should be able to bookmark the NFT token they like
- Use local storage to save the bookmark
- User can see the items they bookmarked
- User can remove their bookmarks
- The App layout can be a Single Screen with two Tabs. 
  - One for showing all NFTS 
  - The other for showing the bookmarked NFTs.

**Note:** Do not make another screen for DetailView when the user taps on the list item. ListView should be enough.
