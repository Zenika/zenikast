const functions = require('firebase-functions');

exports.oembed = functions.https.onRequest((request, response) => {
  console.log('request.query:', request.query);
  if (request.query.format === 'xml') {
    response.header('Content-Type', 'text/xml');
    response.send(
      `<?xml version="1.0" encoding="UTF-8"?>
<oembed>
  <version type="float">1.0</version>
  <type>rich</type>
  <provider-name>SoundCloud</provider-name>
  <provider-url>http://soundcloud.com</provider-url>
  <height type="integer">400</height>
  <width>100%</width>
  <title>Voyage Au Centre De La Tech - S01E01 - &#201;mission compl&#232;te by Voyage au Centre de la Tech</title>
  <description></description>
  <thumbnail-url>http://i1.sndcdn.com/artworks-000421040301-vyc6gn-t500x500.jpg</thumbnail-url>
  <html>&lt;![CDATA[&lt;iframe width="100%" height="400" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F514313973&amp;show_artwork=true"&gt;&lt;/iframe&gt;]]&gt;</html>
  <author-name>Voyage au Centre de la Tech</author-name>
  <author-url>https://soundcloud.com/voyageaucentredelatech</author-url>
</oembed>
`
    );
  } else if (request.query.format === 'json') {
    response.header('Content-Type', 'application/json');
    response.send(
      `{
  "version": 1.0,
  "type": "rich",
  "provider_name": "SoundCloud",
  "provider_url": "http://soundcloud.com",
  "height": 400,
  "width": "100%",
  "title": "Voyage Au Centre De La Tech - S01E01 - Émission complète by Voyage au Centre de la Tech",
  "description": "",
  "thumbnail_url": "http://i1.sndcdn.com/artworks-000421040301-vyc6gn-t500x500.jpg",
  "html": "<iframe width=\\"100%\\" height=\\"400\\" scrolling=\\"no\\" frameborder=\\"no\\" src=\\"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F514313973&show_artwork=true\\"></iframe>",
  "author_name": "Voyage au Centre de la Tech",
  "author_url": "https://soundcloud.com/voyageaucentredelatech"
}
`
    );
  } else {
    // error not handled
  }
});

exports.test = functions.https.onRequest((request, response) => {
  response.header('Content-Type', 'text/html');
  response.send(
    `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta property="og:url" content="https://us-central1-zenikast-dev.cloudfunctions.net/test"/>
    <meta property="og:title" content="oEmbed testing"/>
    <meta property="og:description" content="This page is for oEmbed testing purpose :D"/>
    <meta property="og:site_name" content="Zenikast"/>
    <meta property="og:image" content="https://www.harvard.edu/sites/default/files/default_images/harvard-social1200.jpg"/>
    <title>oEmbed test page</title>
    <link rel="alternate" type="text/xml+oembed" href="https://us-central1-zenikast-dev.cloudfunctions.net/oembed?format=xml&url=https%3A%2F%2Fus-central1-zenikast-dev.cloudfunctions.net%2Ftest" title="My oEmbed page"/>
    <link rel="alternate" type="application/json+oembed" href="https://us-central1-zenikast-dev.cloudfunctions.net/oembed?format=json&url=https%3A%2F%2Fus-central1-zenikast-dev.cloudfunctions.net%2Ftest" title="My oEmbed page"/>
  </head>
  <body>
    There is no more than this in the body...
  </body>
</html>
`
  );
});
