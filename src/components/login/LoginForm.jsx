"use client";

import { Button, Flex, Input, Text } from "@mantine/core";
import InputLabeled from "../ui/InputLabeled";
import { useState } from "react";
import Link from "next/link";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { notifyError, notifySuccess } from "../notifications/notify";
import { useRouter } from "next/navigation";
import postLogin from "@/app/actions/checkUserCredentials";
import CardItem from "../ui/CardItem";
import Loader from "../ui/Loader";

const LoginForm = () => {
  const router = useRouter();
  const [userInput, setUserInput] = useState("");
  const [pwdInput, setPwdInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await postLogin(userInput, pwdInput);
      notifySuccess("Success", "Login successful");
      router.push("/log");
    } catch (err) {
      console.error(err);
      notifyError("Login failed", "Incorrect user or password");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <InputLabeled label="Email">
        <Input
          placeholder="Enter your email"
          leftSection={<MdOutlineEmail size={16} />}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !isSubmitting) onSubmit();
          }}
        />
      </InputLabeled>
      <InputLabeled label="Password">
        <Input
          placeholder="*******"
          type="password"
          leftSection={<IoKeyOutline size={16} />}
          value={pwdInput}
          onChange={(e) => setPwdInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !isSubmitting) onSubmit();
          }}
        />
      </InputLabeled>

      {isSubmitting ? <Loader /> : <Button onClick={onSubmit}>Sign in</Button>}

      <Flex justify={"center"} gap={4}>
        <Text size="sm">Don&apos;t have an account?</Text>
        <Link href="/register" style={{ textDecoration: "none" }}>
          <Text size="sm" c={"persian"} fw={600} style={{ cursor: "pointer" }}>
            Sign up
          </Text>
        </Link>
      </Flex>

      <CardItem>
        <Flex direction={"column"} gap={1}>
          <Text size={"xs"} fw={600}>
            Demo credentials:
          </Text>
          <Text size={"xs"}>Email: test01@liftlogger.com</Text>
          <Text size={"xs"}>Password: test123</Text>
        </Flex>
      </CardItem>
    </>
  );
};

export default LoginForm;
