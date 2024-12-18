"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Rocket } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  // Billing Details
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  streetAddress: z.string().min(5, "Please enter a valid street address"),
  apartment: z.string().optional(),
  city: z.string().min(2, "Please enter a valid city"),
  state: z.string().min(2, "Please enter a valid state"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),

  // Payment Details
  paymentMethod: z.string(),
  cardName: z.string().min(2, "Please enter the name on your card"),
  cardNumber: z.string().min(16, "Please enter a valid card number"),
  expiryMonth: z.string().min(2, "MM"),
  expiryYear: z.string().min(4, "YYYY"),
  cvv: z.string().min(3, "Please enter a valid CVV"),
});

export function CheckoutForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: "creditCard",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Order Summary */}
        <Collapsible
          defaultOpen
          className="bg-white rounded-lg "
          style={{ boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)" }}
        >
          <CollapsibleTrigger className="flex w-full items-center justify-between p-6">
            <h2 className="text-xl font-semibold">Your order</h2>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-6 pb-6">
            <div className="flex items-center space-x-4 border-b pb-4">
              <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Starter plan</h3>
                <p className="text-sm text-gray-500">Monthly subscription</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$2.75/M</p>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-blue-600">$2.75</span>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Billing Details */}
        <Collapsible
          style={{ boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)" }}
          defaultOpen
          className="bg-white rounded-lg shadow-sm"
        >
          <CollapsibleTrigger className="flex w-full items-center justify-between p-6">
            <h2 className="text-xl font-semibold">Billing details</h2>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-6 pb-6">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="First name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="streetAddress"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Street address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="House number & street name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="apartment"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Apartment, suite, etc.</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Apartment, suite, unit, etc. (optional)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Town/City</FormLabel>
                    <FormControl>
                      <Input placeholder="Town/City" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="State" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Payment Method */}
        <Collapsible
          style={{ boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)" }}
          defaultOpen
          className="bg-white rounded-lg shadow-sm"
        >
          <CollapsibleTrigger className="flex w-full items-center justify-between p-6">
            <h2 className="text-xl font-semibold">Payment Method</h2>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-6 pb-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="creditCard">Credit Card</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cardName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name on Card</FormLabel>
                    <FormControl>
                      <Input placeholder="Card holder name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Credit Card</FormLabel>
                    <FormControl>
                      <Input placeholder="0000 0000 0000 0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="expiryMonth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>MM</FormLabel>
                      <FormControl>
                        <Input placeholder="MM" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="expiryYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>YYYY</FormLabel>
                      <FormControl>
                        <Input placeholder="YYYY" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cvv"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CVV / CCV</FormLabel>
                      <FormControl>
                        <Input placeholder="3 or 4 digit number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Sign Up */}

        <Button
          type="submit"
          className="w-full h-12 bg-blue-600 hover:bg-blue-700"
        >
          Sign-up & place order
        </Button>
      </form>
    </Form>
  );
}
