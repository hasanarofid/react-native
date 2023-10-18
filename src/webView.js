import { WebView } from 'react-native-webview';
import React from 'react'

// export default function webView() {
//   return (
//     <WebView
//     source={{
//       uri: 'https://rsudrsoetomo.jatimprov.go.id/'
//     }}
//     style={{ marginTop: 20 }}
//   />
//   )
// }

export default function webView() {
    return (
      <WebView
      originWhitelist={['*']}
      source={{
        html: '<h1><center>CONTOH WEBVIEW HTML</center></h1>'
      }}
     />
    )
  }
  
