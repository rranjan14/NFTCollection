import React, {createContext, useEffect, useMemo, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_KEY} from '../../util/constants';

export interface IBookmarkService {
  /**
   * Keeps the token_id of the nft's that are bookmarked
   */
  bookmarkedTokenIds: string[];
  /**
   * Bookmark a new token
   */
  addBookmark: (token_id: string) => Promise<void>;
  /**
   * Removes a bookmarked token
   */
  removeBookmark: (token_id: string) => Promise<void>;
}

export const BookmarkContext = createContext<IBookmarkService>(null as never);

export const BookmarkContextProvider = React.memo(
  function BookmarkContextProvider({children}: {children: React.ReactNode}) {
    const [bookmarkedTokenIds, setBookmarkedTokenIds] = useState<string[]>([]);

    const worldClockService = useMemo<IBookmarkService>(() => {
      return {
        bookmarkedTokenIds,
        async addBookmark(token_id: string) {
          const newList = [...bookmarkedTokenIds, token_id];
          setBookmarkedTokenIds(newList);
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
        },
        async removeBookmark(token_id: string) {
          const newList = bookmarkedTokenIds.filter(id => id !== token_id);
          setBookmarkedTokenIds(newList);
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
        },
      };
    }, [bookmarkedTokenIds]);

    useEffect(() => {
      (async () => {
        const bookmarkedItems = await AsyncStorage.getItem(STORAGE_KEY);
        if (bookmarkedItems) {
          const savedBookmarkedItems = JSON.parse(bookmarkedItems) as string[];
          setBookmarkedTokenIds(savedBookmarkedItems);
        }
      })();
    }, []);

    return (
      <BookmarkContext.Provider value={worldClockService}>
        {children}
      </BookmarkContext.Provider>
    );
  },
);
