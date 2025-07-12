"use client";

import { Button, Flex, Input, Text } from "@mantine/core";
import InputLabeled from "../ui/InputLabeled";
import { useState } from "react";
import { notifyError, notifySuccess } from "../notifications/notify";
import postNewUser from "../../app/actions/postNewUser";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const router = useRouter();
  // State variables for form inputs
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Email validation regex
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const onSubmit = async () => {
    if (!email || !username || !password) {
      return notifyError("Empty input", "All fields are required");
    }

    if (!isValidEmail(email)) {
      return notifyError("Invalid email", "Please enter a valid email address");
    }

    try {
      await postNewUser(email, password, username);
      notifySuccess("Success", "User created");
      setEmail("");
      setUsername("");
      setPassword("");
      router.push("/");
    } catch (err) {
      console.error(err);
      notifyError("Error", "Failed to create user.");
    }
  };

  return (
    <>
      <InputLabeled label="Email">
        <Input
          type="email"
          placeholder="Enter your email"
          leftSection={<MdOutlineEmail size={16} />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputLabeled>
      <InputLabeled label="Username">
        <Input
          placeholder="Enter your unique username"
          leftSection={<FaRegUser size={16} />}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </InputLabeled>
      <InputLabeled label="Password">
        <Input
          type="password"
          placeholder="Enter your password"
          leftSection={<IoKeyOutline size={16} />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputLabeled>

      <Button onClick={onSubmit}>Register</Button>

      <Flex justify={"center"} gap={4}>
        <Text size="sm">Already have an account?</Text>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Text size="sm" c={"persian"} fw={600} style={{ cursor: "pointer" }}>
            Sign in
          </Text>
        </Link>
      </Flex>
    </>
  );
};

export default RegisterForm;
