import { isFilled } from '../content';

export default function OptionalPhoto({ src, alt }: { src: string; alt: string }) {
  if (!isFilled(src) || !isFilled(alt)) return null;

  return <img className="block w-full h-auto mb-8 border border-white/10" src={src} alt={alt} loading="lazy" />;
}
