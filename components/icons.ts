import { AppWindow, Cable, Cloud, Database, ShieldCheck, Sparkles } from 'lucide-react';

// Icon keys used by services and the hero diagram in metadata.json.
export const icons = { platform: AppWindow, integration: Cable, data: Database, ai: Sparkles, cloud: Cloud, compliance: ShieldCheck };

export function iconFor(key: string) {
  return icons[key as keyof typeof icons];
}
