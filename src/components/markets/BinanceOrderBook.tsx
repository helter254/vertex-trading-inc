
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface BinanceOrderBookProps {
  symbol: string;
}

const BinanceOrderBook = ({ symbol }: BinanceOrderBookProps) => {
  const [orderType, setOrderType] = useState<"market" | "limit">("market");
  
  // Sample order book data - in a real app, this would come from Binance API
  const bids = [
    { price: 65430.25, amount: 0.45, total: 29443.61 },
    { price: 65429.80, amount: 0.32, total: 20937.54 },
    { price: 65428.50, amount: 0.75, total: 49071.38 },
    { price: 65427.20, amount: 0.18, total: 11776.90 },
    { price: 65426.90, amount: 0.92, total: 60192.75 },
  ];
  
  const asks = [
    { price: 65432.40, amount: 0.28, total: 18321.07 },
    { price: 65433.10, amount: 0.54, total: 35333.87 },
    { price: 65434.50, amount: 0.39, total: 25519.46 },
    { price: 65435.80, amount: 0.81, total: 53003.00 },
    { price: 65436.20, amount: 0.63, total: 41224.81 },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-background/40 backdrop-blur-lg border-white/10 text-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-normal">Order Type</CardTitle>
          <Select value={orderType} onValueChange={(value) => setOrderType(value as "market" | "limit")}>
            <SelectTrigger className="w-32 bg-background/40 border-white/20 text-white">
              <SelectValue placeholder="Order Type" />
            </SelectTrigger>
            <SelectContent className="bg-background/95 border-white/20 text-white">
              <SelectItem value="market">Market</SelectItem>
              <SelectItem value="limit">Limit</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <div className="text-xs text-gray-400">Current {symbol} Price</div>
            <div className="text-2xl font-bold">$65,431.25</div>
            <div className="text-xs text-green-400">+$1,243.80 (1.94%)</div>
          </div>
          
          <div className="mt-6">
            <div className="text-sm font-medium mb-2">Market Summary</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="text-xs text-gray-400">24h High</div>
                <div>$66,789.50</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-gray-400">24h Low</div>
                <div>$64,123.75</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-gray-400">24h Volume</div>
                <div>12,453 BTC</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-gray-400">24h Turnover</div>
                <div>$812.4M</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-background/40 backdrop-blur-lg border-white/10 text-white row-span-2">
        <CardHeader>
          <CardTitle>Order Book</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div className="mb-4">
              <div className="text-sm font-medium mb-2 text-red-400">Asks</div>
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10">
                    <TableHead className="text-white">Price (USD)</TableHead>
                    <TableHead className="text-white text-right">Amount</TableHead>
                    <TableHead className="text-white text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {asks.map((ask, index) => (
                    <TableRow key={index} className="border-white/10">
                      <TableCell className="text-red-400">${ask.price.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{ask.amount}</TableCell>
                      <TableCell className="text-right">${ask.total.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="text-center py-3">
              <span className="text-xl font-medium">$65,431.25</span>
            </div>
            
            <div>
              <div className="text-sm font-medium mb-2 text-green-400">Bids</div>
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10">
                    <TableHead className="text-white">Price (USD)</TableHead>
                    <TableHead className="text-white text-right">Amount</TableHead>
                    <TableHead className="text-white text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bids.map((bid, index) => (
                    <TableRow key={index} className="border-white/10">
                      <TableCell className="text-green-400">${bid.price.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{bid.amount}</TableCell>
                      <TableCell className="text-right">${bid.total.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-background/40 backdrop-blur-lg border-white/10 text-white">
        <CardHeader>
          <CardTitle>Market Depth</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-center text-white/70 mb-2">
            This chart represents the visual representation of buy and sell orders at different price levels.
          </div>
          <div className="h-[200px] flex items-center justify-center">
            <div className="text-white/50 text-sm">
              In a real implementation, this would show a market depth chart from Binance API.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BinanceOrderBook;
