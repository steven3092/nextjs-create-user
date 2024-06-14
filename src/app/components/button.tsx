"use client";

export const Button = ({
  name,
  type,
}: {
  name: string;
  type: "submit" | "reset" | "button" | undefined;
}) => {
  return <button type={type}>{name}</button>;
};
