"use client";

import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";

export function CartContent() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Cart Table */}
      <div
        style={{ boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)" }}
        className="bg-white rounded-lg shadow-sm overflow-hidden"
      >
        <div className="grid grid-cols-3 p-4 border-b text-sm font-medium">
          <div>Description</div>
          <div className="text-center">Price</div>
          <div className="text-right">Subtotal</div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-3 items-center">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Starter plan</h3>
              </div>
            </div>
            <div className="text-center text-gray-600">$2.75/M</div>
            <div className="text-right text-blue-600 font-medium">$2.75</div>
          </div>
        </div>
      </div>

      {/* Cart Total */}
      <div
        style={{ boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)" }}
        className="bg-white rounded-lg shadow-sm overflow-hidden"
      >
        <div className="p-4">
          <h2 className="font-semibold text-lg mb-4">Cart total</h2>
          <div className="space-y-2">
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Price</span>
              <span>$2.75/M</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-blue-600 font-medium">$2.75</span>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="flex justify-start">
        <Link href="/checkout">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Proceed To Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
}
