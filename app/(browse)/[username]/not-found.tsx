import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center space-y-4 text-muted-foreground">
      <div>
        <h1 className="absolute text-[5rem] text-[#6c23ff] font-black">404</h1>
        <p className="relative text-[5rem] text-[#5900ff1f] animate-ping font-black">
          404
        </p>
      </div>
      <h2 className="text-xl">Page not found</h2>
      <p className="text-center">
        We couldn&apos;t find what you were looking for.
      </p>
      <Button variant="primary" asChild size="lg">
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
