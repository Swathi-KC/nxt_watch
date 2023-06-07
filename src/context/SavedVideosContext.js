import React from 'react'

const SavedVideosContext = React.createContext({
  saved: false,
  savedVideosList: [],
  updateSaveStatus: () => {},
  addVideosToSavedList: () => {},
  deleteVideosFromSavedList: () => {},
})

export default SavedVideosContext
