import React from 'react';
import QRCode from "react-qr-code";
import useSWR from "swr";

export default function QR_Codepage() {
    const { data, error } = useSWR("/api/user", fetch);
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
  return (
    <div className="App">
      <h1>Hotspot app</h1>
      <h2>Visitors, scan the following qr code</h2>
      <QRCode value="http://kapiva.in" size="250" />
    </div>
  )
}
