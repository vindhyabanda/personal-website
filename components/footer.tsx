export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center gap-4 text-center md:gap-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">&copy; {currentYear} Vindhya Banda. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">
            Inspired by{" "}
            <a href="#" className="text-primary hover:underline">
              Nihal Maskey's design
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
