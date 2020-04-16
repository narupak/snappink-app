import React from 'react'
import { GlobalStyle } from './styles/global'
import { GlobalResetStyle } from './styles/reset'

// Medias (image, video, audio)
// ============================================================
function importAll(r) {
  let files = {}
  r.keys().forEach((item, index) => {
    files[item.replace('./', '')] = r(item)
  })
  return files;
}

export const CONTENTS = importAll(require.context('./media/images/contents', false, /\.(png|jpe?g|gif|svg)$/))
export const ICONS = importAll(require.context('./media/images/icons', false, /\.(png|jpe?g|gif|svg)$/))
export const LOGOS = importAll(require.context('./media/images/logos', false, /\.(png|jpe?g|gif|svg)$/))
export const SHAREDS = importAll(require.context('./media/images/shareds', false, /\.(png|jpe?g|gif|svg)$/))
export const VIDEOS = importAll(require.context('./media/videos', false, /\.(mp4)$/))
export const AUDIOS = importAll(require.context('./media/audios', false, /\.(mp3)$/))
export const DOCUMENTS = importAll(require.context('./media/documents', false, /\.(pdf|doc|docx|xls|xlsx|ppt|pptx|txt)$/))

// Styles
// ============================================================
export * from '../themes/styles/typographys'
export * from '../themes/styles/mixins'

// Variables
// ============================================================
export * from './variables'

// Global
// ============================================================
export const GlobalStyles = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <GlobalResetStyle />
    </React.Fragment>
  )
}