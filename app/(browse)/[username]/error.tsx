"use client";

import { Button } from "@/components/ui/button";
import { MdError } from "react-icons/md";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center space-y-4 text-muted-foreground">
      <MdError className="h-44 w-44 fill-[#6c23ff]" />
      <p className="text-center ">Oops! Something went wrong</p>
      <Button variant="primary" asChild size="lg">
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
