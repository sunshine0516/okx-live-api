export default async function handler(req, res) {
  const symbol = req.query.symbol || "BTC-USDT-SWAP";

  const response = await fetch(
    `https://www.okx.com/api/v5/market/ticker?instId=${symbol}`
  );

  const data = await response.json();

  res.status(200).json({
    symbol,
    okx: data.data[0]
  });
}
