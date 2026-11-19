# MidnaTech company website

The layout and styling follow the original midnatech.com design. Edit [metadata.json](./metadata.json) for page copy, navigation, section order and brand colors. Nothing in `components/` needs to change for wording updates.

- **Sections** render in the order listed in `sectionOrder`: about, services, work (products), integrations, process, experience, contact.
- **Products** live in `work.items`, with the custom-build card in `work.custom`. Each product's `image` is the dimmed photo behind its card. Set `screenshot.src` and `screenshot.alt` to show a real screenshot inside the card.
- **Integrations** live in `integrations.groups`. Add or remove a platform by editing the list.
- **Colors** live in `brand.palette` and feed the Tailwind theme (`bg-midna-dark`, `text-midna-accent` and so on).
- **Placeholders**: optional fields marked `[PLACEHOLDER]` stay out of the page until filled.
- **Media**: place approved images in `public/images/` and enter the path (for example, `/images/team.webp`) in the corresponding field.
- **Editorial notes** under `editorial` are reminders for the team and never render.

Run `npm install` and `npm run dev` for a local preview. Run `npm run build` to produce the static site in `dist/`.
