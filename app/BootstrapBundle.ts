"use client"
import { useEffect } from "react";

export default function BootstrapBundle() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);
  return null
}
