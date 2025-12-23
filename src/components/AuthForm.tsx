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
import {
  COUNTRY_SELECT,
  INVESTMENT_GOALS,
  RISK_TOLERANCE,
  INDUSTRY_SELECT,
} from "@/constants/constants";

const formSchema = z.object({
  email: z.email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});

const registerSchema = formSchema.extend({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters long." }),
  email: z.email({ message: "Invalid email address." }),
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
    <div className="w-full md:w-[80%] px-6 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">
        {type === "login" ? "Log In Your Account" : "Sign Up & Personalize"}
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-2.5"
        >
          {type === "register" && (
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="body-s-regular text-gray-300">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Full name" {...field} />
                  </FormControl>
                  <FormMessage className="body-s-regular" />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="body-s-regular text-gray-300">
                  Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormMessage className="body-s-regular" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="body-s-regular text-gray-300">
                  Password
                </FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormMessage className="body-s-regular" />
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
                    <FormLabel className="body-s-regular text-gray-300">
                      Country
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent position="popper" side="bottom">
                          {/* placeholder shown via SelectValue; no empty-value items allowed */}
                          {COUNTRY_SELECT.map((c) => (
                            <SelectItem key={c.value} value={c.value}>
                              <img
                                src={c.flag}
                                alt={c.label}
                                className="w-5 h-5 rounded-full object-cover mr-2"
                              />
                              <span>{c.label}</span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="body-s-regular" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="investmentGoals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="body-s-regular text-gray-300">
                      Investment Goals
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select goal" />
                        </SelectTrigger>
                        <SelectContent position="popper" side="bottom">
                          {INVESTMENT_GOALS.map((g) => (
                            <SelectItem key={g.value} value={g.value}>
                              {g.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="body-s-regular" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="riskTolerance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="body-s-regular text-gray-300">
                      Risk Tolerance
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select risk level" />
                        </SelectTrigger>
                        <SelectContent position="popper" side="bottom">
                          {RISK_TOLERANCE.map((r) => (
                            <SelectItem key={r.value} value={r.value}>
                              {r.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="body-s-regular" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preferredIndustry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="body-s-regular text-gray-300">
                      Preferred Industry
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your preferred industry" />
                        </SelectTrigger>
                        <SelectContent position="popper" side="bottom">
                          {INDUSTRY_SELECT.map((i) => (
                            <SelectItem key={i.value} value={i.value}>
                              {i.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="body-s-regular" />
                  </FormItem>
                )}
              />
            </>
          )}
          <Button
            type="submit"
            className="py-3 px-3.5 font-bold rounded-md bg-linear-to-r from-button-on-sufer-start to-button-on-sufer-end h-11 cursor-pointer hover:opacity-90"
          >
            {type === "login" ? "Login" : "Start Your Investing Journey"}
          </Button>
          <p className="body-s-regular text-center text-gray-200">
            {type === "login"
              ? "Don't have an account? "
              : "Already have an account? "}
            <Link
              to={
                type === "login"
                  ? `${ROUTER_PATH.AUTH}/${ROUTER_PATH.AUTH_REGISTER}`
                  : `${ROUTER_PATH.AUTH}/${ROUTER_PATH.AUTH_LOGIN}`
              }
              className="font-semibold text-white"
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
