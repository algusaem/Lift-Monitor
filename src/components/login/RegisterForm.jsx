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
import Loader from "../ui/Loader";

const RegisterForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const onSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    if (!email || !username || !password) {
      notifyError("Empty input", "All fields are required");
      setIsSubmitting(false);
      return;
    }

    if (!isValidEmail(email)) {
      notifyError("Invalid email", "Please enter a valid email address");
      setIsSubmitting(false);
      return;
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
      setIsSubmitting(false);
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
          onKeyDown={(e) => {
            if (e.key === "Enter" && !isSubmitting) onSubmit();
          }}
        />
      </InputLabeled>

      <InputLabeled label="Username">
        <Input
          placeholder="Enter your unique username"
          leftSection={<FaRegUser size={16} />}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !isSubmitting) onSubmit();
          }}
        />
      </InputLabeled>

      <InputLabeled label="Password">
        <Input
          type="password"
          placeholder="Enter your password"
          leftSection={<IoKeyOutline size={16} />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !isSubmitting) onSubmit();
          }}
        />
      </InputLabeled>

      {isSubmitting ? <Loader /> : <Button onClick={onSubmit}>Register</Button>}

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
