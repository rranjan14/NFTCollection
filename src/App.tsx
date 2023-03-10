import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import { ApiContext, standardApiClient } from './context/api';
import { BookmarkContextProvider } from './context/bookmarks';
import NavigationRoot from './navigation';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ApiContext.Provider value={standardApiClient}>
      <BookmarkContextProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={"transparent"}
          translucent
        />
        <NavigationRoot />
      </BookmarkContextProvider>
    </ApiContext.Provider>
  );
}

export default App;
