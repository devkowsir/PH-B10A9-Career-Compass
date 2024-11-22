import { ServicesSection } from "./routes/home/config";

export const SiteName = "Career Compass";
export const SiteSlogan = "Navigate Your Path, Empower Your Future";

export const ServiceLinks = ServicesSection.cards.map(({ shortName, slug }) => ({ shortName, slug }));
