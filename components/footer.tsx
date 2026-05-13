import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border max-w-[1200px] mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <Image src="/logo-white.png" alt="Bucket Labs" width={36} height={28} className="h-7 w-auto" />
      </div>
      <div className="flex gap-8">
        <a href="https://bucketlabs.ai" target="_blank" rel="noopener noreferrer" className="text-muted text-sm hover:text-foreground transition-colors">
          BucketLabs.ai
        </a>
        <a href="https://mymir.ai" target="_blank" rel="noopener noreferrer" className="text-muted text-sm hover:text-foreground transition-colors">
          Mymir.ai
        </a>
      </div>
      <p className="text-dim text-xs">
        &copy; 2026 Bucket Labs. All rights reserved.
      </p>
    </footer>
  );
}
