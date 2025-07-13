"use client";

import { Button, Card, Flex, Input, Text } from "@mantine/core";
import InputLabeled from "../ui/InputLabeled";
import { useState } from "react";
import Link from "next/link";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { notifyError, notifySuccess } from "../notifications/notify";
import { useRouter } from "next/navigation";
import postLogin from "@/app/actions/checkUserCredentials";

const LoginForm = () => {
  const router = useRouter();
  const [userInput, setUserInput] = useState("");
  const [pwdInput, setPwdInput] = useState("");

  const onSubmit = async () => {
    try {
      await postLogin(userInput, pwdInput);
      notifySuccess("Success", "Login successful");
      setUserInput("");
      setPwdInput("");
      router.push("/log");
    } catch (err) {
      console.error(err);
      notifyError("Login failed", "Incorrect user or password");
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
        />
      </InputLabeled>
      <InputLabeled label="Password">
        <Input
          placeholder="*******"
          type="password"
          leftSection={<IoKeyOutline size={16} />}
          value={pwdInput}
          onChange={(e) => setPwdInput(e.target.value)}
        />
      </InputLabeled>

      <Button onClick={onSubmit}>Sign in</Button>

      <Flex justify={"center"} gap={4}>
        <Text size="sm">Don&apos;t have an account?</Text>
        <Link href="/register" style={{ textDecoration: "none" }}>
          <Text size="sm" c={"persian"} fw={600} style={{ cursor: "pointer" }}>
            Sign up
          </Text>
        </Link>
      </Flex>

      <Card padding="lg" radius="md" withBorder>
        <Flex direction={"column"} gap={1}>
          <Text size={"xs"} fw={600}>
            Demo credentials:
          </Text>
          <Text size={"xs"}>Email: test01@liftlogger.com</Text>
          <Text size={"xs"}>Password: test123</Text>
        </Flex>
      </Card>
    </>
  );
};

export default LoginForm;
