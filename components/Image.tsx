"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  blurDataURL?: string;
}

export default function ProjectImage({
  src,
  alt,
  className = "",
  priority = false,
  blurDataURL,
}: ProjectImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`object-cover transition-transform duration-700 ${className}`}
        priority={priority}
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        loading={priority ? "eager" : "lazy"}
      />
    </motion.div>
  );
}
