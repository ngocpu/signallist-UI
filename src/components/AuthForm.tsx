import React from "react";
import { useForm, type Resolver } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "@/constants/router";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});

const registerSchema = formSchema.extend({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters long." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
  country: z.string().nonempty({ message: "Country is required." }),
  investmentGoals: z
    .string()
    .nonempty({ message: "Investment goals are required." }),
  riskTolerance: z
    .string()
    .nonempty({ message: "Risk tolerance is required." }),
  preferredIndustry: z
    .string()
    .nonempty({ message: "Preferred industry is required." }),
});

const getFormSchema = (type: AuthTypes) =>
  type === "login" ? formSchema : registerSchema;
type AuthTypes = "login" | "register";

type FormValues = Partial<z.infer<typeof registerSchema>>;

const AuthForm: React.FC<{ type: AuthTypes }> = ({ type }) => {
  const authFormSchema = getFormSchema(type);
  const form = useForm<FormValues>({
    resolver: zodResolver(authFormSchema) as Resolver<FormValues>,
    defaultValues: {
      email: "",
      password: "",
      country: undefined,
      fullName: "",
      investmentGoals: undefined,
      riskTolerance: undefined,
      preferredIndustry: undefined,
    },
  });
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <div className="w-full md:w-[80%] px-6 flex flex-col gap-8">
      <h1 className="text-2xl font-bold mb-6">{type === "login" ? "Log In Your Account" : "Sign Up & Personalize"}</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4"
        >
          {type === "register" && (
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {type === "register" && (
            <>
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          {/* placeholder shown via SelectValue; no empty-value items allowed */}
                          <SelectItem value="AU">Australia</SelectItem>
                          <SelectItem value="US">United States</SelectItem>
                          <SelectItem value="VN">Vietnam</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="investmentGoals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Investment Goals</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select goal" />
                        </SelectTrigger>
                        <SelectContent>
                          {/* placeholder shown via SelectValue; no empty-value items allowed */}
                          <SelectItem value="growth">Growth</SelectItem>
                          <SelectItem value="income">Income</SelectItem>
                          <SelectItem value="conservative">
                            Conservative
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="riskTolerance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Risk Tolerance</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select risk level" />
                        </SelectTrigger>
                        <SelectContent>
                          {/* placeholder shown via SelectValue; no empty-value items allowed */}
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preferredIndustry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Industry</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your preferred industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {/* placeholder shown via SelectValue; no empty-value items allowed */}
                          <SelectItem value="tech">Technology</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="health">Healthcare</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          <Button type="submit" className="py-3 px-3.5 rounded-md bg-linear-to-r from-button-on-sufer-start to-button-on-sufer-end h-11 cursor-pointer hover:opacity-90">
            {type === "login" ? "Login" : "Start Your Investing Journey"}
          </Button>
          <p>
            {type === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
            <Link
              to={
                type === "login"
                  ? `${ROUTER_PATH.AUTH}/${ROUTER_PATH.AUTH_REGISTER}`
                  : `${ROUTER_PATH.AUTH}/${ROUTER_PATH.AUTH_LOGIN}`
              }
            >
              {type === "login" ? "Register" : "Login"}
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default AuthForm;
