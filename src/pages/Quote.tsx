import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { User, Mail, Phone, MessageSquare, CalendarIcon, MapPin } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(5, { message: "Please enter a valid phone number" }),
  address: z.string().optional(),
  projectType: z.string().min(1, { message: "Please select a project type" }),
  date: z.date().optional(),
  urgency: z.string().optional(),
  message: z.string().min(10, { message: "Please provide some details about your project" }),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Quote = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      projectType: "",
      message: "",
      urgency: "standard",
      acceptTerms: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    // In a real app, this would send the data to a server
    console.log(data);
    
    toast({
      title: "Quote Request Submitted",
      description: "We've received your request and will contact you within 24 hours.",
    });
    
    form.reset();
  };

  return (
    <div className="container max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get a Custom Quote</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Fill out the form below and our expert team will prepare a personalized 
          quote for your building project.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>
                Please provide the details of your building project so we can give you an accurate quote.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <div className="relative">
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-3 top-3 text-gray-400">
                                  <User className="h-4 w-4" />
                                </span>
                                <Input className="pl-10" placeholder="Your full name" {...field} />
                              </div>
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <div className="relative">
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-3 top-3 text-gray-400">
                                  <Mail className="h-4 w-4" />
                                </span>
                                <Input className="pl-10" placeholder="Your email address" {...field} />
                              </div>
                            </FormControl>
                          </div>
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
                          <div className="relative">
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-3 top-3 text-gray-400">
                                  <Phone className="h-4 w-4" />
                                </span>
                                <Input className="pl-10" placeholder="Your phone number" {...field} />
                              </div>
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <div className="relative">
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-3 top-3 text-gray-400">
                                  <MapPin className="h-4 w-4" />
                                </span>
                                <Input className="pl-10" placeholder="Project location" {...field} />
                              </div>
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Type</FormLabel>
                        <FormControl>
                          <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            {...field}
                          >
                            <option value="">Select a project type</option>
                            <option value="new-build">New Build</option>
                            <option value="home-renovation">Home Renovation</option>
                            <option value="kitchen-renovation">Kitchen Renovation</option>
                            <option value="bathroom-renovation">Bathroom Renovation</option>
                            <option value="extension">Home Extension</option>
                            <option value="repairs">Repairs & Maintenance</option>
                            <option value="commercial">Commercial Construction</option>
                            <option value="other">Other</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Preferred Start Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date(new Date().setHours(0, 0, 0, 0))
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="urgency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Urgency</FormLabel>
                          <FormControl>
                            <select
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                              {...field}
                            >
                              <option value="standard">Standard (2-4 weeks)</option>
                              <option value="urgent">Urgent (1-2 weeks)</option>
                              <option value="immediate">Immediate (ASAP)</option>
                              <option value="flexible">Flexible (3+ months)</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Details</FormLabel>
                        <div className="relative">
                          <FormControl>
                            <div className="relative">
                              <span className="absolute left-3 top-3 text-gray-400">
                                <MessageSquare className="h-4 w-4" />
                              </span>
                              <Textarea
                                className="pl-10 min-h-[120px]"
                                placeholder="Please describe your project in detail including dimensions, materials, and any specific requirements"
                                {...field}
                              />
                            </div>
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="acceptTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the terms and conditions and privacy policy.
                          </FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-blue hover:bg-brand-blue/90"
                  >
                    Submit Quote Request
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Reach out to us directly if you have any questions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mr-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-gray-700 font-semibold">Phone</h3>
                  <p className="text-brand-blue font-medium">0800 BUILDING</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-gray-700 font-semibold">Email</h3>
                  <p className="text-brand-blue font-medium">info@aucklandbuilding.co.nz</p>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Why Choose Us?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">✓</div>
                    <span>Free, no-obligation quotes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">✓</div>
                    <span>Licensed and insured professionals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">✓</div>
                    <span>Quality materials and workmanship</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">✓</div>
                    <span>Competitive pricing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">✓</div>
                    <span>5-year workmanship warranty</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quote;
