export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-foreground/70 mb-4 sm:mb-0">
          © {new Date().getFullYear()} Muhammad Luqman. All Rights Reserved.
        </p>
        <p className="font-headline text-lg font-semibold text-primary/80">
          Luqman
        </p>
      </div>
    </footer>
  );
}
